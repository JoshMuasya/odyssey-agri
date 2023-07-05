import React from 'react';

import Image from 'next/image';

const About = () => {
  return (
    <div 
        id='about'
        className=''
    >
        <div className='flex flex-col items-center align-middle justify-center'>
            {/* Heading */}
            <div>
                <h1 className='font-frank font-black text-sx md:text-m lg:text-l text-darkgreen py-2 lg:py-10'>
                    About Us
                </h1>
            </div>

            {/* Body */}
            <div className='flex flex-col justify-center text-center align-middle'>
                {/* Text */}
                <div>
                    <p className='font-mont text-xs md:text-s font-medium text-darkgreen pb-5 md:pb-8'>
                        WE ARE AN AGRICULTURAL GRAIN COMPANY <br />
                        WE AIM AT PROVIDING A VARIETY OF GRAINS AND IMPROVE THE AGRICULTURAL <br />
                        SECTOR IN COLOMBIA. <br />
                    </p>

                    <p className='font-mont text-xs md:text-s font-medium text-darkgreen pb-5 md:pb-8'>
                        Located in the South West of Colombia in the Valle del Cauca region, <br />
                        we enjoy a really good climatic zone and the Cauca River, <br />
                        these are key to our agricultural produce.
                    </p>
                </div>

                {/* Images */}
                <div className='flex flex-col md:flex-row justify-center items-center align-middle w-full pt-5 pb-10 px-3'>
                    <div className='py-3 md:pr-8 lg:pr-14'>
                        <Image 
                            src="/tractor.jpg"
                            width="200"
                            height="200"
                        />
                    </div>

                    <div className='py-3 md:pr-8 lg:pr-14'>
                        <Image 
                            src="/tractor.jpg"
                            width="200"
                            height="200"
                        />
                    </div>

                    <div className='py-3 md:pr-8 lg:pr-14'>
                        <Image 
                            src="/tractor.jpg"
                            width="200"
                            height="200"
                        />
                    </div>  

                    <div className='pt-3 lg:pr-14'>
                        <Image 
                            src="/tractor.jpg"
                            width="200"
                            height="200"
                        />
                    </div>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About