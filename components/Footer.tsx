import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <div>
        <Separator className='my-2 bg-grey-2'/>
        <div className='top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2'>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={130} height={100} />
            </Link>
            <div>
                <p className='flex flex-wrap justify-center items-center mt-4 p-1 text-body-medium'>© 2023 Borcelle Store</p>
            </div>
            <div>
                <p className='flex flex-wrap justify-center items-center gap-10 py-2'>
                    <Link href="https://www.instagram.com/">
                        <Instagram className='hover:fill-red-1'/>
                    </Link>
                    <Link href='https://twitter.com/?lang=en'>
                        <Twitter className='hover:fill-red-1'/>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer