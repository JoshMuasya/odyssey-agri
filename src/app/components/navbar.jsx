"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#023020')

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#02302080');
                setTextColor('#FEDF00');
            } else {
                setColor('transparent');
                setTextColor('#023020');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div
        style={{backgroundColor: `${color}`}} 
        className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='m-auto flex flex-col justify-center items-center'>
            {/* Links */}
            <ul 
                style={{color: `${textColor}`}}
                className='flex flex-row'>
                <li className='p-4 font-bold'>
                    <Link href="/home">
                        Home
                    </Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Logo */}
            <Link href="/">
                <Image 
                    src="/Logo.png"
                    alt='Logo'
                    width="150"
                    height="150"
                />
            </Link>
        </div>
    </div>
  )
}

export default Navbar