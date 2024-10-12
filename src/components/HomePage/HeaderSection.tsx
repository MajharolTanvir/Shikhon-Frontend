import React from 'react'
import headerImage from '../../assets/classroom.jpg'
import Image from 'next/image'
import PrimaryButton from '../UI/PrimaryButton'

const HeaderSection = () => {
  return (
    <div className='relative'>
        <div>
            <Image className='h-[550px] brightness-75' src={headerImage} alt="Header Image"  />
        </div>
        <div className='flex flex-col justify-center items-center absolute top-[25%] w-[80%] right-[10%] p-20 bg-white/20'>
          <h1 className='text-2xl font-serif font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur maiores assumenda placeat sit quia soluta?</h1>
          <PrimaryButton title='Explore Institute' />
        </div>
    </div>
  )
}

export default HeaderSection