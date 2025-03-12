"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import HomeNavButton from './HomeNavButton'
import {motion} from "framer-motion"

const container = { 
  hidden: {opacity: 0},
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.45, 
    }
  }
}

const HomeNavigation = () => {
  return (
    <div className='w-full relative flex items-center justify-center' >
        {/* Desktop Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex w-max items-center justify-between relative md:bottom-[145px]">
            {BtnList.map((btn) => (
              <HomeNavButton key={btn.label} {...btn} />
            ))}
        </motion.div>

        {/* Mobile Layout */}
        <div className='flex xxs:bottom-[210px] xs:bottom-[270px] sm:bottom-[350px] md:hidden w-full absolute left-0 transform -translate-y-1/2 px-4 justify-between'>
          {/* Left Buttons */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute left-0 flex flex-col gap-4 xs:gap-11 sm:gap-10">
              {BtnList.slice(0, 2).map((btn) => (
                <HomeNavButton key={btn.label} {...btn} />
              ))}
          </motion.div>

          {/* Right Buttons */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className='absolute right-0 flex flex-col gap-4 xs:gap-11 sm:gap-10'>
              {BtnList.slice(2, 4).map((btn) => (
                <HomeNavButton key={btn.label} {...btn} />
              ))}
          </motion.div>
      </div>
    </div>  
  )
}

export default HomeNavigation