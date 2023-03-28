"use client"
import Home from "../components/Home"
import ScrollUpButton from "../components/ScrollUpButton"
import About from "../components/About"
import Footer from "../components/Footer"


function HomePage() {
    
  return (
    <div className="">
        {/* Home */}
        <Home />
        {/*ScrollUpButton*/}
        <ScrollUpButton />
        {/*About*/}
        <About/>
         {/*Footer*/}
         <Footer />
      
    </div>
  )
}

export default HomePage