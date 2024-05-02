import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='px-[20px] md:px-[80px] py-[40px] bg-[#191919]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                    <div className='p-5'>
                        <div className='w-[47px] h-[47px]'>
                            <img src="/assets/logo/LOGO1.png" alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className='p-5 pr-2'>
                        <div className='flex flex-col gap-5 text-white'>
                            <h2 className='text-gray-300  font-medium'>Kontak</h2>
                            <Link to={'https://wa.me/6281246486630'} className='hover:text-blue-400'>+62 812-4648-6630 </Link>
                            <Link to={'https://wa.me/6282141074046'} className='hover:text-blue-400'>+62 821-4107-4046 </Link>
                            <Link to={'https://wa.me/6282237731413'} className='hover:text-blue-400'>+62 822-3773-1413</Link>
                            <Link to={'https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=forumosisjabar@gmail.com'} className='hover:text-blue-400'>forumosisjabar@gmail.com  </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-5 px-[20px] border-t-2 bg-[#191919]'>
                <div className='flex justify-center items-center text-white hide-scrollbar'>
                    <p>@ 2023 Made with Love. Digital Inovation</p>
                </div>
            </div>
        </>
    )
}

export default Footer