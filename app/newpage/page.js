import Link from "next/link"

function Info() {
    
    return (
        <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-100">
        <h1 className="text-2xl md:text-6xl font-bold text-gray-800">Under Construction</h1>
        <p className="text-xl text-gray-600">This page is not built yet. Please check back later.</p>
        <Link href="/">
          <button className="mt-5 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[#004DB3] text-white">Home Page</button>
          </ Link>
      </div>
    )
  }
  
  export default Info