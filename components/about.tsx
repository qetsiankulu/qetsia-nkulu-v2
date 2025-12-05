"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import {
  LucideGraduationCap,
  LucideCode,
  LucideLayoutTemplate,
  LucideWrench,
  LucideUser,
  LucideAward,
} from "lucide-react"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const educationData = [
    {
    institution: "UCLA Extension",
    degree: "Certificate in Applications Programming",
    period: "2023",
    logo: "images/ucla-ext-logo.png",
  },
  {
    institution: "University of California, Los Angeles (UCLA)",
    degree: "Bachelor of Science in Cognitive Science",
    period: "2018 - 2022",
    logo: "images/ucla-logo.jpeg",
  }
]

const skillsData = {
  languages: [
    { name: "Swift", icon: "images/swift.svg?height=40&width=40" },
    { name: "Python", icon: "images/python.svg?height=40&width=40" },
    { name: "Java", icon: "images/java.svg?height=40&width=40" },
    { name: "JavaScript", icon: "images/javascript.svg?height=40&width=40" },
    { name: "HTML", icon: "images/html.svg?height=40&width=40" },
    { name: "CSS", icon: "images/css.svg?height=40&width=40" },
  ],
  frameworks: [
    { name: "SwiftUI", icon: "images/swiftui.png" }, 
    { name: "UIKit", icon:"images/swift.svg?height=40&width=40" }, 
    { name: "React.js", icon: "images/react.svg?height=40&width=40" }, 
    { name: "Next.js", icon: "images/nextjs.svg?height=40&width=40" }, 
    { name: "Tailwind CSS", icon: "images/tailwind.svg?height=40&width=40" } 
  ],
  tools: [
    { name: "Xcode", icon: "images/xcode.svg?height=40&width=40" },
    { name: "Figma", icon: "images/figma.svg?height=40&width=40" },
    { name: "Git", icon: "images/git.svg?height=40&width=40" },
    { name: "VS Code", icon: "images/vscode.svg?height=40&width=40" }
  ],
}

const certificationsData = [
    {
    name: "Intro to Technical Interview Prep",
    issuer: "Codepath",
    date: "2024",
    logo: "images/codepath.png",
    credentialId: "69541",
  },
  {
    name: "Intermediate iOS Development",
    issuer: "Codepath",
    date: "2024",
    logo: "images/codepath.png",
    credentialId: "203080",
  },
  {
    name: "Intro to iOS Development",
    issuer: "Codepath",
    date: "2023",
    logo: "images/codepath.png",
    credentialId: "190620",
  },
  {
    name: "UI/UX Boot Camp Certification",
    issuer: "UC Berkeley Extension",
    date: "2022",
    logo: "images/uc-berkely.png",
  },
  
  
]

interface SkillProps {
  name: string
  icon: string
}

function Skill({ name, icon }: SkillProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ y: -5 }}
             className="w-14 h-14 bg-white rounded-xl shadow-md border border-white/20 flex items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-yellow-300 backdrop-blur-sm"
          >
            <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} className="object-contain" />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="text-[#ffd90d] bg-[#1e1e1e] rounded-[8px] border-0 outline-none shadow-lg px-3 py-2 text-sm">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading>About Me</SectionHeading>
         {/* Yellow underline below heading */}
        <div className="w-24 h-1 bg-[#ffd90d] mx-auto mt-2 mb-16"></div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Who I Am + Education */}
          <div className="space-y-12">
            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1b1b1b]/20 mr-3 border border-[#ffd90d]/30 border-solid backdrop-blur-[6px] shadow-glass-inset">
                  <LucideUser className="w-5 h-5 text-[#ffd90d]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>

              <div className="pl-13">
                <p className="text-gray-300 mb-6 leading-relaxed">
                With a background in UI/UX, I bring a strong product mindset to iOS development. 
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                I combine product thinking with scalable architecture, which makes me especially effective in early-stage product environments where fast iteration, clean design systems, and long-term maintainability are essential.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                I enjoy turning complex user flows into reliable, testable code that’s easy to scale and iterate on.
                </p>

                 <p className="text-gray-300 mb-6 leading-relaxed">
                Currently, I am the Lead iOS Engineer at a San Diego-based startup, where I focus on building scalable, modular SwiftUI architectures. 
                I’ve led the development of key features such as dynamic onboarding flows and a decoupled authentication system built for clarity and testability.
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  I am from the Democratic Republic of Congo. I lived in Kinshasa, Congo for most of my life. I moved to Los Angeles right after I finished high school for my undergraduate studies. 
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  In my free time, I like reading novels, working out, gaming, watching anime, exploring different music genres, and practicing guitar.
                </p>

                
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1b1b1b]/20 mr-3 border border-[#ffd90d]/30 border-solid backdrop-blur-[6px] shadow-glass-inset">
                  <LucideGraduationCap className="w-5 h-5 text-[#ffd90d]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-4 border border-white/20 hover:shadow-lg hover:shadow-yellow-900/20 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Lightning bolt decorative element */}
                    <div className="absolute -right-2 -top-2 w-12 h-12 text-yellow-500/20 opacity-20 z-0">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center p-1">
                          <Image
                            src={edu.logo || "/placeholder.svg"}
                            alt={edu.institution}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h4 className="text-base font-semibold text-white mb-0.5">{edu.institution}</h4>
                        <p className="text-[#ffd90d] font-medium text-sm mb-0.5">{edu.degree}</p>
                        <p className="text-gray-300 text-xs">{edu.period}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Technical Skills + Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md rounded-xl px-6 pt-6 pb-3 border border-white/10 "
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <LucideCode className="w-5 h-5 text-[#ffd90d] mr-2" />
                <h4 className="text-lg font-semibold text-gray-200">Languages</h4>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {skillsData.languages.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Skill name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <LucideLayoutTemplate className="w-5 h-5 text-[#ffd90d] mr-2" />
                <h4 className="text-lg font-semibold text-gray-200">Frameworks</h4>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {skillsData.frameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Skill name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <LucideWrench className="w-5 h-5 text-[#ffd90d] mr-2" />
                <h4 className="text-lg font-semibold text-gray-200">Tools</h4>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {skillsData.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Skill name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-4">
                <LucideAward className="w-5 h-5 text-[#ffd90d] mr-2" />
                <h4 className="text-lg font-semibold text-gray-200">Certifications</h4>
              </div>
              <div className="space-y-3">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.93+ index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-3 rounded-xl border border-white/20 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-md bg-white/10 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-16 h-16 flex items-center justify-center p-1">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{cert.name}</h4>
                      <p className="text-[#ffd90d] font-medium text-xs">{cert.issuer}</p>
                      <div className="flex items-center mt-0.5 text-xs text-gray-300">
                   <span>Issued {cert.date}</span>
                    {cert.credentialId && (
                            <>
                              <span className="mx-1.5">•</span>
                              <span className="truncate">ID: {cert.credentialId}</span>
                            </>
                      )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
