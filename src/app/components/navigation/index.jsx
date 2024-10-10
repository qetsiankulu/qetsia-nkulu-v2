"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton'

const NavigationHome = () => {
  return (

      <div className='fixed top-[330px] w-full h-screen flex items-center justify-center'>
        <div className = 'w-max flex items-center justify-between relative'>
          {
              BtnList.map((btn, index) => { 

                  return <NavButton key={btn.label} {...btn} />

              })
          }
        </div>
      </div>




    
  )
}

export default NavigationHome