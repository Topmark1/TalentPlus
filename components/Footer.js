import {faLinkedin,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Footer() {
  return ( 
      
      <div id="enroll" className=" bg-[#060C42] px-5 sm:px-20 pt-5 sm:pt-20 pb-3 sm:pb-12 mt-[1000px] text-white text-[9px] sm:text-[14px] md:text-[18px] sm:flex justify-between items-start overflow-ellipsis">
        <div className='flex items-center  space-x-3 sm:w-1/4 pr-1 sm:pr-8' >
            <a href="#tech-time"><img className="w-10" src='/zeeh.svg' alt="logo"
/>       </a>
        <p className="hidden sm:flex sm:text-[14px] font-normal">The future if finance is here</p>
        </div>
        <div className="  sm:w-1/4">
          <p className='mb-1 font-bold'>Product</p>
          <p className='font-normal'>Authetication</p>
          <p className='font-normal'>KYC Verification</p>
          <p className='font-normal'>Connect</p>
          <p className='font-normal'>Statement Pages</p>
          <p className='font-normal'>Direct Debit</p>
          <p className='font-normal'>Universal Card</p>
          
        </div>
        <div className="sm:w-1/4 mr-1">
        <p className='mb-1 font-bold'>Resources</p>
          <p className='font-normal'>API docs</p>
          <p className='font-normal'>Libraries and SDKs</p>
          <p className='font-normal'>Demo</p>
          <p className='font-normal'>Join Slack</p>
        </div>
        <div className="sm:w-1/4 mr-1">
        <p className='mb-1 font-bold'>Company</p>
          <p className='font-normal'>About  us</p>
          <p className='font-normal'>Coverage</p>
          <p className='font-normal'>Contact</p>
          <p className='font-normal'>Blog</p>
        </div>
       
      </div>      
     
   
  )
}

export default Footer