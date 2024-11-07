import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className=' overflow-hidden w-full' id='home'>
    <header className=" header-image relative bg-cover bg-center header-bg h-[60vh] text-white" style={{ backgroundImage: 'url(/bg.jpeg)' }}>
      <div className="relative inset-0 flex items-center justify-center">
        <h1 className="animate-fade-in header-text ">MNHA's Cafe</h1>
           </div>
           <div className='sparkle'></div>
           <div className='items-center m-12 text-cont'>
            <h2 className='relative bg-gradient-to-br from-green-400 to-yellow-400 bg-clip-text text-transparent text-4xl font-bold' >
            A welcoming space to savor fresh flavors, unwind, and enjoy good company.
            </h2>
           </div>
      <button className='absolute bottom-8 mb-18 right-8 py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300'>Book a table
        </button> 
        <Link href="/about">
        <button className='absolute bottom-8 mb-18 left-19 mx-20 py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300'>About Us
        </button> 
        </Link>

      
    

    </header>
    </div>
  )
}

export default Header