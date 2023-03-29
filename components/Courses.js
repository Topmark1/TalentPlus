import Course from "./Course.js"

function courses() {
  return (
    <div className="bg-[#F8F9FC]  pt-6 md:pt-12  px-4  md:px-6 lg:px-14 2xl:px-40 flex flex-col items-center text-center font-Sa" id="courses">
        {/* Browe your Popular courses... */}
        <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px]  text-[#000F24]">Browse our popular courses</h2>
        <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-20 lg:px-40 2xl:px-80 pt-1 pb-4">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        {/* courses category select */}
        <div className='font-Sa flex space-x-1.5 sm:space-x-3 2xl:space-x-4 flex-wrap justify-center'>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none' autoFocus>All Categories</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Design</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Developer</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Marketing</button>
        </div>
        {/* Courses, Prices, Rating and other Properties */}
        <div className='flex flex-wrap w-full mt-5 md:mt-8 mb-5 md:mb-10 2xl:mb-14'>
            {/* mapping would be done here from the data base using single Course Component */}
           <Course 
           key="1"
           mainImg='1'
           tag="Design"
           title="Introduction to user research in ux design"
           duration="23hrs 50min"
           lessons="15"
           tutorImg='1'
           tutorName="Leonard Victor" 
           priceTag="15.00"
           />
           <Course 
           key="2"
           mainImg='2'
           tag="Marketing"
           title="Introduction to new markwting audience"
           duration="22hrs 30min"
           lessons="22"
           tutorImg='2'
           tutorName="Jeffrey Williams" 
           priceTag="32.00"
           />
           <Course 
           key="3"
           mainImg='3'
           tag="Development"
           title="Introduction to HTML, CSS and Bootstap"
           duration="45hrs 50min"
           lessons="55"
           tutorImg='2'
           tutorName="Claretta Mason" 
           priceTag="55.00"
           />
           <Course 
           key="4"
           mainImg='4'
           tag="Development"
           title="Introduction to Javascript, Git and Github"
           duration="30hrs 50min"
           lessons="22"
           tutorImg='4'
           tutorName="Jessica Duke" 
           priceTag="45.00"
           />
           <Course 
           key="5"
           mainImg='5'
           tag="Marketing"
           title="Introduction to uoutroom marketing analysis"
           duration="33hrs 50min"
           lessons="26"
           tutorImg='5'
           tutorName="Samuel Jacobs" 
           priceTag="25.00"
           />
           <Course 
           key="6"
           mainImg='6'
           tag="Marketing"
           title="Introduction to live marketing analysis"
           duration="10hrs 50min"
           lessons="32"
           tutorImg='6'
           tutorName="Adam Smith" 
           priceTag="25.00"
           />
        </div>
        <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hoverhtness-75 hover:shadow-2xl bg-[#004DB3] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold mt-2">View Courses</button>
    </div>
  )
}

export default courses