import Link from 'next/link'
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
const SuccessPage = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    if (clearCart) {
      clearCart(); // Call clearCart only if it is defined
    }
  }, [clearCart]);
  return (
    <section className='py-72'>
      <div className='container mx-auto'>
        <h3 className='text-center mb-4'>
          Your payment wasw successful! Thank you.
        </h3>
        <Link href='/'>
          <button className='btn btn-primary mx-auto'>Back to the home page</button>
        </Link>
      </div>
    </section>
  )
}

export default SuccessPage