import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/Hero_Image.png'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
            <div>
                <h1 className='text-7xl font-extrabold hyphens-auto uppercase'>Boost up your study progress</h1>
                <div className='py-8'>
                    <Button>See All courses</Button>
                </div>
            </div>
            <div>
                <Image src={heroImage} alt='Hero image' />
            </div>
        </div>
    </section>
  )
}

export default Hero