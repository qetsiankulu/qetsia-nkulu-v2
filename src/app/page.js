import Image from "next/image";
import bg from "../../public/background/home-background.jpg"
import RenderModel from "./components/homepage/RenderModel";
import QN from "./components/homepage/QN";
import HomeNavigation from "./components/homepage/HomeNavigation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center relative">
       {/* Background Image */}
      <Image 
      src={bg} 
      alt="background-image" 
      fill 
      className="w-full h-full object-cover object-center opacity-60" // opacity-60
      style={{ zIndex: -1 }} 
      />
      
    <div className="w-full h-screen flex">
      
      {/* 3D model */}
      <div className = "flex-grow flex justify-center items-center flex-col "> 
        <div
          className="
            w-full h-full 
            2xl:max-w-[950px] 2xl:max-h-[950px]
            xl:max-w-[950px]  xl:max-h-[950px]
            lg:max-w-[900px]  lg:max-h-[900px]
            md:max-w-[750px]  md:max-h-[750px]
            sm:max-w-[500px]  sm:max-h-[500px]
            xs:max-w-[350px]  xs:max-h-[350px]
            xxs:max-w-[250px] xxs:max-h-[250px]
            animate-fadeIn
          "
        > 
          <RenderModel>
              <QN scale={[1, 1, 1]}/>
          </RenderModel>
        </div>
        <HomeNavigation />
      </div>
   

      
    </div>
    
  </main>
  );
}
