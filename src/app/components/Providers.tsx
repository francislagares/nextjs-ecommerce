'use client';

import { PropsWithChildren } from 'react';

import { CartProvider as USCProvider } from 'use-shopping-cart';

const CartProvider = ({ children }: PropsWithChildren) => {
  return (
    <USCProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='http://localhost:3000/success'
      cancelUrl='http://localhost:3000/error'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
      language='en-US'
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
