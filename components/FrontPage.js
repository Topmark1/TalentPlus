import React from 'react'

function FrontPage() {
  return (
    <div className="relative flex bg-[#004DB3] justify-center items-center">
    <div className=''>
        <img  className='absolute transform scale-50 2xl:scale-100 -left-4 2xl:left-0 top-[270px] 2xl:top-[440px]' src='/Techbg/Vector.svg' alt='bg' >
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[480px] top-[93px]' src='/Techbg/Vector-1.svg' alt='dot'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[650px] top-[240px]' src='/Techbg/Vector-2.svg' alt='big circle'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100  left-[1100px] top-[250px]'  src='/Techbg/Vector-3.svg' alt='triange'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[90px] top-[90px]' src='/Techbg/Vector-4.svg' alt='small circle'>
        </img>
        <img    className='absolute transform scale-50 2xl:scale-100 left-[650px] top-[400px]' src='/Techbg/Vector-5.svg' alt='dot'>
        </img>
    </div>
    <h1 className="text-2xl font-bold text-purple-500">
      Create Responsive Navbar Menu in Next js with Tailwind CSS
    </h1>
  </div>
  )
}

export default FrontPage