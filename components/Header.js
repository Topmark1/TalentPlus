'use client'

import { ChevronDownIcon } from "@heroicons/react/24/outline"


function Header() {
    
  return (
    <div className=" mb-4 p-2 sm:p-5 flex items-center justify-between ">
      {/*left*/}
      <div className="flex items-center space-x-4">
        <img className="cursor-pointer" src="/zeeh.png" alt="" />
        <h2  className="zeeh font-extrabold  text-5xl cursor-pointer">Zeeh</h2>
      </div>
      {/*middle*/}
      <div className="flex font-Montserrat space-x-4">
        <p className="text-[#707070] font-bold text-base">Business</p>
        <p className="text-[#707070] font-bold text-base">Personal</p>
        <p className="text-[#707070] font-bold text-base">Pricing</p>
        <p className="text-[#707070] font-bold text-base">Documentation</p>
        <div className="flex">
        <p className="text-[#707070] font-bold text-base">Products</p>
        <ChevronDownIcon className="text-xl"/>
        </div>
        <p className="text-[#303030] font-bold text-base">Company</p>
      </div>
      {/*left*/}
      

      <div></div>
      
    </div>
  )
}

export default Header