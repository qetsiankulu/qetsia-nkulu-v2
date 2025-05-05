import Image from "next/image";
import bg from "../../../public/background/home-background.jpg"
import ProjectList from "../components/projects/ProjectList"
import NavigationBar from "../components/navigation/NavigationBar"
import { projectsData } from "../data";
import BackgroundImage from "../components/BackgroundImage";


export default function Home() {
  return (

    <main className="main-content">
      {/* Background Image */}
      <BackgroundImage src="/background/home-background.jpg" />
      <NavigationBar />
      <ProjectList projects={projectsData} />
    </main>
    
  //   <main className="flex flex-col items-center w-full relative">
  //       <BackgroundImage 
  //         fill
  //         src={bg} alt="background-image" 
  //         className="w-full h-full object-cover object-center opacity-35" 
  //         style={{ zIndex: -1 }} 
  //       />
  //       <NavigationBar />
  //       <ProjectList projects={projectsData} />
  // </main>
  );
}
