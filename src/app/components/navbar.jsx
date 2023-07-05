"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#D9D9D9')

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#02302080');
                setTextColor('#FEDF00');
            } else {
                setColor('transparent');
                setTextColor('#D9D9D9');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div
        style={{backgroundColor: `${color}`}} 
        className='fixed left-0 top-0 w-full z-20 ease-in duration-300'>
        <div className='m-auto flex flex-col justify-center items-center'>
            {/* Links */}
            <ul 
                style={{color: `${textColor}`}}
                className='flex flex-row'>
                <li className='p-4 font-bold'>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href="#about">
                        About
                    </Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href="#contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Logo */}
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
    </div>
  )
}

export default Navbar