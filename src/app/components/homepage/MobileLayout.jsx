import MotionColumn from "./MotionColumn";
import RenderModel from "./RenderModel";
import ResponsiveQN from './ResponsiveQN';

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
 const MobileLayout = () => { 
    return (
      <div className="w-screen h-[30vh] grid grid-cols-4 gap-2 p-2 -translate-y-8"> 
      {/* Column 1 (25% width) */}
      <MotionColumn
        buttons={BtnList.slice(0, 2)}
        variants={fadeInVariants}
      />
        
  
      {/* Column 2 (50% width) */}
      <div className="col-span-2 ">
        <RenderModel>
           <ResponsiveQN />
        </RenderModel>
      </div>

        
      {/* Column 3 (25% width) */}
      <MotionColumn
        buttons={BtnList.slice(2, 4)}
        variants={fadeInVariants}
      />
    </div>

    )
 }






 export default MobileLayout; 