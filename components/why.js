
function why() {
  return (
    <div className="mt-2 sm:mt-20 mx-2 sm:mx-16 sm:px-12 flex flex-col items-center ">
        <p className="text-[17px] font-normal  sm:mb-1 text-[#707070] ">WHY ZEEH</p>
        <h2 className="font-black text-[30px] sm:text-[43px] sm:mb-8 text-[#4D4D4D]">We Tick All the Boxes</h2>
        
    <div className="flex items-center flex-wrap space-x-2 space-y-2 sm:space-x-4 sm:space-y-4 bg-red-500">
        <div className="w-96 flex flex-col items-center justify-center p-2 sm:p-5  rounded-md shadow-lg">
            <img src="/laptop.svg" alt="laptop"></img>
            <h2 className="text-lg font-black mt-5 mb-2">Easy Access</h2>
            <p className="font-Montserrat text-[10px] text-[#4D4D4D] opacity-70 ">You have full access to quality financial data without any program or code</p>
        </div>

        <div className="w-96 flex flex-col items-center justify-center p-2 sm:p-5  rounded-md shadow">
            <img src="/laptop.svg" alt="laptop"></img>
            <h2 className="text-lg font-black mt-5 mb-2">Easy Access</h2>
            <p className="font-Montserrat text-[10px] text-[#4D4D4D] opacity-70 ">You have full access to quality financial data without any program or code</p>
        </div>

        <div className="w-96 flex flex-col items-center justify-center p-2 sm:p-5  rounded-md shadow">
            <img src="/laptop.svg" alt="laptop"></img>
            <h2 className="text-lg font-black mt-5 mb-2">Easy Access</h2>
            <p className="font-Montserrat text-[10px] text-[#4D4D4D] opacity-70 "></p>
        </div>

        <div className="w-96 flex flex-col items-center justify-center p-2 sm:p-5  rounded-md shadow">
            <img src="/laptop.svg" alt="laptop"></img>
            <h2 className="text-lg font-black mt-5 mb-2">Easy Access</h2>
            <p className="font-Montserrat text-[10px] text-[#4D4D4D] opacity-70 "></p>
        </div>
    </div> 
    {/* Award */}
    <div className="mt-5 p-5 shadow w-52 h-52 rounded-full flex items-center justify-center">
        <img src="/award.svg" alt="" />
    </div> 
    <h3 className="text-[#293CE2] text-[20px] font-extrabold mt-2 font-Montserrat">2022</h3> 
    <h4 className="text-[#7B7B7B] text-[16px] font-extranormal">Fastest growing open banking API of the year</h4>
    <p className="text-[#7B7B7B] text-[13px] text-bold">Nigeria Business Leadership Award</p>
    <diV className="w-1/2 "><h1 className="text-#050F3A font-black text-[30px] sm:text-[40px] md:text-[67px] mt-5 ">Infra That Just Works</h1></diV>
    <div className="mt-4">
            <button className="grad1 text-white rounded-md px-2 py-1 sm:py-1.5 sm:px-2 lg:px-5 shadow mx-1 sm:mx-1 text-xs mb-2 sm:text-lg hover:brightness-75 font-bold">Get Started</button>
            <button className=" rounded-md px-2 py-1 sm:py-1.5 sm:px-1.5 lg:px-5 shadow mx-1 sm:mx-2 text-xs sm:text-lg text-[#293CE1] hover:bg-gray-300 font-bold">Book a Demo</button>
          </div> 
    </div>
  )
}

export default why