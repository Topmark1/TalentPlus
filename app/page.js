"use client"
import Home from "../components/Home"
import ScrollUpButton from "../components/ScrollUpButton"
import About from "../components/About"
import Community  from "../components/Community"
import Questions from "../components/Questions"
import Testimonial from "../components/Testimonial"
import Courses from "../components/Courses"



function HomePage() {
    
  return (
    <div className="">
        {/* Home */}
        <Home />
        {/*ScrollUpButton*/}
        <ScrollUpButton />
        {/*About*/}
        <About/>
        {/*Courses*/}
         <Courses/> 
        {/*Testimonial*/}
        <Testimonial/>
        {/*Community */}
        <Community />
        {/*Questions */}
        <Questions />       
             
    </div>
  )
}

export default HomePage