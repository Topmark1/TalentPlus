import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

function Payment() {
  return (
    <div className="mt-2 sm:mt-20 mx-2 sm:mx-16 sm:px-12 flex flex-col items-center ">
        <p className="text-[17px] font-normal  sm:mb-1 text-[#707070] ">OUR PAYMENT PRODUCTS</p>
        <h2 className="font-black text-[30px] sm:text-[43px] sm:mb-8 text-[#050F3A]">Payment Infra</h2>

        <div className="-mx-2 flex mt-5 gap-5 flex-wrap sm:flex-nowrap">
            <div className=" flex flex-col grad6 p-4 sm:p-16 rounded-lg">
                <h2 className="text-[42px] mb-2 sm:mb-5 font-black text-white">Direct Debit</h2>
                <div className="sm:ml-12 md:ml-32">
                <img className=" mb-8 h-52" src="/envelope.svg" alt="envelope" />
                <p className="text-[#FFFFFF] opacity-70 text-[13px] font-bold">Zeeh gives businesses direct interaction with their client’s banks making the process of saving and investment anywhere seamless for their customers.</p>
                <div className="cursor-pointer flex mt-5 text-white">
                    <h4 className="font-Montserrat font-bold text-[16px] mr-1">Learn more</h4>
                    <ArrowRightIcon className="w-4"/> 
                </div>
                </div>
            </div>
            <div className=" flex flex-col bg-[#050F3A] p-4 sm:p-16 rounded-lg">
                <h2 className="text-[42px] mb-2 sm:mb-5 font-black text-white">Universal Card</h2>
                <div className="sm:ml-12 md:ml-32">
                <img className="mb-8 h-52" src="/card.svg" alt="card" />
                <p className="text-[#FFFFFF] text-[13px] font-bold">get full access to your customer’s financial data and bio-data while onboarding to validate the identity of customers. Our services empowers you with good insight into your customer’s finances.</p>
                <div className="cursor-pointer flex text-white mt-5">
                    <h4 className="font-Montserrat font-bold text-[16px] mr-1 text-white">Learn more</h4>
                    <ArrowRightIcon className="w-4"/> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment