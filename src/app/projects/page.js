import Image from "next/image";
import bg from "../../../public/background/home-background.jpg"
import ProjectList from "../components/projects";
import NavigationBar from "../components/navigation/NavigationBar";
import { projectsData } from "../data";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-35" style={{ zIndex: -1 }} />
        <NavigationBar />
        <ProjectList projects={projectsData} />
  </main>
  );
}
