import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo.png'
import Link from 'next/link'

const menuList = [
    {
        key: 1,
        label: "Home",
        href: "/"
    },
    {
        key: 2,
        label: "Sign In",
        href: "/sign-in"
    }
]

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <Image className='w-20' quality={100} src={logo} alt='Logo' width={100} height={100} />
        <div>
            {menuList.map((item) => (<Link className='px-3 font-semibold' key={item.key} href={item.href} >{item.label}</Link>))}
        </div>
    </div>
  )
}

export default Navbar