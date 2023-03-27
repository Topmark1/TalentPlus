"use client"
import FrontPage from "../components/FrontPage"
import ScrollUpButton from "../components/ScrollUpButton"
import Footer from "../components/Footer"


function HomePage() {
    
  return (
    <div className="">
        {/* FrontPage */}
        <FrontPage />
        <ScrollUpButton />
         {/*Footer*/}
         <Footer />
      
    </div>
  )
}

export default HomePage