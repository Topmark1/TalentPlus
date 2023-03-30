//'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'


export default async function RootLayout({children}) {
  

  return (
    <html lang="en">
    <body className='bg-[#004DB3]'>
  
    <div className='font-Sa' >
      
        {/* Header */}
        <Header />
      {children}
        {/*Footer */}
        <Footer />
      </div>
      
      </body>
  </html>
  )
}
