'use client'

import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";

import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {

  const {cartCount,handleCartClick} = useShoppingCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 py-8 z-40 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/' className="hover:text-current">
        <h1 className="text-[26px] ">
          <span className="text-accent">B</span>ikezz
        </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyes={"flex gap-[36px]"} />
          <div onClick={()=> handleCartClick()} className="relative cursor-pointer">
            <CgShoppingBag className="text-[26px] "/>
            <div className="bg-accent flex justify-center items-center rounded-full w-[18px] h-[18px] absolute -bottom-1 -right-1 text-white text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  )
}

export default Header