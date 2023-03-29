import {faLinkedin,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Footer() {
  return ( 
      
      <div id="enroll" className=" bg-[#000F24] text-Sa px-4 sm:px-8 2xl:px-12  pt-10 pb-20  text-white text-[16px] sm:text-[20px] 2xl:text-[24px]  font-normal sm:flex justify-start items-start overflow-ellipsis space-y-10 sm:space-y-0">
        <div className='space-y-3  space-x-3 sm:w-1/4' >
           <h2 className='font-AK text-[36px]'>Tech Time</h2>
          <p className="">Reach out to us on any of our social media networks</p>
          <div className='flex space-x-3 sm:space-x-1 md:space-x-3 lg:pr-3'>
            {[1,5,6,3,4].map((icon)=>
            <img src={`./images/footer/${icon}${icon==6?".PNG":".svg"}`} alt="icon" className='w-8 sm:w-4 lg:w-8'/>
            )}
          </div>
        </div>
        <div className="  sm:w-1/4 space-y-3 lg:pr-3">
          <p className='mb-3 font-semibold font-CD text-[24px] sm:[30px]'>Useful Links</p>
          <div><a href="#home">Home</a></div>
          <div><a href="#about">About Us</a></div>
          <div><a href="#courses">Our Courses</a></div>
          <div><a href="#testimonial">testimonial</a></div>
          <div><a href="#community">Our Community</a>  </div>
        </div>
        <div className="  sm:w-1/4 space-y-3 lg:pr-3">
          <p className='mb-3 font-semibold font-CD text-[24px] sm:[30px]'>Community</p>
          <div><a href="#">Help Centers</a></div>
          <div><a href="#">Connections</a></div>
          <div><a href="#">Suggestions</a></div>
          <div><a href="#">Blog</a></div>
          <div><a href="#">Newsletter</a>  </div>
        </div>
        <div className="  sm:w-1/4 space-y-3 lg:pr-3">
        <p className='mb-3 font-semibold font-CD text-[24px] sm:[30px]'>Subscribe</p>
        <div className='flex '>
          <input placeholder='Nft123@gmail.com' className='w-2/4 lg:3/5 px-4 sm:px-3 lg:px-5 py-2  2xl:py-4 rounded-l-md bg-[#2A2A2B] text-[10px] sm:text-[12px] 2xl:text-[16px]'/>
          <button className=" w-1/4 sm:w-2/4 lg:w-2/5 px-4 sm:px-3 lg:px-5 py-2  2xl:py-4 rounded-r-md hover:brightness-75 hover:shadow-2xl bg-[#004DB3] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold ">Send Message</button>
        </div>

        </div>
       
      </div>      
     
   
  )
}

export default Footer