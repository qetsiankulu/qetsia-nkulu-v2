"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { LucideCalendar, LucideMapPin } from "lucide-react"

const experiences = [
  {
    company: "Nupt.AI",
    position: "Software Engineer Intern",
    period: "Mar 2025 - Present",
    location: "Los Angeles, CA",
    responsibilities: [
      "Resolved front-end bugs across key pages by identifying and fixing production issues in the codebases",
    ],
    logoUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    company: "BruinShack",
    position: "UI/UX Intern",
    period: "Oct 2022 - Feb 2023",
    location: "Remote",
    responsibilities: [
      "Deployed Web Server on AWS, achieving 99.9% uptime",
      "Trained an AI model with 70% accuracy, improving customer recommendations",
      "Collaborated with cross-functional teams to implement new features",
    ],
    logoUrl: "/placeholder.svg?height=100&width=100",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading>Work Experience</SectionHeading>

        {/* Yellow underline below heading */}
        <div className="w-24 h-1 bg-[#ffd90d] mx-auto mt-2 mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/50 hidden md:block"></div>

          {/* Experience cards */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`mb-16 flex justify-center items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot - centered on the timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ffd90d] rounded-full border-4 border-black/50 shadow-md z-20 hidden md:block"></div>

                <div
                  className={`relative md:max-w-[90%] lg:max-w-[80%] w-full md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Experience card */}
                  <div className="bg-black/40 backdrop-blur-md rounded-lg shadow-md p-6 relative z-10 border border-white/10">
                    {/* Company logo and name */}
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-14 h-14 rounded-md overflow-hidden bg-black/30 shadow-sm border border-white/20 flex items-center justify-center p-1">
                          <Image
                            src={exp.logoUrl || "/placeholder.svg"}
                            alt={exp.company}
                            width={60}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <p className="text-[#ffd90d] font-semibold">{exp.position}</p>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex items-center text-gray-300 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <LucideCalendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <LucideMapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#ffd90d] mr-2 mt-1">•</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
