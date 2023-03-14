//import {storage} from "../firebase.js"
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"
import Header from "../components/Header"
import Access from "../components/Access"
import Partners from "../components/Partners"


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
        
       </div>
    </div>
  )
}

export default HomePage