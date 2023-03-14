import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

function Products() {
  return (
    <div className="mt-2 sm:mt-20 mx-2 sm:mx-16 sm:px-12 flex flex-col items-center ">
        <p className="text-[17px] font-normal  sm:mb-1 text-[#707070] ">OUR DATA PRODUCTS</p>
        <h2 className="font-black text-[30px] sm:text-[43px] sm:mb-8 text-[#4D4D4D]">Data Infra</h2>

        <div className="grad4 p-4 sm:p-16 flex rounded-md -mx-2">
            <div className="flex flex-col md:w-1/2">
                <h2 className="mb-10 sm:mb-40 text-[35px] font-black text-white">Know Your Customer Verification</h2>
                <div>
                <p className="mb-1 sm:mb-3 font-Montserrat font-bold text-[15px] text-[#FFFFFF] opacity-70 leading-8">Verify your customer’s identity today with our KYC process. This ensures instant onboarding and tracking of illegal activities that can disrupt the overall setup of your business financial system. Start using our services with confidence today</p>
                <div className="cursor-pointer flex text-white">
                    <h4 className="font-Montserrat font-bold text-[18px] mr-1">Learn more</h4>
                    <ArrowRightIcon className="w-4"/> 
                </div>
                </div>
            </div>
            <img className="hidden md:flex sm:px-16 md:w-1/2" src="/cloud.svg" alt="" />
        </div>
        <div className="sm:-mx-2 flex flex-wrap sm:flex-nowrap mt-5 gap-2 sm:gap-5">
            <div className=" flex flex-col grad5 p-4 sm:p-16 rounded-lg">
                <h2 className="text-[30px] sm:text-[42px] mb-2 sm:mb-5 font-black text-[#31221B]">Connect</h2>
                <div className="sm:ml-12 md:ml-32">
                <img className="hidden sm:flex mb-8 sm:h-52" src="/recycle.svg" alt="recycle" />
                <p className="text-[#444444] text-[13px] font-bold">Zeeh gives businesses direct interaction with their client’s banks making the process of saving and investment anywhere seamless for their customers.</p>
                <div className="cursor-pointer flex ">
                    <h4 className="font-Montserrat font-bold text-[16px] mr-1">Learn more</h4>
                    <ArrowRightIcon className="w-4"/> 
                </div>
                </div>
            </div>
            <div className=" flex flex-col bg-[#51B8BF] p-4 sm:p-16 rounded-lg">
                <h2 className="text-[30px] sm:text-[42px] mb-2 sm:mb-5 font-black text-[#31221B]">Statement Pages</h2>
                <div className="sm:ml-12 md:ml-32">
                <img className="hidden sm:flex mb-8 sm:h-52" src="/honour.svg" alt="honour" />
                <p className="text-[#444444] text-[13px] font-bold">get full access to your customer’s financial data and bio-data while onboarding to validate the identity of customers. Our services empowers you with good insight into your customer’s finances.</p>
                <div className="cursor-pointer flex text-white">
                    <h4 className="font-Montserrat font-bold text-[16px] mr-1">Learn more</h4>
                    <ArrowRightIcon className="w-4"/> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products