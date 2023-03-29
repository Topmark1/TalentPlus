'use client'

import Link from "next/link"

function About() {
  return (
    <div>
      <div className="bg-[#CCDBF0] flex items-center justify-center" id="about">
                    <img
                    src="/images/about/Frame 216.svg"  
                    className=" w-4/5 sm:w-2/3" 
                    alt='partners'
                    />
      </div>
    <div className="bg-[#F8F9FC] pt-10 p-4 px-4  md:px-6 lg:px-14 2xl:px-40">
      <div className="sm:flex  sm:items-center ">
        {/* High Quality */}
        <div className="flex flex-col items-center sm:items-start font-Sa sm:w-3/5 lg:w-1/2 ">
        <div className="flex items-start justify-start sm:text-start lg:-ml-10">
          <img src="/images/about/flower.svg" alt="" className="-mt-4  "/>
          <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px] text-center sm:text-start text-[#000F24]">High quality video, audio & live classes</h2>
        </div>     
        <p className=" font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-0 text-center sm:text-start py-1">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hoverhtness-75 hover:shadow-2xl bg-[#004DB3] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold my-2">View Courses</button>
        <div  className="text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold text-[#000F24] mt-5">
          <div className="flex mb-3">
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#3fa9692f] rounded"><img src="/images/about/a/volume_up.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Audio Classes</p>
            </div>
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#f79e8e47] rounded"><img src="/images/about/a/settings_input_antenna.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Live Classes</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#9369cd37] rounded"><img src="/images/about/a/autoplay.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Recorded Classes</p>
            </div>
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#5979cf31] rounded"><img src="/images/about/a/description.svg" alt="volume" className="p-2"/></div>
              <p className=" ">50+ Notes</p>
            </div>
          </div>
        </div>
        </div>
        {/* Concentartion man Pix */}
        <div className="mt-4 sm:-ml-5 lg:-ml-10 sm:w-2/5 lg:w-1/2">
          <img src="/images/about/concentrate.PNG" alt="concentrate" className=""/>
        </div>
      </div>
      {/* This is Why we are Best ... */}
      <div className="sm:flex sm:items-center font-Sa mt-10">
        {/* This is .. */}
        <div className="sm:w-1/2 flex flex-col">
          <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px] text-center sm:text-start text-[#000F24]">This is Why We Are Best From Others</h2>
          <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-0 text-center sm:text-start py-1">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <img src="/images/about/boy.PNG" className="mt-3" alt="boy studying"/>
        </div>
        {/*  four Box */}
        <div className="mt-4 sm:mx-3 2xl:mx-6 sm:w-1/2">
          {/* first line */}
          <div className="flex  mb-1.5 sm:mb-3 2xl:mb-5">
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2 mr-1.5 sm:mr-3 2xl:mr-5">
              <div className=" rounded bg-[#4C7FBD] ">
                <img src="/images/about/b/cast_for_education.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Experieneced Mentors</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2">
              <div className=" rounded bg-[#ED6BA6] ">
                <img src="/images/about/b/groups.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Affordable Prices</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>
          {/* seconf line */}
          <div className="flex  mb-1.5 sm:mb-3 2xl:mb-5">
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2 mr-1.5 sm:mr-3 2xl:mr-5">
              <div className=" rounded bg-[#EA6B45] ">
                <img src="/images/about/b/local_atm.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Affordable Prices</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2">
              <div className=" rounded bg-[#AECD5E] ">
                <img src="/images/about/b/schedule.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Flexible Learning</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About