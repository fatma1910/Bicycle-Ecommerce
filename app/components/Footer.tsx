import Link from "next/link"
import { Input } from "./ui/input";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookFill,
  RiPinterestFill,
} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 ">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter</h2>
              <p>
                Be the first to get the latest news about trends, promotions, and much more!
              </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your Email address"/>
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">Join</button>
          </form>

          <div className="flex gap-8 text-[20px] mx-auto text-white/60 mb-20">
            <Link href=''>
              <RiYoutubeFill/>
            </Link>
            <Link href=''>
              <RiFacebookFill/>
            </Link>
            <Link href=''>
              <RiInstagramFill/>
            </Link>
            <Link href=''>
              <RiPinterestFill/>
            </Link>
            <Link href=''>
              <RiTwitterFill/>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-white/60 ">
        Copyright &copy; 2024 Bikez. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer