//'use client'

import '../styles/globals.css'


export default async function RootLayout({children}) {
  

  return (
    <html lang="en">
    <body className=''>
  
    <div className='font-publicSans' >
      {children}
      </div>
      
      </body>
  </html>
  )
}
