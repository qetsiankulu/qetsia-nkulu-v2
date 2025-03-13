import {useState, useEffect, React} from "react"
import QN from "./QN"; // Import QN component

{/* Scale the QN based on the screen size */}
export default function ResponsiveQN() {
    const [scale, setScale] = useState([3, 3, 3]); // Default scale 

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            switch (true) {
                case width >= 1024:
                  setScale([6, 6, 6]); // Large screens (lg+)
                  break;
                case width >= 768:
                  setScale([5.5, 5.5, 5.5]); // Medium screens (md)
                  break;
                default:
                  setScale([3, 3, 3]); // Small screens (default)

            }
          };

          window.addEventListener("resize", handleResize);
          handleResize();  // Set initial scale 

          return () => window.removeEventListener("resize", handleResize);
  }, []);


  return <QN scale={scale} />;
}

