'use client'

import { ChevronDownIcon,Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import NavDrop from "./NavDrop.js"


function Header() {
    
  return (
    <div className=" mb-4 px-2 py-2 sm:px-5  flex items-center  sm:justify-between flex-wrap">
      {/*left*/}
      <div className=" flex items-center space-x-1 sm:space-x-3 mb-3">
        <img className="cursor-pointer md:ml-5" src="/zeeh.svg" alt="" />
        <h2  className="hidden zeeh font-extrabold  sm:text-3xl cursor-pointer xs:flex">Zeeh</h2>
      </div>
      {/*middle*/}
      <div className="ml-auto md:mr-5 sm:ml-10">
        <div className="sm:hidden rounded-md px-2 py-1  shadow mx-1  text-xs border-2 border-[#293CE1] hover:bg-gray-300 lg:mr-2 lg:ml-5 sm:ml-20 cursor-pointer align-baseline">
       <NavDrop />
       </div>
      <div className="hidden sm:flex font-Montserrat mr-5 text-xs mx-auto lg:px-5 sm:space-x-2 md:space-x-4 lg:space-x-8">
      
        <Link href="/business" className="text-[#707070] font-bold lg:text-base cursor-pointer space-x-4">Business</Link>
        <Link href="/business" className="text-[#707070] font-bold lg:text-base cursor-pointer space-x-4">Personal</Link>
        <Link href="/pricing" className="text-[#707070] font-bold lg:text-base cursor-pointer">Pricing</Link>
        <Link href="/documentation" className="text-[#707070] font-bold lg:text-base cursor-pointer">Documentation</Link>
        <div className="inline-flex">
        <Link href="/products" className="text-[#707070] font-bold lg:text-base cursor-pointer ">Products</Link>
        <ChevronDownIcon className="text-black w-4 cursor-pointer"/>
        </div>
        <Link href="/company" className="text-[#303030] font-bold lg:text-base cursor-pointer">Company</Link>
      </div>
      </div>
      {/*left*/}
      <div className="flex lg:mr-4">
        <button className="grad1 text-white rounded-md px-2 py-1 sm:py-1.5 sm:px-2 lg:px-5 shadow mx-1 sm:mx-1 text-xs sm:text-lg hover:brightness-75">Log in</button>
        <button className=" rounded-md px-2 py-1 sm:py-1.5 sm:px-1.5 lg:px-5 shadow mx-1 sm:mx-2 text-xs sm:text-lg text-[#293CE1] border-2 border-[#293CE1] hover:bg-gray-300">Sign Up</button>
      </div>
      
    </div>
  )
}

export default Header