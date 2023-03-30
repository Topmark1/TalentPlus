'use client'

import { ChevronDownIcon,Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from 'react';



function Header() {
  const [navbar, setNavbar] = useState(false);
  
    
  return (
    <div className=""  id="home">
      <nav className="w-full bg-[#004DB3] shadow ">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6 lg:px-14">
      <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
        <Link href="/">
             <h2 className="font-AK  text-[37px] text-white" >Tech Time</h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          } `}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-[16px] font-bold">
            <li className="text-white">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="text-[#AAC4E6]">
              <a href="#about">
                About Us
              </a>
            </li>
            <li className="text-[#AAC4E6]">
              <a href="#courses">
                Courses
              </a>
            </li>
            <li className="text-[#AAC4E6]">
              <a href="#testimonial">
               Testimonial
              </a>
            </li>
            <li className="text-[#AAC4E6]">
              <a href="#community">
                Community
              </a>
            </li>
            <li className="text-[#004DB3]">
              <Link href="/newpage">
               <button className="px-5 py-2.5 rounded hover:bg-[#AAC4E6] hover:shadow-2xl bg-white">Enroll Now</button> 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header