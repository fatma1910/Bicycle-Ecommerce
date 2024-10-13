import { getPopularItemData, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/app/components/AddToCart";
import Link from "next/link";


import {Clock , Bike, PackageCheck , RefreshCw,ChevronLeft  } from 'lucide-react';
import { Params } from "@/types";


const ProductDetails = async ({params}:{params:Params}) => {

    const bike = await getPopularItemData(params.slug);

  return (
    <section className="pt-24 pb-32 " >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image src={urlFor(bike.images[0]).url()} width={473} height={290}  alt=''   loading="lazy"/>
          </div>

          <div className=" flex-1 flex-col flex justify-center items-start  gap-10 pl-6">
            <Link href='/' className="flex items-center gap-2 font-semibold  "> 
              <ChevronLeft size={20}/>
              Back To Home 
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>
                  {bike.name}
                </h3>
                <p className="text-lg font-semibold">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn
              price_id={bike.price_id}
              name={bike.name}
              
              currency="USD"
              description={bike.description}
              price={bike.price}
              images={bike.images}
              btnStyle="btn btn-accent" text="Add To Cart"  />
            </div>
            <div className=" flex flex-col gap-3 ">
              <div className="flex gap-2 ">
                <PackageCheck size={20} className="text-accent"/>
                <p>Free shipping on order over $130</p>
              </div>
              <div className="flex gap-2 ">
                <RefreshCw size={20} className="text-accent"/>
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2 ">
                <Bike size={20} className="text-accent"/>
                <p> the bicycles are partially assembled and benefit from transport insurance </p>
              </div>
              <div className="flex gap-2 ">
                <Clock size={20} className="text-accent"/>
                <p>Fast delivery</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section> 
  )
}

export default ProductDetails