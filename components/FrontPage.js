
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function FrontPage() {

  const [number, setNumber] = useState(5);
setTimeout(() => 
setNumber((num)=>num<255?num+5:num=255), 100);     
  

  return (
    <div className="relative flex bg-[#004DB3] items-center">
    <div className=''>
        <img  className='absolute transform scale-50 2xl:scale-100 -left-8 lg:-left-4 2xl:left-0 top-[270px] 2xl:top-[440px]' src='/Techbg/Vector.svg' alt='wiggle' >
        </img>
        <img    className='hidden lg:flex absolute transform scale-50 2xl:scale-100 left-[100px] sm:left-[280px] md:left-[480px] top-[93px]' src='/Techbg/Vector-1.svg' alt='dot'>
        </img>
        <img    className='hidden lg:flex absolute transform scale-50 2xl:scale-100 left-[30px] sm:left-[50px] md:left-[90px] top-[90px]' src='/Techbg/Vector-4.svg' alt='small circle'>
        </img>
        
       

    </div>
    <div className="flex flex-col sm:flex-row px-4  md:px-6 lg:px-14 2xl:px-40 pt-25 items-center ">
      <div className="text-white flex flex-col  text-center sm:text-start items-center sm:items-start sm:w-1/2 pt-3 sm:pt-0">
        <h1 className="font-CD font-bold text-[32px] sm:text-[38px] 2xl:text-[64px] leading-[45px] sm:leading-[47px] 2xl:leading-[82px] pb-3 2xl:pb-4">Grow your skills to advance your career path</h1>
        <p className="font-Sa font-medium text-[8px] leading-[14px] sm:leading-[26px] sm:text-[16px] ">build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
        <div className="flex font-Sa text-[8px] sm:text-[16px] font-bold my-4">
          <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:bg-[#AAC4E6] hover:shadow-2xl border-2 border-white flex items-center mr-3"><span>Get Started Now </span><span><ArrowUpRightIcon className="w-4 pl-2 font-bold"/></span></button>
          <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:bg-[#AAC4E6] hover:shadow-2xl bg-white text-[#004DB3]">Enroll Now</button>
        </div>
        <div className="flex items-center">
          <div className="flex w-[90px] sm:w-[140px] 2xl:w-[200px] mr-1 sm:mr-2 " >
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className={`${index==0?'':'-ml-2 sm:-ml-3 lg:-ml-5'} `}><img src={`/images/home/Frame 9${index+5}.svg`} alt='mini profile pix'></img></div>
          ))
        }
          </div>
          <div>
            <h4 className="text-[17px] sm:text-[24px] font-bold font-CD leading-[14px] sm:leading-[16px] 2xl:leading-[30px] "><span>{number}</span>k+</h4>
            <p className="text-Sa font-medium text-[8px] sm:text-[16px]">previews</p>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 pt-3 sm:pt-0 flex">
        {/* girl and logos */}
        <div>
        <img    className='transform scale-50 2xl:scale-100  ml-[0px] sm:ml-[0px] lg:ml-[0px] xl:ml-[0px] mt-[0px]'  src='/Techbg/Vector-3.svg' alt='bulb' />
        <img    className='transform scale-50 2xl:scale-100 ml-[0px] sm:ml-[0px] md:ml-[0px] mt-[0px]' src='/Techbg/Vector-2.svg' alt='big circle'>
        </img>
        <img    className='transform scale-50 2xl:scale-100 ml-[0px] sm:ml-[0px] md:ml-[0px] mt-[0px]' src='/Techbg/Vector-5.svg' alt='dot'>
        </img>
        </div>
                    <Image 
                    src="/images/home/girl.png"  
                    className="w-[360px] sm:w-[450px] 2xl:w-[700px]" 
                    width={360}
                    height={450}
                    alt='girl'
                    />
       <div>
       <img    className='transform scale-50 2xl:scale-100  ml-[0px] sm:ml-[0px] lg:ml-[0px] xl:ml-[0px] mt-[0px]'  src='/Techbg/Vector-3.svg' alt='triange'>
        </img>
       </div>
      </div>
    </div>
  </div>
  )
}

export default FrontPage