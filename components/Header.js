'use client'

import { ChevronDownIcon,Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid"


function Header() {
    
  return (
    <div className=" mb-4 px-2 py-4 sm:p-5  flex items-center  sm:justify-between">
      {/*left*/}
      <div className=" flex items-center space-x-1 sm:space-x-3">
        <img className="cursor-pointer md:ml-5" src="/zeeh.png" alt="" />
        <h2  className="hidden zeeh font-extrabold  sm:text-3xl cursor-pointer xs:flex">Zeeh</h2>
      </div>
      {/*middle*/}
      <div className="ml-auto mr-5 sm:ml-10">
        <div className="sm:hidden rounded-md px-2 py-1  shadow mx-1  text-xs border-2 border-[#293CE1] hover:bg-gray-300 mr-2 ml-5 sm:ml-20 cursor-pointer">
       < ChevronDoubleDownIcon className="text-[#293CE1] w-3"/>
       </div>
      <div className="hidden sm:flex font-Montserrat mr-5  mx-auto px-5 sm:space-x-2 md:space-x-8">
        <p className="text-[#707070] font-bold text-base cursor-pointer space-x-4">Business</p>
        <p className="text-[#707070] font-bold text-base cursor-pointer">Personal</p>
        <p className="text-[#707070] font-bold text-base cursor-pointer">Pricing</p>
        <p className="text-[#707070] font-bold text-base cursor-pointer">Documentation</p>
        <div className="inline-flex">
        <p className="text-[#707070] font-bold text-base cursor-pointer ">Products</p>
        <ChevronDownIcon className="text-black w-4 cursor-pointer"/>
        </div>
        <p className="text-[#303030] font-bold text-base cursor-pointer">Company</p>
      </div>
      </div>
      {/*left*/}
      <div className="flex md:mr-4">
        <button className="grad1 text-white rounded-md px-2 py-1 sm:py-1.5 sm:px-5 shadow mx-1 sm:mx-2 text-xs sm:text-lg hover:brightness-75">Log in</button>
        <button className=" rounded-md px-2 py-1 sm:py-1.5 sm:px-5 shadow mx-1 sm:mx-2 text-xs sm:text-lg text-[#293CE1] border-2 border-[#293CE1] hover:bg-gray-300">Sign Up</button>
      </div>
      
    </div>
  )
}

export default Header