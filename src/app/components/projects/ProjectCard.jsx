import React from 'react'
import Link from 'next/link'

import { ExternalLink, Github } from 'lucide-react'

const getIcon = (icon) => { 
    const iconClass = 'h-auto'
    const iconWidth = 2

    switch (icon) { 
        case "ext-link": 
            return <ExternalLink className = {`${iconClass}`} strokeWidth = {`${iconWidth}`} />
        
        case "github": 
        return <Github className = {`${iconClass}`} strokeWidth = {`${iconWidth}`} />

    }
}

const ProjectCard = ({name, description, imagePath, imageAlt, technologiesUsed, githubLink, demoLink}) => {
  return ( 
    <div className='custom-bg flex items-center justify-between w-full shadow-md relative rounded-xl p-3'>
        <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
            {/* <-- Image Section --> */}
            <div class="w-1/3">
                <img
                    src={imagePath}
                    alt={imageAlt}
                    class="w-48 -48 object-cover mx-auto"
                />
            </div>

            {/* <!-- Text Section --> */}
            <div class="w-2/3 px-6">
                <h2 class="text-xl font-semibold mb-2">{name}</h2>
                <p class="text-white">{description} </p>
                <ul className="mt-2 flex flex-wrap">
                    {technologiesUsed.map((tech, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-500">
                                {tech}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className = "flex">
                    <Link href = {demoLink} target = '_blank' className='flex items-center '>
                        <span className='relative peer p-3 text-white hover:text-foreground' > 
                            {getIcon("ext-link")}
                        </span>
                    </Link>
                    <Link href = {githubLink} target ='_blank' className='flex items-center'>
                        <span className='relative peer p-3 text-white hover:text-foreground' >
                            {getIcon("github")}
                        </span>
                    </Link>
                </div>
            </div>
         </div>
    </div>

  )
}

export default ProjectCard