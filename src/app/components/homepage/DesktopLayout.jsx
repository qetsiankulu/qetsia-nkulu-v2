import RenderModel from "./RenderModel";
import ResponsiveQN from './ResponsiveQN';
import HomeNavButton from "./HomeNavButton";

import { motion } from "framer-motion"
import { BtnList } from '@/app/data'

const fadeInVariants = { 
    hidden: {opacity: 0},
    show: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.45, 
      }
    }
  }

const MotionDiv = motion.create("div"); // Create a motion component using motion.create 

 const DesktopLayout = () => { 
    return (
        <div className='flex flex-col w-full h-[70vh]'> 
            <div className='flex-1'>
            <RenderModel>
                <ResponsiveQN />
            </RenderModel>
            </div>
            <MotionDiv
            variants={fadeInVariants}
            initial="hidden"
            animate="show"
            className="flex justify-center content-center gap-10"
            >
                {BtnList.map((btn) => (
                <HomeNavButton key={btn.label} {...btn} />
                ))}
            </MotionDiv>
        </div>
    )
}

export default DesktopLayout