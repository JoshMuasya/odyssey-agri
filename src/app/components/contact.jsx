import React from 'react'

const Contact = () => {
  return (
    <div 
        id='contact' 
        className='bg-darkgreen w-full h-fit'
    >
        {/* Details */}
        <div className='flex flex-col md:flex-row justify-center align-middle items-center py-12 md:py-16 lg:py-20'>
            {/* Address */}
            <div className='flex flex-col justify-center align-middle items-center py-3 md:pr-3 lg:pr-10'>
                {/* Street */}
                <div className='text-brightgreen text-center font-mont text-s md:text-sx lg:text-m font-bold pb-5'>
                    Street 115, Bogota Colombia
                </div>

                {/* Phone */}
                <div className='text-brightgreen font-mont text-s md:text-sx lg:text-m font-bold'>
                    +57 8785412542
                </div>
            </div>

            {/* Email */}
            <div className='md:pl-5 lg:pl-10'>
                <form 
                    action="submit"
                    className='text-brightgreen flex flex-col text-s font-mont font-semibold'
                >
                    <div className='text-brightgreen font-frank font-bold text-m lg:text-l text-center'>
                        Email Us
                    </div>
                    <input 
                        type="email" 
                        placeholder='Enter your Email' 
                        className='bg-backgreen p-3 md:p-4 lg:p-5 border-brightgreen hover:border-brightgreen active:border-brightgreen after:border-brightgreen border-2 m-2 rounded-tr-3xl rounded-bl-3xl'
                    />
                    <input 
                        type="message" 
                        placeholder='Talk to us' 
                        className='bg-backgreen p-3 md:p-4 lg:p-5 border-brightgreen hover:border-brightgreen active:border-brightgreen after:border-brightgreen border-2 m-2 rounded-tr-3xl rounded-bl-3xl'
                    />

                    <button className='bg-brightgreen hover:bg-darkgreen hover:border-brightgreen hover:border-2 hover:text-brightgreen text-darkgreen font-frank font-bold rounded-tr-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-bl-3xl py-1 md:py-2 lg:py-4 m-5'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact