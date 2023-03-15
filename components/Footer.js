import {faLinkedin,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer() {
  return ( 
    <div className=' bg-[#060C42] px-5 sm:px-20 pt-5 sm:pt-20 pb-3 sm:pb-12 mt-3 sm:mt-10 text-white text-[9px] sm:text-[14px] md:text-[18px]'>     
      <div className="flex justify-between items-start overflow-ellipsis">
        <div className='flex items-center  space-x-3 w-1/5 sm:w-2/6 pr-1 sm:pr-8'>
            <img className="w-10 " src='/zeeh.svg' alt="logo"
/>       
        <p className="hidden sm:flex sm:text-[14px] font-normal">The future if finance is here</p>
        </div>
        <div className=" w-1/5 sm:w-1/6">
          <p className='mb-1 font-bold'>Product</p>
          <p className='font-normal'>Authetication</p>
          <p className='font-normal'>KYC Verification</p>
          <p className='font-normal'>Connect</p>
          <p className='font-normal'>Statement Pages</p>
          <p className='font-normal'>Direct Debit</p>
          <p className='font-normal'>Universal Card</p>
          
        </div>
        <div className="w-1/5 sm:w-1/6 mr-1">
        <p className='mb-1 font-bold'>Resources</p>
          <p className='font-normal'>API docs</p>
          <p className='font-normal'>Libraries and SDKs</p>
          <p className='font-normal'>Demo</p>
          <p className='font-normal'>Join Slack</p>
        </div>
        <div className="w-1/5 sm:w-1/6 mr-1">
        <p className='mb-1 font-bold'>Company</p>
          <p className='font-normal'>About  us</p>
          <p className='font-normal'>Coverage</p>
          <p className='font-normal'>Contact</p>
          <p className='font-normal'>Blog</p>
        </div>
        <div className="w-1/5 sm:w-1/6 mr-1">
        <p className='mb-1 font-bold'>Legal</p>
          <p className='font-normal'>Developer Policy</p>
          <p className='font-normal'>Privacy Policy</p>
          <p className='font-normal'>End-user Policy</p>
          <p className='font-normal'>Terms of Use</p>
          <p className='font-normal'>Cookies</p>
          <p className='font-normal'>Security</p>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className='flex justify-between mt-2'>
      <div className="sm:w-1/2 text-[9px] sm:text-[14px]">© All rights reserved, Zeeh Africa 2022</div>
      <div className='sm:w-1/2 flex sm:pl-20 md:pl-64 sm:space-x-50'>
      <div className="opacity-60 cursor-pointer border-2  hover:bg-slate-300 py-1 px-1 rounded-full shadow bg-white mr-4 flex items-center">
        <FontAwesomeIcon className='text-[#060C42] w-3' icon={faLinkedin} />
      </div>
      <div className="opacity-60 cursor-pointer border-2  hover:bg-slate-300 py-1 px-1 rounded-full shadow bg-white mr-4 flex items-center">
        <FontAwesomeIcon className='text-[#060C42] w-3' icon={faTwitter} />
      </div>
      <div className="opacity-60 cursor-pointer border-2  hover:bg-slate-300 py-1 px-1 rounded-full shadow bg-white mr-4 flex items-center">
        <FontAwesomeIcon className='text-[#060C42] w-3' icon={faInstagram} />
      </div>
      </div>
      </div>
    </div> 
  )
}

export default Footer