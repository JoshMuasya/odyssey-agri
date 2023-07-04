import React from 'react';

import Link from 'next/link';

const page = () => {
  return (
    // Background
    <div className='flex items-center justify-center h-screen mb-0 bg-fixed bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-backgreen z-[2] h-screen'/>

      {/* Home */}
      <div className='flex flex-col justify-between items-center p-10 text-center z-10 w-full'>
        {/* Top */}
        <div className='flex flex-col justify-center items-center text-center'>
          {/* Company Name */}
          <h1 className='font-frank font-black text-lg text-darkgreen'>
            ODYSSEY AGRI
          </h1>

          {/* Slogan */}
          <h3 className='font-mont font-bold text-m text-yellow italic'>
            Adding Green to your Life
          </h3>
        </div>

        {/* Middle */}
        <div className='w-3/5 h-fit bg-gray rounded-tr-3xl rounded-bl-3xl flex flex-col text-center items-center pb-8 pt-3'>
          {/* Header */}
          <div>
            <h1 className='font-frank font-bold text-lg text-darkgreen'>
              Our Mission
            </h1>
          </div>

          {/* Line */}
          <div 
            className='w-4/5 h-1 bg-yellow'
          />

          {/* Body */}
          <div>
            <p className='font-frank font-bold text-m text-darkgreen'>
              We aim to take farming <br />
              in Colombia to the next <br />
              level
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex flex-row items-center align-middle justify-center pt-3'>
          {/* Left */}
          <div className='w-fit h-fit bg-gray rounded-tr-3xl rounded-bl-3xl mr-36 font-bold font-mont text-m px-5 py-2 text-darkgreen'>
            <Link href='/'>
              About Us
            </Link>
          </div>

          {/* Right */}
          <div className='w-fit h-fit bg-yellow rounded-tr-3xl rounded-bl-3xl ml-36 font-bold font-mont text-m px-5 py-2 text-darkgreen'>
            <Link href='/'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page