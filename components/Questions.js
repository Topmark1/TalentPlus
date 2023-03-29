import AccordionQuestion from "./AccordionQuestion.js"

function Questions() {
  return (
<div className="bg-[#F8F9FC]   md:pt-6 py-10 lg:py-16 px-4  md:px-6 lg:px-14 2xl:px-40 flex flex-col items-center text-center font-Sa" >
    {/* Frequently Asked Questions... */}
    <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px]  text-[#000F24]">Frequently Asked Questions</h2>
    <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-20 lg:px-64 2xl:px-80 pt-1 ">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
    {/*Question Accordions */}
    <div className="font-black className='font-black text-[14px] sm:text-[18px] 2xl:text-[22px]">
    <AccordionQuestion />
    </div>

</div>
   
  )
}

export default Questions