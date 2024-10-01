'use client'

import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react"; // Import useState for handling search input
import { LogIn } from "lucide-react";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearch = (e:any) => {
    e.preventDefault(); 
    if (searchQuery) {

      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40 px-4">
      <div className=" mx-auto flex justify-between items-center">
        <Link href='/' className="hover:text-current flex-1">
          <h1 className="text-[26px]">
            <span className="text-accent">B</span>ikezz
          </h1>
        </Link>
        <div className="flex flex-1 mr-2 md:mr-auto ">
        <form onSubmit={handleSearch} className="relative ">
            <input
              type="text"
              placeholder="Search bikes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md md:px-4 md:w-72 xl:w-96 md:py-2 focus:outline-none px-1 py-1 text-left placeholder:text-left"
            />
            <button type="submit" className="absolute right-0 bg-accent text-white md:px-4 md:py-2 px-1 py-2 rounded-md focus:outline-none">
              Search
            </button>
          </form>
        </div>
        
        <div className="flex items-center gap-[18px] ">
        
        <Nav containerStyes={"gap-[36px] hidden  md:flex"} />
          
          <Link
            href="/sign-in"
          >
           <LogIn  className="cursor-pointer" />
          </Link>
          <div onClick={() => handleCartClick()} className="relative cursor-pointer">
            <CgShoppingBag className="text-[26px] " />
            <div className="bg-accent flex justify-center items-center rounded-full w-[18px] h-[18px] absolute -bottom-1 -right-1 text-white text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />

        </div>
      </div>
    </header>
  );
}

export default Header;
