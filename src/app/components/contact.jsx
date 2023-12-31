import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  return (
    <div 
        id='contact' 
        className='bg-darkgreen w-full h-fit'
    >
        {/* Logo */}
        <div className='pt-5 flex justify-center items-center align-middle'>
            <Link 
                href="/"
                className='pb-3'
            >
                <Image 
                    src="/Logo.png"
                    alt='Logo'
                    width="100"
                    height="100"
                />
            </Link>            
        </div>

        {/* Details */}
        <div className='flex flex-col md:flex-row justify-center align-middle items-center pb-12 md:pb-16 lg:pb-20'>
            <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                {/* Address 1*/}
                <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                    {/* Name */}
                    <div className='text-brightgreen text-center font-mont text-xs md:text-s lg:text-sx font-bold'>
                        Colombia
                    </div>
                    {/* Street */}
                    <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-1'>
                        Calle 115, Bogota Colombia
                    </div>

                    {/* Phone */}
                    <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                        +57 8785412542
                    </div>
                </div>

                {/* Address 1*/}
                <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                    {/* Name */}
                    <div className='text-brightgreen text-center font-mont text-xs md:text-s lg:text-sx font-bold'>
                        Kenya
                    </div>
                    {/* Street */}
                    <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-1'>
                        Ring Road Westlands Nairobi, Kenya
                    </div>

                    {/* Phone */}
                    <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                        +254 20 521 0324
                    </div>
                </div>

                {/* Address 1*/}
                <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                    {/* Name */}
                    <div className='text-brightgreen text-center font-mont text-xs md:text-s lg:text-sx font-bold'>
                        India
                    </div>
                    {/* Street */}
                    <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-1'>
                        28 Shrinath Shopping Centre, <br />
                        D J Rd, Vile Parle West (west)
                    </div>

                    {/* Phone */}
                    <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                        02226148845
                    </div>
                </div>

                {/* Address 1*/}
                <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                    {/* Name */}
                    <div className='text-brightgreen text-center font-mont text-xs md:text-s lg:text-sx font-bold'>
                        Brazil
                    </div>
                    {/* Street */}
                    <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-1'>
                        Rua Varzelândia 670
                    </div>

                    {/* Phone */}
                    <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                        (11) 7680-2724
                    </div>
                </div>

                {/* Address 1*/}
                <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                    {/* Name */}
                    <div className='text-brightgreen text-center font-mont text-xs md:text-s lg:text-sx font-bold'>
                        Chile
                    </div>
                    {/* Street */}
                    <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-1'>
                        Calle Caupolicán 714, <br />
                        La Ligua, Chile
                    </div>

                    {/* Phone */}
                    <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                        +5634334578
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className='md:pl-5 lg:pl-10'>
                <form 
                    action=""
                    className='text-brightgreen flex flex-col text-s font-mont font-semibold'
                >
                    <div className='text-brightgreen font-frank font-bold text-m lg:text-l text-center'>
                        Envíanos un correo electrónico
                    </div>
                    <input 
                        type="email" 
                        placeholder='Envíanos un correo electrónico' 
                        className='bg-backgreen p-3 md:p-4 lg:p-5 border-brightgreen hover:border-brightgreen active:border-brightgreen after:border-brightgreen border-2 m-2 rounded-tr-3xl rounded-bl-3xl'
                    />
                    <input 
                        type="message" 
                        placeholder='Háblanos' 
                        className='bg-backgreen p-3 md:p-4 lg:p-5 border-brightgreen hover:border-brightgreen active:border-brightgreen after:border-brightgreen border-2 m-2 rounded-tr-3xl rounded-bl-3xl'
                    />

                    <button className='bg-brightgreen hover:bg-darkgreen hover:border-brightgreen hover:border-2 hover:text-brightgreen text-darkgreen font-frank font-bold rounded-tr-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-bl-3xl py-1 md:py-2 lg:py-4 m-5'>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact