import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "./components/RenderModel";
import QN from "./components/models/QN";
import NavigationHome from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
      src={bg} 
      alt="background-image" 
      fill 
      className="w-full h-full object-cover object-center opacity-60"
      style={{ zIndex: -1 }} 
      />
      
    <div className="w-full h-screen flex flex-col">
      {/* 3D model and navigation */}
      <div className="flex-grow "> 
        <RenderModel>
            <QN />
        </RenderModel>
      </div>
      <NavigationHome />
    </div>
    
  </main>
  );
}
