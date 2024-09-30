'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart';

const SuccessPage = () => {

  
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