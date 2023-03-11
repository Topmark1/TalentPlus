import SideBar from '../components/SideBar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <div className='flex'>
      <div className='bg-[#202123] sm:max-w-xs h-screen sm:overflow-y-auto md:min-w-[20rem]'>
      <SideBar />
      </div>
      {/* ClientProvider - notification */}

      <div className='bg-[#343541] flex-1'>
      {children}
      </div>
      </div>
      </body>
  </html>
  )
}
