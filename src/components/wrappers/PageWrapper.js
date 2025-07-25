'use client'

import Header from '@/components/layout/header/Header'
import Footer from '../layout/footer/Footer'

const PageWrapper = ({ children }) => {

  return (
    < div className='scrollbar-hide '>
        <div className="absolute inset-0   z-0">
          <div className="w-full h-full bg-white dark:bg-black bg-gradient-dark-figma " />
        </div>
      <Header />
      <main className="min-h-screen scrollbar-hide">{children}</main>

      </div>
  )
}

export default PageWrapper