import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

function Developer() {
  return (
    <div className="mt-2 sm:mt-20 mx-2 sm:mx-16 sm:px-12 flex flex-col items-center ">
        <p className="text-[17px] font-normal  sm:mb-1 text-[#707070] ">FOR DEVELOPERS</p>
        <h2 className="font-black text-[30px] sm:text-[43px] sm:mb-8 text-[#050F3A]">Developer-Friendly API</h2>

        <div className="grad7 p-4 sm:p-16 flex rounded-md -mx-2">
            <div className="flex flex-col md:w-1/2">
                <h2 className="mb-10 sm:mb-40 text-[35px] font-black text-white">For Developer, By Developer</h2>
                <div>
                <p className="mb-1 sm:mb-3 font-Montserrat font-bold text-[15px] text-[#FFFFFF] opacity-70 leading-8">Providing a personalized experience for users. through Interoperable and customizable Products that can work seamlessly , enabling smooth integration and data exchange.</p>
                <div className="cursor-pointer flex text-white">
                    <h4 className="font-Montserrat font-bold text-[18px] mr-2">Explore Our Docs</h4>
                    <ArrowRightIcon className="w-8"/> 
                </div>
                </div>
            </div>
            <div className="">
            <img className="hidden md:flex sm:px-16 w-88 " src="/code.svg" alt="" />
            <img className=" hidden lg:flex md:w-40 -mt-[362px] ml-[360px]" src="/api.svg" alt="" />
            </div>
        </div>
        </div>
  )
}

export default Developer