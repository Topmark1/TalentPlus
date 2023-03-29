import React from 'react'

function Course({mainImg, tag, title, duration, lessons, tutorImg, tutorName, priceTag}) {
  return (
    <div className='p-1 sm:p-2 2xl:p-3 w-1/2 md:w-1/3'>
    <div className=' p-2.5 bg-white shadow-lg space-y-2 transition hover:scale-105 cursor-pointer duration-300 ease-in-out rounded '>
        <img src={`./images/courses/main_img/${mainImg}.png`} className='w-full' alt=''/>
        <div className='flex justify-between items-center '>
            <div className='bg-[#1e5cce36] text-[#1E5DCE] font-bold text-[6px] sm:text-[8px] 2xl:[14px] py-0.5 md:py-1 px-2 md:p-x-4 rounded-lg'>{tag}</div>
            <div className='flex text-[#A1A1A1] font-bold text-[6px] sm:text-[8px] 2xl:[12px]  '>
                <p>4.7k</p>
                <img src='./images/courses/star.svg' alt='star' className='mr-0.5 sm:w-3 md:-mt-0.5'/>
                <p> (32.7k+)</p>
            </div>
        </div>
        <h3 className='font-CD font-semibold text-[8px] md:text-[16px] 2xl:text-[24px] leading-2 md:leading-4 2xl:leading-8 w-4/5 my-3 text-start'>{title}</h3>
        <div className='flex justify-between items-center text-[#A1A1A1] font-bold text-[6px] sm:text-[8px] 2xl:[12px]'>
            <div className='flex space-x-1'>
                <img src='./images/courses/schedule.svg' alt='time' className=' md:w-4'/>
                <p className='md:mt-0.5'>{duration}</p>
            </div>
            <div className='flex space-x-1 items-center'>
                <img src='./images/courses/menu_book.svg' alt='star' className=''/>
                <p className=''>{lessons} Lessons</p>
            </div>
        </div>
        <div className='flex mt-2 md:mt-4 justify-between items-center md:pb-2'>
            <div className='flex space-x-1 sm:space-x-3'>
                <img src={`./images/courses/tutor_img/${tutorImg}.svg`} alt='tutors' className='md:w-4' />
                <h3 className='font-bold text-[8px] md:text-[15px] 2xl:text-[20px] '>{tutorName}</h3>
            </div>
            <h3 className='font-CD font-semibold text-[10px] md:text-[18px] 2xl:text-[24px] text-[#004DB3]'>${priceTag}</h3>
        </div>
</div>
</div>
  )
}

export default Course