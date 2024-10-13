'use client'

import { urlFor } from "../lib/sanity";
import { BikeProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {CgEye , CgShoppingBag} from 'react-icons/cg'
import AddToCartBtn from "./AddToCart";

interface BikesProps_ {
    bike: BikeProps ;
}


const Bike = ({bike}:BikesProps_) => {

    const popularBikeCart = bike.categories.find((bike)=>bike.name === "popular");

  return (
    <div className="group mb-14 p-8">
        <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
            <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
            {popularBikeCart&& <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">Popular</div> }
            <Image src={urlFor(bike.images[0]).url()} quality={80} alt="" width={240} height={147}/>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <AddToCartBtn 
                price_id={bike.price_id}
                name={bike.name}
                currency="USD"
                description={bike.description}
                price={bike.price}
                images={bike.images}

                btnStyle="btn-accent btn-icon"  icon={<CgShoppingBag/>}/>
                <Link href={`/product/${bike.slug}`}>
                    <button className="btn-icon btn-primary">
                        <CgEye/>
                    </button>
                </Link>
            </div>
        </div>
        <div className=" ">
            <h5 className="text-gray-400 font-semibold mb-2">
                {bike.categories[0].name} bike
            </h5>
            <h4 className="mb-1">{bike.name}</h4>
            <div className="text-lg font-bold text-accent">${bike.price}
            </div>
        
        </div>
    </div>
  )
}

export default Bike