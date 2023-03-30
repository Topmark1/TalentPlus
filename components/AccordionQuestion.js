"use client"
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { blue } from '@material-tailwind/react';
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  /*  <AccordionHeader onClick={() => handleOpen(2)} className={`${open==2?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>"text-[#004DB3]":'text-[#000F24]'}  font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>
          Can I change my plan later?
        </AccordionHeader>
        <AccordionBody className={`text-[10px] sm:text-[15px] 2xl:text-[18px]`}>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>*/
  return (
   <Fragment >
       <Accordion open={open === 1} animate={customAnimation} >
        <AccordionHeader onClick={() => handleOpen(1)} className={`${open==1?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>          Is there a free trial availbable?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation} >
        <AccordionHeader onClick={() => handleOpen(2)} className={`${open==2?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>          Can I change my plan later?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)} className={`${open==3?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>
         Are the courses lifetime?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(4)} className={`${open==4?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>
         Do I Get Certified After Taking Courses?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(5)} className={`${open==5?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>
         How do I reach out to mentors?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(6)} className={`${open==6?"text-[#004DB3]":'text-[#000F24]'} font-black text-[14px] sm:text-[18px] 2xl:text-[22px]`}>
         Do we get job ready after taking courses?
        </AccordionHeader>
        <AccordionBody>
          high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
        </AccordionBody>
      </Accordion>
  

</Fragment>
  );
}