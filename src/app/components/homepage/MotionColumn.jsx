import { motion } from "framer-motion"
import HomeNavButton from "./HomeNavButton";

// Create a motion component using motion.create 
const MotionDiv = motion.create("div"); 

// Reusable Column Component for Mobile Layout 

const MotionColumn = ({buttons, variants}) => {
    return (
        <div className="homepage-col">
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10 sm:gap-12"
         >
            {buttons.map((btn) => (
              <HomeNavButton key={btn.label} {...btn} />
            ))}
        </MotionDiv>
      </div>


    )
}

export default MotionColumn