
import ProjectCard from "./ProjectCard"

const ProjectList = ({projects}) => {
  return (
    <div className=" py-4 px-16 space-y-6 flex flex-col items-center">
        {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />

        })} 
    </div>
  )
}

export default ProjectList