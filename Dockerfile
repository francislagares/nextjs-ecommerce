ARG NODE=alpine:latest

# Stage 1: Install dependencies
FROM ${NODE} AS deps

RUN apk update && apk add --no-cache libc6-compat nodejs yarn

WORKDIR /app

COPY package.json .

RUN if [ -f "yarn.lock" ]; then COPY yarn.lock ./; fi
RUN yarn set version stable

COPY . .

RUN yarn install --silent

# Stage 2: Build the app
FROM ${NODE} AS builder

RUN apk update && apk add --no-cache libc6-compat nodejs yarn

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Stage 3: Run the production
FROM ${NODE} AS runner

RUN apk update && apk add --no-cache libc6-compat nodejs yarn

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy assets and the generated standalone server
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Serve the app
CMD ["node", "server.js"]