//import {storage} from "../firebase.js"
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"
import Header from "../components/Header"
import Access from "../components/Access"


function HomePage() {
    
  return (
    <div className="">
       <div className="back1">
        {/* Header */}
          <Header />

        {/*Access customers Data With No Code*/}
        <Access />
        <div>
          <h1 className="text-5xl">Access customers Data With No Code</h1>
          <p></p>
          <div>
            <button>Get Started</button>
            <button>Book a Demo</button>
          </div>
          <div></div>
        </div>
       </div>
    </div>
  )
}

export default HomePage