import TestimonialSlider from "./TestimonialSlider.js"

function Testimonial() {
  return (
<div>
<div className="bg-[#F8F9FC]   md:pt-6 py-10 px-4  md:px-6 lg:px-14 2xl:px-40 flex flex-col items-center text-center font-Sa" id="testimonial">
    {/* Browe your Popular courses... */}
    <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px]  text-[#000F24]">What Our Clients Are Saying</h2>
    <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-20 lg:px-64 2xl:px-80 pt-1 ">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
  </div>
  {/* Testimonial Slide */}
<div className="bg-[#F8F9FC] pb-10">
      <TestimonialSlider />
      <div className=' flex space-x-2 sm:space-x-3 2xl:space-x-4 justify-center mt-3'>
            <button className='rounded-full py-0.5  px-0.5 lg:px-1 lg:py-1 cursor-pointer border-2 border-[#A1A1A1] hover:-blue-500 focus:bg-[#004DB3]  focus:outline-none' ></button>
            <button className='rounded-full py-0.5  px-0.5 lg:px-1 lg:py-1 cursor-pointer border-2 border-[#A1A1A1] bg-[#A1A1A1] hover:-blue-500 focus:bg-[#004DB3]  focus:outline-none' ></button>
            <button className='rounded-full py-0.5  px-0.5 lg:px-1 lg:py-1 cursor-pointer border-2 border-[#A1A1A1] hover:-blue-500 focus:bg-[#004DB3]  focus:outline-none'></button>
            <button className='rounded-full py-0.5  px-0.5 lg:px-1 lg:py-1 cursor-pointer border-2 border-[#A1A1A1] hover:-blue-500 focus:bg-[#004DB3]  focus:outline-none'></button>
        </div>
</div>
</div>
  )
}

export default Testimonial