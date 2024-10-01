import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <section className='py-72'>
      <div className='container mx-auto'>
        <h3 className='text-center mb-4'>
          Your payment was successful! Thank you.
        </h3>
        <Link href='/'>
          <button className='btn btn-primary mx-auto' onClick={handleClearCart}>
            Back to the home page
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
