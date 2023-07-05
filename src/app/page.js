import React from 'react';

import Link from 'next/link';

const page = () => {
  return (
    // Background
    <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-backgreen z-[2] h-screen'/>

      {/* Home */}
      <div className='flex flex-col justify-between items-center p-2 md:p-5 lg:p-10 text-center z-10 w-full'>
        {/* Top */}
        <div className='flex flex-col justify-center items-center text-center'>
          {/* Company Name */}
          <h1 className='font-frank font-black text-sx md:text-l lg:text-lg text-darkgreen'>
            ODYSSEY AGRI
          </h1>

          {/* Slogan */}
          <h3 className='font-mont font-bold text-xs md:text-s lg:text-m text-yellow italic'>
            Adding Green to your Life
          </h3>
        </div>

        {/* Middle */}
        <div className='w-fit md:w-3/5 h-fit bg-gray rounded-tr-3xl rounded-bl-3xl flex flex-col text-center items-center pb-2 pt-1 md:pb-5 md:pt-2 lg:pb-8 lg:pt-3 px-3 md:px-0 my-5'>
          {/* Header */}
          <div>
            <h1 className='font-frank font-bold text-m md:text-l lg:text-lg text-darkgreen'>
              Our Mission
            </h1>
          </div>

          {/* Line */}
          <div 
            className='w-4/5 h-1 bg-yellow'
          />

          {/* Body */}
          <div>
            <p className='font-frank font-bold text-s md:text-sx lg:text-m text-darkgreen'>
              We aim to take farming <br />
              in Colombia to the next <br />
              level
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex flex-col lg:flex-row items-center align-middle justify-center pt-3'>
          {/* Left */}
          <div className='w-fit h-fit bg-gray hover:bg-yellow rounded-tr-xl rounded-bl-xl lg:rounded-tr-3xl lg:rounded-bl-3xl mb-5 lg:mr-36 font-bold font-mont text-s lg:text-m px-3 py-2 lg:px-5 lg:py-2 text-darkgreen'>
            <Link href='#about'>
              About Us
            </Link>
          </div>

          {/* Right */}
          <div className='w-fit h-fit bg-yellow hover:bg-gray rounded-tr-xl rounded-bl-xl lg:rounded-tr-3xl lg:rounded-bl-3xl lg:ml-36 font-bold font-mont text-s lg:text-m px-3 py-2 lg:px-5 lg:py-2 text-darkgreen'>
            <Link href='#contact'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page