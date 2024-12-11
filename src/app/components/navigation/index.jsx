"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import HomeNavButton from './HomeNavButton'

const HomeNavigation = () => {
  return (

    <div className="relative flex items-center justify-center w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-max items-center justify-between relative md:bottom-[145px]">
          {BtnList.map((btn) => (
            <HomeNavButton key={btn.label} {...btn} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="flex  xxs:bottom-[210px] xs:bottom-[270px] sm:bottom-[350px] md:hidden w-full absolute left-0 transform -translate-y-1/2 px-4 justify-between">
          {/* Left Buttons */}
          <div className="absolute left-0 flex flex-col gap-4 xs:gap-11 sm:gap-10">
            {BtnList.slice(0, 2).map((btn) => (
              <HomeNavButton key={btn.label} {...btn} />
            ))}
          </div>

          {/* Right Buttons */}
          <div className="absolute right-0 flex flex-col gap-4 xs:gap-11 sm:gap-10">
            {BtnList.slice(2, 4).map((btn) => (
              <HomeNavButton key={btn.label} {...btn} />
            ))}
          </div>
      </div>
    </div>  
  )
}

export default HomeNavigation