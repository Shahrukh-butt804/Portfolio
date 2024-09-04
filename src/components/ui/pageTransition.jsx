"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

function PageTransition({ children }) {
  const pathname = usePathname()

  const [show,setShow]=useState(false)

  useEffect(()=>{
    setShow(false)
    setTimeout(()=>{
      setShow(true)
    },2000)
  },[pathname])


  return (
    <AnimatePresence >
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 1, ease: "easeInOut" }
          }}
          className="h-full w-screen fixed top-0 bg-black pointer-events-none"
        />

        
        {show &&(
          children
        )}
      </div>
    </AnimatePresence>
  )
}



export default PageTransition
