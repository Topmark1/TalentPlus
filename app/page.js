
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"
import Header from "../components/Header"
import FrontPage from "../components/FrontPage"
import Footer from "../components/Footer"

function HomePage() {
    
  return (
    <div className="">
       
        {/* Header */}
          <Header />

        {/* FrontPage */}
        <FrontPage />

         {/*Footer*/}
         <Footer />
      
    </div>
  )
}

export default HomePage