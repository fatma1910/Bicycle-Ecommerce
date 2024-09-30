'use client';
import { CartProvider as CProvider } from "use-shopping-cart";
import { ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY||"" }
      successUrl="https://bicycle-ecommerce-eta.vercel.app/stripe/success"
      cancelUrl="https://bicycle-ecommerce-eta.vercel.app/stripe/error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
