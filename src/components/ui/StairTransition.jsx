'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from 'react'
import Stairs from "./Stairs"

function StairTransition() {
    const pathname = usePathname()
    const [showDiv, setShowDiv] = useState(true)


    // Trigger removal of the div when pathname changes
    useEffect(() => {
        setShowDiv(true)
        setTimeout(() => {
            setShowDiv(false)
        }, 1000)
    }, [pathname])


    return (
        <AnimatePresence mode="wait">
            {showDiv && (
                <motion.div
                    key={pathname}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1, transition: { delay: 1, duration: 0.1, } }}
                    className="h-screen w-screen bg-black fixed top-0 pointer-events-none"
                >
                    <div
                        className="h-full w-screen fixed top-0 left-0 
                                    right-0 pointer-events-none z-999 flex bg-white">
                        <Stairs />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default StairTransition
