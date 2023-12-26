'use client';

import { PropsWithChildren } from 'react';

import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: PropsWithChildren) => {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='https://nextjs-ecommerce-francislagares.vercel.app/stripe/success'
      cancelUrl='https://nextjs-ecommerce-francislagares.vercel.app/stripe/error'
      currency='USD'
      billingAddressCollection={false}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
