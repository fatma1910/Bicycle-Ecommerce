import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import {FaPlus,FaMinus,FaX } from 'react-icons/fa6'

const CartItem = ({item}:any) => {
    

    const { removeItem , incrementItem , decrementItem } = useShoppingCart()

  return (
    <div className="flex w-full justify-between  mb-4 items-center h-[120px] border-b">


        <div>
            <Image src={urlFor(item.images[0]).url()}  width={100} height={100} alt=""   loading="lazy"
            className="object-contain"
            />
        </div>

        <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
            <div className="flex items-center justify-between ">
                <h5>
                    {item.name}
                </h5>

                <button onClick={()=> removeItem(item.id)}> <FaX className="text-sm"/> </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4">
                    <button onClick={()=> item.quantity > 1 &&  decrementItem(item.id)}
                        disabled={item.quantity === 1}
                        className={`${item.quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        >
                        <FaMinus 
                        className="text-[10px]"/>
                    </button>
                    <div className="font-semibold">{item.quantity}</div>
                    <button>
                        <FaPlus 
                        onClick={()=> incrementItem(item.id)}
                        className="text-[10px]"/>
                    </button>
                </div>
                <div className="font-semibold text-balance text-right"> ${item.price * item.quantity} </div>
            </div>
        </div>

    </div>
  )
}

export default CartItem