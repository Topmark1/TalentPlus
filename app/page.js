//import {storage} from "../firebase.js"
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"
import Header from "../components/Header"
import Access from "../components/Access"
import Partners from "../components/Partners"
import Products from "../components/Products"
import Payment from "../components/Payment"
import Developer from "../components/Developer"
import Whyy from "../components/Whyy"
import Footer from "../components/Footer"

function HomePage() {
    
  return (
    <div className="">
       <div className="gradLight ">
        {/* Header */}
          <Header />

        {/*Access customers Data With No Code*/}
        <Access />

        {/*Partners*/}
        <Partners />

        {/*Products*/}
        <Products />

        {/*Payment*/}
        <Payment />

        {/*Developer*/}
        <Developer />
        
        {/*Why*/}
        <Whyy />

         {/*Footer*/}
         <Footer />
       </div>
    </div>
  )
}

export default HomePage