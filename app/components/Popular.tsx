import Link from "next/link";
import {  getPopularData } from "../lib/sanity";
import PopularBikesCarousel from "./PopularBikesCarousel";




const Popular = async () => {

  const bikes = await getPopularData();

  return (
    <section className="py-24">
      <div className="container mx-auto ">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">The World's Premium Brands In One Destination.</p>
        <PopularBikesCarousel bikes={bikes}/>
        <Link href='/our-bikes'>
          <button className="btn btn-accent mx-auto mt-6"> 
            See all bikes
          </button>
        </Link>

      </div>
    </section>
  )
}

export default Popular