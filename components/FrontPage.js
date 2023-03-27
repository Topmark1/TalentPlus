"use client"
import ScrollUpButton from "./ScrollUpButton"

function FrontPage() {
  return (
    <div className="relative flex bg-[#004DB3] justify-center items-center">
    <div className=''>
        <img  className='absolute transform scale-50 2xl:scale-100 -left-8  2xl:left-0 top-[270px] 2xl:top-[440px]' src='/Techbg/Vector.svg' alt='wiggle' >
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[100px] sm:left-[280px] md:left-[480px] top-[93px]' src='/Techbg/Vector-1.svg' alt='dot'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[150px] sm:left-[350px] md:left-[650px] top-[240px]' src='/Techbg/Vector-2.svg' alt='big circle'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100  left-[300px] sm:left-[600px] lg:left-[900px] xl:left-[1100px] top-[250px]'  src='/Techbg/Vector-3.svg' alt='triange'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[30px] sm:left-[50px] md:left-[90px] top-[90px]' src='/Techbg/Vector-4.svg' alt='small circle'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[250px] sm:left-[350px] md:left-[650px] top-[400px]' src='/Techbg/Vector-5.svg' alt='dot'>
        </img>
       <ScrollUpButton />

    </div>
    <div>

    </div>
  </div>
  )
}

export default FrontPage