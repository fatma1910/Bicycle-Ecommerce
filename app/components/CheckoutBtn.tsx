

import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
import { useShoppingCart } from "use-shopping-cart"

const CheckoutBtn = () => {

  const { user } = useUser();
  const router = useRouter();

  const handleCheckout = async () => {
    if (!user) {
      

			router.push('/sign-in')
      
		}else {
    try {
      const res = await redirectToCheckout();
      if(res?.error) {
        console.log(res);
      }

    } catch (error){
      console.log(error);
    }
  }
    
  }
  const {redirectToCheckout , handleCartClick} = useShoppingCart();

  

  return (
    <button className="btn btn-primary w-full "
    onClick={handleCheckout}
    >Proceed to checkout</button>
  )
}

export default CheckoutBtn