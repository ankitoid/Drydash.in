import React from 'react'
import Container from '@/components/common/container'
import Image from 'next/image'
import Hero_character from '@/../public/Assests/Images/Hero_charater.png'
import DownloadBtn from '../DownloadBtn/downloadBtn'
import Link from 'next/link'

const hero = () => {
    return (
        <Container>
            <div className='flex item-center justify-between  h-screen px-[16px]'>
                <div className='w-1/2 flex flex-col  justify-start gap-y-[24px] pt-[5%]'>
                    <h1 className='text-h1'>Same-Day <br /> Dry Cleaning</h1>
                    <p className='text-body w-[60%]'>Get your shoes and apparels restored the same day, free pick up and delivery and ₹0 hidden charges.</p>
                    <div className='flex'>
                        <DownloadBtn />
                        <Link href="/about-us" className="p-[2px] 2xl:rounded-xl rounded-lg bg-transparent will-change-transform w-full sm:w-auto flex justify-center cursor-pointer">
                            <button className='bg-transparent text-primary 2xl:text-lg text-[15px] 2xl:w-50 w-full px-8 2xl:h-14 h-12 flex items-center justify-center gap-3 transition-transform active:scale-[0.98] rounded-lg cursor-pointer'>Learn More</button>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image src={Hero_character} alt='hero' width={1000} height={1000} />
                </div>
            </div>


        </Container>
    )
}

export default hero