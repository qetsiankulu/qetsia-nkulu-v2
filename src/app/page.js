"use client"
import React from 'react'
import BackgroundImage from "./components/BackgroundImage"
import HomeNavButton from "./components/homepage/HomeNavButton";
import RenderModel from "./components/homepage/RenderModel";
import QN from "./components/homepage/QN";

import { BtnList } from '@/app/data'
import { motion } from "framer-motion"
import ResponsiveQN from './components/homepage/ResponsiveQN';


// Create a motion component using motion.create 
const MotionDiv = motion.create("div"); 

const fadeInVariants = { 
  hidden: {opacity: 0},
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.45, 
    }
  }
}


// Adjust the Scale of the QN dynamically 


export default function Home() {
  return (

    <main className="main-content">
      {/* Background Image */}
      <BackgroundImage src="/background/home-background.jpg" />

      {/* Logo and HomeNaveButtons */}
      <div className="w-screen h-[33vh] grid grid-cols-4 gap-2 p-2 "> 
        {/* Column 1 (25% width) */}
        <div className="homepage-col">
          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10 sm:gap-12"
           >
              {BtnList.slice(0, 2).map((btn) => (
                <HomeNavButton key={btn.label} {...btn} />
              ))}
          </MotionDiv>
        </div>

          
        {/* Column 2 (50% width) */}
        <div className="col-span-2 ">
          <RenderModel>
             <ResponsiveQN />
          </RenderModel>
        </div>

          
        {/* Column 3 (25% width) */}
        <div className="homepage-col">
          <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-10 sm:gap-12"
           >
              {BtnList.slice(2, 4).map((btn) => (
                <HomeNavButton key={btn.label} {...btn} />
              ))}
          </MotionDiv>
        </div>

      </div>
      


      

     


    </main>

  // !!!DO NOT DELETE!!!! MAIN WORKING BUILD BELOW.

  // <main className="flex min-h-screen items-center justify-center relative flex-col">
  // {/* Background Image */}
  // <div className="w-full h-full fixed top-0 left-0 z-[-1]">
  //   <Image 
  //     src={bg} 
  //     alt="background-image" 
  //     fill 
  //     className="object-cover object-center opacity-60" 
  //   />
  // </div>

  // <div className="w-full flex flex-col items-center justify-center h-screen">
  //   {/* 3D Model Container */}
  //   <div
  //     className="
  //       flex justify-center items-center 
  //       2xl:w-[950px] 2xl:h-[950px]
  //       xl:w-[950px]  xl:h-[950px]
  //       lg:w-[900px]  lg:h-[900px]
  //       md:w-[750px]  md:h-[750px]
  //       sm:w-[500px]  sm:h-[500px]
  //       xs:w-[350px]  xs:h-[350px]
  //       xxs:w-[250px] xxs:h-[250px]
  //       animate-fadeIn
  //     "
  //   > 
  //     <RenderModel>
  //       <QN scale={[1, 1, 1]}/>
  //     </RenderModel>
  //   </div>

  //   {/* Home Navigation - Positioned Below */}
  //   <HomeNavigation className="mt-6" />
  // </div>
  //</main>




  );
}
