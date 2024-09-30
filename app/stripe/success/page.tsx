'use client';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Link from 'next/link';

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      clearCart(); // Clear the cart only on the client side
    }
  }, [clearCart]);

  return (
    <section className='py-72'>
      <div className='container mx-auto'>
        <h3 className='text-center mb-4'>
          Your payment was successful! Thank you.
        </h3>
        <Link href='/'>
          <button className='btn btn-primary mx-auto'>
            Back to the home page
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
