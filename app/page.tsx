//import {storage} from "../firebase.js"
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline"

function HomePage() {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
       <h1 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-20">My ChatGPT</h1>

       <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-5 w-5 sm:h-8 sm:w-8"/>
            <h2 className="text-sm sm:text-xl">Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-5 w-5 sm:h-8 sm:w-8"/>
            <h2 className="text-sm sm:text-xl">Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">change the chatGPT Model to use</p>
            <p className="infoText">Messages are stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast when chatGPT is thinking!</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-5 w-5 sm:h-8 sm:w-8"/>
            <h2 className="text-sm sm:text-xl">Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionaly generate incorrect information</p>
            <p className="infoText">May occasionaly produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledege of world and events after 2021</p>
          </div>
        </div>


       </div>
    </div>
  )
}

export default HomePage