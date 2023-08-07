"use client"

import React from 'react';

import Image from 'next/image';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  return (
    // Testimonials
    <div className='pt-5 pb-5'>
        {/* Title */}
        <div className='flex flex-col justify-center align-middle items-center text-center'>
            {/* Title */}
            <div className='font-frank text-center text-m md:text-l lg:text-lx font-bold pb-2'>
                Lo que nuestros clientes opinan
            </div>

            {/* Line */}
            <div className='w-1/3 h-1 bg-darkgreen' />
        </div>

        {/* Body */}
        <div className='flex flex-col lg:flex-row justify-center align-middle items-center text-center px-5 py-7'>
            {/* one */}
            <div className='flex flex-col justify-around pb-3 lg:pb-0 lg:pr-3'>
                {/* Icon */}
                <div>
                    <FormatQuoteIcon 
                        className='text-darkgreen text-lg pb-2 md:text-xl lg:text-xxl'
                    />
                </div>

                {/* Text */}
                <div className='text-darkgreen text-s font-mont font-medium'>
                    Granos de calidad, <br /> 
                    compre varios kilogramos de Trigo, <br />
                    la atencion es muy buena, <br />
                    te asesoran muy bien sobre cada cereal y <br />
                    la calidad, muy recomendable.
                </div>

                {/* Picture */}
                <div className='flex justify-center items-center align-middle py-3'>
                    <Image 
                        src="/man.jpg"
                        width="50"
                        height="50"
                        alt="Image"
                        className='rounded-full h-auto max-w-full border-darkgreen'
                    />
                </div>

                {/* Name */}
                <div className='font-mont text-sx text-darkgreen font-semibold'>
                    Juan Pablo
                </div>
            </div>

            {/* two */}
            <div className='flex flex-col justify-around pb-3 lg:pb-0 lg:pr-3'>
                {/* Icon */}
                <div>
                    <FormatQuoteIcon 
                        className='text-darkgreen text-lg md:text-xl lg:text-xxl pb-2'
                    />
                </div>

                {/* Text */}
                <div className='text-darkgreen text-s font-mont font-medium'>
                    Un lugar genial,<br />
                    con mucha variedad de granos y <br />
                    todo lo necesario para ellos. <br />
                    (Semillas, Fertilizantes, soportes, etc.) <br />
                    Pero sin duda el gran plus de este <br />
                    lugar es el excelente servicio, <br />
                    quienes allí trabajan están prestos a ayudar y asesorar.<br /> 
                    Verdaderamente un lugar increíble. Y con buenos precios.
                </div>

                {/* Picture */}
                <div className='flex justify-center items-center align-middle py-3'>
                    <Image 
                        src="/man1.jpg"
                        width="50"
                        height="50"
                        alt="Image"
                        className='rounded-full h-auto max-w-full border-darkgreen'
                    />
                </div>

                {/* Name */}
                <div className='font-mont text-sx text-darkgreen font-semibold'>
                    Carlos Luis
                </div>
            </div>

            {/* three */}
            <div>
                {/* Icon */}
                <div>
                    <FormatQuoteIcon 
                        className='text-darkgreen text-lg pb-2 md:text-xl lg:text-xxl'
                    />
                </div>

                {/* Text */}
                <div className='text-darkgreen text-s font-mont font-medium'>
                    Simplemente espectacular. <br />
                    Encuentras variedad y calidad de granos...<br /> 
                    Tienen una excelente atención al <br />
                    cliente y además te vas contento con <br />
                    tus granos y con ganas de VOLVER
                </div>

                {/* Picture */}
                <div className='flex justify-center items-center align-middle py-3'>
                    <Image 
                        src="/woman.jpg"
                        width="50"
                        height="50"
                        alt="Image"
                        className='rounded-full h-auto max-w-full border-darkgreen'
                    />
                </div>

                {/* Name */}
                <div className='font-mont text-sx text-darkgreen font-semibold'>
                    Maria Isabella
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials