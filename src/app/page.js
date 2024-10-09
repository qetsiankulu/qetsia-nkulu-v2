import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "./components/RenderModel";
import QN from "./components/models/QN";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
      src={bg} 
      alt="background-image" 
      fill 
      className="w-full h-full object-cover object-center opacity-100"
      style={{ zIndex: -1 }} 
      />
      
    <div className="w-full h-screen">
      {/* navigaton and 3d model */}
        <RenderModel>
          <QN />
        </RenderModel>
    </div>
    
    
    </main>
  );
}
