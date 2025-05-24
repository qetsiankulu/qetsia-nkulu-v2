"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { LucideExternalLink, LucideGithub } from "lucide-react"

const projects = [
  {
    title: "PhotoScavengerHunt",
    description: "An iOS app that allows users to capture or select photos from large libraries and visualize them on a dynamic map with custom markers based on image metadata",
    imageUrl: "images/codepath.png",
    githubLink: "https://github.com/qetsiankulu/ios102-project1-scavenger-hunt",
    demoLink: "https://www.loom.com/share/9b658daa464342a291a0be4bcf1cf7e7",
  },
  {
    title: "TranslateMe",
    description: "A multilingual translation app that uses the Memory API, Firestore for data persistence, and seamless navigation to manage and clear saved translationsI",
    imageUrl: "images/codepath.png",
    githubLink: "https://github.com/qetsiankulu/ios102-project6-translateme",
    demoLink: "https://www.loom.com/share/6259d6ec881f49e7826069c9887871d2",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-2xl hover:shadow-yellow-900/40 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffd90d] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex justify-end space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors duration-300 backdrop-blur-sm border border-white/10"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <LucideGithub className="w-4 h-4 mr-2" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-[#ffd90d] hover:bg-yellow-500 text-gray-900 rounded-xl transition-colors duration-300"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <span>View Project</span>
                    <LucideExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Lightning effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-[#ffd90d]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#ffd90d] text-gray-900 font-medium py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-yellow-300/30 hover:shadow-xl"
          >
            <LucideGithub className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </motion.div> */}
      </div>
    </section>
  )
}
