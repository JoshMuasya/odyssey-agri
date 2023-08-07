import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    // About
    <div className='py-5 flex flex-col lg:flex-row justify-around align-middle items-center'>
        {/* Left */}
        <div className='py-5 lg:py-0 px-2'>
            {/* Image */}
            <Image
                src="/barley.jpg" 
                width="800"
                height="800" 
                alt="About Image"
                className='border-darkgreen border-4 rounded-tr-xl rounded-bl-xl md:rounded-tr-2xl md:rounded-bl-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl'
            />
        </div>

        {/* Right */}
        <div className='flex flex-col justify-center align-middle items-center px-3 py-5 lg:py-0'>
            {/* Sub Title */}
            <div className='text-center text-sx md:text-m lg:text-l font-mont font-medium text-darkgreen'>
                NUESTRA HISTORIA                
            </div>

            {/* Title */}
            <div className='text-m md:text-l lg:text-lx font-frank font-bold text-darkgreen'>
                Para los que amamos los granos originales
            </div>

            {/* Body */}
            <div className='pb-3 lg:pb-2 pt-3 text-s text-darkgreen text-center font-mont'>
                En Granja Cereales llevamos más <br /> 
                de 15 años fomentando una buena relación <br /> 
                con el medio ambiente.
            </div>

            <div className='pb-6 text-s text-darkgreen text-center font-mont'>
                Nuestra historia muestra lo que nos mueve.
            </div>

            {/* Button */}
            <div className='bg-darkgreen hover:bg-yellow rounded-tr-xl rounded-bl-xl md:rounded-tr-2xl md:rounded-bl-2xl lg:rounded-tr-3xl lg:rounded-bl-3xl text-yellow hover:text-darkgreen text-sx md:text-m lg:text-l font-frank font-bold py-3 px-5'>
                <Link href="/">
                    leer más
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About