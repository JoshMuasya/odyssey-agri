import React from 'react';

import Link from 'next/link';

const Gift = () => {
  return (
    // Gifts
    <div className='relative flex flex-col items-center justify-center h-screen mb-0 bg-fixed bg-cover gift-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-backgreen z-[2] h-screen'/>

        {/* Items */}
        <div className='z-10 p-5 flex flex-col justify-center items-center text-center align-middle'>
            {/* Title */}
            <div className='font-mont font-bold text-sx md:text-m lg:text-l text-gray'>
                TARJETA DE REGALO
            </div>

            {/* Subtitle */}
            <div className='font-frank font-bold text-l md:text-lx lg:text-lg text-gray py-3'>
                Regala cereales con una de nuestras <br />
                tarjetas regalo
            </div>

            {/* Quote */}
            <div className='text-s md:text-sx lg:text-m font-mont font-bold text-gray pb-4'>
                Pretium tortor risus enim neque quis pellentesque maecenas proin odio eget arcu
            </div>

            {/* Button */}
            <div className='bg-gray hover:bg-yellow rounded-tr-xl rounded-bl-xl md:rounded-tr-2xl md:rounded-bl-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl text-darkgreen hover:text-darkgreen text-sx md:text-m lg:text-l font-frank font-bold py-3 px-5'>
                <Link href="/">
                    Comprar una <br />
                    tarjeta de regalo
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Gift