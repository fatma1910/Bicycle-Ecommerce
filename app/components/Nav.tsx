'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "Our Bikes",
    path: '/our-bikes'
  }
]

const Nav = ({containerStyes}: {containerStyes:string}) => {
  const pathname = usePathname();
  return (
    <nav className={containerStyes}>
      {links.map((link,index)=> {
        return(
          <Link
          className={`${link.path === pathname && 'text-accent'}`}
          href={link.path} key={index}> {link.name} </Link>)
        })}
    </nav>
  )
}

export default Nav