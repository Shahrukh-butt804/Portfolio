'use client'

import React from 'react'
import myImage from "../../../public/images/img.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'

function myNavbar() {

    let links=[
        {
            name:"About",
            path:"/"

    },
        {
            name:"Projects",
            path:"/projects"

    },
        {
            name:"Contact",
            path:"/contact"

    },
       
]

    const pathName = usePathname()






  return (
      <div className='bg-black'>
          {/* <!-- Navbar --> */}
      <div className="p-4 px-3 text-lg font-bold flex justify-between items-start">
        <div className="text-white px-3 font-bold">MR BUTT <span className='text-green-500'>.</span></div>
        <div className="justify-between items-center gap-10 lg:gap-20 hidden md:flex px-2">
            {links.map((e,index)=>{
                return(
                    <>
          <Link href={e.path} key={index} className={`${e.path === pathName && "text-emerald-400 border-b-2 border-green-400 "}
            text-lg font-bold cursor-pointer text-white hover:text-green-400 hover:border-b-2 hover:border-green-400 transition-all
           `}>{e.name}</Link>
                    </>
                )
            })}
        </div>
        <div>
          <Image className='md:block hidden' src={myImage} width={60} alt="My Image" />
          <div className='md:hidden'>
          <MobileNav/>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default myNavbar
