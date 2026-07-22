// "use client"

// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import Image from "next/image"
// import { LucideCalendar, LucideMapPin } from "lucide-react"

// const experiences = [
//   {
//     company: "TOKK",
//     companyUrl: "https://tokk.ai",
//     location: "Remote",
//     logoUrl: "images/tokk.jpeg",
//     roles: [
//       {
//         position: "iOS Engineering Intern",
//         period: "Oct 2025 - Jan 2026",
//         responsibilities: [
//           "Built and redesigned critical iOS systems including a custom SwiftUI authentication architecture, a modular WebSocket communication layer, an AudioPlaybackService, and a scalable MVVM onboarding experience. Worked within a cross-functional team to deliver clean, extensible foundations."
//         ],
//         technologies: ["Swift", "SwiftUI", "AWS Amplify", "Combine", "MVVM"],
//       },
//     ],
//   },
//   {
//     company: "Nupt.AI",
//     companyUrl: "https://nupt.ai/",
//     location: "Los Angeles, CA",
//     logoUrl: "images/nupt.png",
//     roles: [
//       {
//         position: "Software Engineering Intern",
//         period: "Mar 2025 - Jun 2025",
//         responsibilities: [
//           "Reduced technical debt and implementation risk by speccing a blogging platform, defining core data models, entity relationships, and access control logic to align with business objectives. Designed and implemented a production-grade CMS backend supporting structured content workflows for admins, with role-based access control and a custom rich text editor integration."
//         ],
//         technologies: ["Bubble.io", "System Design", "Data Modeling", "Role-Based Access Control", "Full-Stack Development"],
//       },
//     ],
//   },
//   {
//     company: "UniShack",
//     companyUrl: "https://www.unishack.com/",
//     location: "Remote",
//     logoUrl: "images/unishack.png",
//     roles: [
//       {
//         position: "User Experience Designer",
//         period: "Jan 2023 - Feb 2023",
//         responsibilities: ["Benchmarked major apartment platforms through competitive analysis to align the product with market standards. Defined core UI features and facilitated iterative design reviews with industry mentors throughout the prototyping process."],
//         technologies: ["Figma","UI Design", "Wireframing", "Prototyping"],
//       },
//       {
//         position: "UI/UX Intern",
//         period: "Oct 2022 - Dec 2022",
//         responsibilities: ["Conducted user research specifically on UCLA students to distinguish their housing needs from those of general renters, surfacing key insights that directly shaped design decisions. "],
//         technologies: ["Figma", "Competitive Analysis",  "User Research",],
//       },
//     ],
//   },
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         <SectionHeading>Experience</SectionHeading>

//         {/* Yellow underline below heading */}
//         <div className="w-24 h-1 bg-[#ffd90d] mx-auto mt-2 mb-16"></div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/50 hidden md:block"></div>

//           {/* Experience cards */}
//           <div className="relative">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className={`mb-16 flex justify-center items-center ${
//                   index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                 }`}
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ffd90d] rounded-full border-4 border-black/50 shadow-md z-20 hidden md:block"></div>

//                 <div
//                   className={`relative md:max-w-[90%] lg:max-w-[80%] w-full md:w-[calc(50%-40px)] ${
//                     index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
//                   }`}
//                 >
//                   <div className="group bg-black/40 backdrop-blur-md rounded-xl shadow-md p-6 relative z-10 border border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-900/40 overflow-hidden">
//                     {/* Company logo and name */}
//                     <div className="flex items-start mb-4">
//                       <div className="mr-4 flex-shrink-0">
//                         <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm flex items-center justify-center p-1">
//                           <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
//                             <Image
//                               src={exp.logoUrl || "/placeholder.svg"}
//                               alt={exp.company}
//                               width={60}
//                               height={60}
//                               className="object-contain"
//                             />
//                           </a>
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-white duration-300 group-hover:text-[#ffd90d]">{exp.company}</h3>
//                         <p className="text-white duration-300 group-hover:text-[#ffd90d]">{exp.roles[0].position}</p>
//                       </div>
//                     </div>

//                     {/* Roles */}
//                     {exp.roles.map((role, roleIndex) => (
//                       <div key={roleIndex}>
//                         {roleIndex > 0 && (
//                           <>
//                             <div className="border-t border-white/10 my-4" />
//                             <p className="text-white duration-300 group-hover:text-[#ffd90d] mb-2">{role.position}</p>
//                           </>
//                         )}
//                         <div className="flex items-center text-gray-300 text-sm my-2 space-x-4">
//                           <div className="flex items-center">
//                             <LucideCalendar className="w-4 h-4 mr-1" />
//                             <span>{role.period}</span>
//                           </div>
//                           <div className="flex items-center">
//                             <LucideMapPin className="w-4 h-4 mr-1" />
//                             <span>{exp.location}</span>
//                           </div>
//                         </div>
//                         <p className="text-gray-300 text-sm leading-relaxed">
//                           {role.responsibilities.join(" ")}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mt-4">
//                           {role.technologies.map((tech, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 text-xs font-medium rounded-full border border-[#ffd90d]/40 text-[#ffd90d] bg-[#F68349]/10"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     ))}

//                     {/* Hover effect */}
//                     <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-[#ffd90d]"></div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import SectionHeading from "./section-heading"
// import Image from "next/image"
// import { LucideCalendar, LucideMapPin } from "lucide-react"

// const experiences = [
//   {
//     company: "TOKK",
//     companyUrl: "https://tokk.ai",
//     location: "Remote",
//     logoUrl: "images/tokk.jpeg",
//     roles: [
//       {
//         position: "iOS Engineering Intern",
//         period: "Oct 2025 - Jan 2026",
//         responsibilities: [
//           "Built and redesigned critical iOS systems including a custom SwiftUI authentication architecture, a modular WebSocket communication layer, an AudioPlaybackService, and a scalable MVVM onboarding experience. Worked within a cross-functional team to deliver clean, extensible foundations."
//         ],
//         technologies: ["Swift", "SwiftUI", "AWS Amplify", "Combine", "MVVM"],
//       },
//     ],
//   },
//   {
//     company: "Nupt.AI",
//     companyUrl: "https://nupt.ai/",
//     location: "Los Angeles, CA",
//     logoUrl: "images/nupt.png",
//     roles: [
//       {
//         position: "Software Engineering Intern",
//         period: "Mar 2025 - Jun 2025",
//         responsibilities: [
//           "Reduced technical debt and implementation risk by speccing a blogging platform, defining core data models, entity relationships, and access control logic to align with business objectives. Designed and implemented a production-grade CMS backend supporting structured content workflows for admins, with role-based access control and a custom rich text editor integration."
//         ],
//         technologies: ["Bubble.io", "System Design", "Data Modeling", "Role-Based Access Control", "Full-Stack Development"],
//       },
//     ],
//   },
//   {
//     company: "UniShack",
//     companyUrl: "https://www.unishack.com/",
//     location: "Remote",
//     logoUrl: "images/unishack.png",
//     roles: [
//       {
//         position: "User Experience Designer",
//         period: "Jan 2023 - Feb 2023",
//         responsibilities: [
//           "Benchmarked major apartment platforms through competitive analysis to align the product with market standards. Defined core UI features and facilitated iterative design reviews with industry mentors throughout the prototyping process."
//         ],
//         technologies: ["Figma", "UI Design", "Wireframing", "Prototyping"],
//       },
//       {
//         position: "UI/UX Intern",
//         period: "Oct 2022 - Dec 2022",
//         responsibilities: [
//           "Conducted user research specifically on UCLA students to distinguish their housing needs from those of general renters, surfacing key insights that directly shaped design decisions."
//         ],
//         technologies: ["Figma", "Competitive Analysis", "User Research"],
//       },
//     ],
//   },
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//         <SectionHeading>Experience</SectionHeading>

//         {/* Yellow underline below heading */}
//         <div className="w-24 h-1 bg-[#ffd90d] mx-auto mt-2 mb-16"></div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/50 hidden md:block"></div>

//           {/* Experience cards */}
//           <div className="relative">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className={`mb-16 flex justify-center items-center ${
//                   index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                 }`}
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ffd90d] rounded-full border-4 border-black/50 shadow-md z-20 hidden md:block"></div>

//                 <div
//                   className={`relative md:max-w-[90%] lg:max-w-[80%] w-full md:w-[calc(50%-40px)] ${
//                     index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
//                   }`}
//                 >
//                   <div className="group bg-black/40 backdrop-blur-md rounded-xl shadow-md p-6 relative z-10 border border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-900/40 overflow-hidden">
//                     {/* Company logo and name */}
//                     <div className="flex items-start mb-6">
//                       <div className="mr-4 flex-shrink-0">
//                         <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm flex items-center justify-center p-1">
//                           <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
//                             <Image
//                               src={exp.logoUrl || "/placeholder.svg"}
//                               alt={exp.company}
//                               width={60}
//                               height={60}
//                               className="object-contain"
//                             />
//                           </a>
//                         </div>
//                       </div>
//                       <div className="pt-1">
//                         <h3 className="text-xl font-bold text-white duration-300 group-hover:text-[#ffd90d]">{exp.company}</h3>
//                         <div className="flex items-center text-gray-400 text-sm mt-1">
//                           <LucideMapPin className="w-3 h-3 mr-1" />
//                           <span>{exp.location}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Roles */}
//                     <div className="relative">
//                       {/* Left indicator line — only shown for multi-role */}
//                       {exp.roles.length > 1 && (
//                         <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/20"></div>
//                       )}

//                       {exp.roles.map((role, roleIndex) => (
//                         <div key={roleIndex} className={`relative ${roleIndex > 0 ? "mt-6" : ""} ${exp.roles.length > 1 ? "pl-6" : ""}`}>
//                           {/* Dot on the left indicator line */}
//                           {exp.roles.length > 1 && (
//                             <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-[#ffd90d] bg-black"></div>
//                           )}

//                           <p className="text-white font-medium duration-300 group-hover:text-[#ffd90d]">{role.position}</p>
//                           <div className="flex items-center text-gray-400 text-sm mt-1 mb-2">
//                             <LucideCalendar className="w-3 h-3 mr-1" />
//                             <span>{role.period}</span>
//                           </div>
//                           <p className="text-gray-300 text-sm leading-relaxed">
//                             {role.responsibilities.join(" ")}
//                           </p>
//                           <div className="flex flex-wrap gap-2 mt-3">
//                             {role.technologies.map((tech, i) => (
//                               <span
//                                 key={i}
//                                 className="px-3 py-1 text-xs font-medium rounded-full border border-[#ffd90d]/40 text-[#ffd90d] bg-[#F68349]/10"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Hover effect */}
//                     <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-[#ffd90d]"></div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { LucideCalendar, LucideMapPin } from "lucide-react"

const experiences = [
    {
    company: "Shure",
    companyUrl: "https://www.shure.com/en-US",
    location: "Remote",
    logoUrl: "images/shure.jpeg",
    roles: [
      {
        position: "iOS Engineering Intern",
        period: "Jun 2026 - Aug 2026",
        responsibilities: [
          ""
        ],
        technologies: ["iOS Development"],
      },
    ],
  },
  {
    company: "TOKK",
    companyUrl: "https://tokk.ai",
    location: "Remote",
    logoUrl: "images/tokk.jpeg",
    roles: [
      {
        position: "iOS Engineering Intern",
        period: "Oct 2025 - Jan 2026",
        responsibilities: [
          "Built and redesigned critical iOS systems including a custom SwiftUI authentication architecture, a modular WebSocket communication layer, an AudioPlaybackService, and a scalable MVVM onboarding experience. Worked within a cross-functional team to deliver clean, extensible foundations."
        ],
        technologies: ["Swift", "SwiftUI", "AWS Amplify", "Combine", "MVVM"],
      },
    ],
  },
  {
    company: "Nupt.AI",
    companyUrl: "https://nupt.ai/",
    location: "Los Angeles, CA",
    logoUrl: "images/nupt.png",
    roles: [
      {
        position: "Software Engineering Intern",
        period: "Mar 2025 - Jun 2025",
        responsibilities: [
          "Reduced technical debt and implementation risk by speccing a blogging platform, defining core data models, entity relationships, and access control logic to align with business objectives. Designed and implemented a production-grade CMS backend supporting structured content workflows for admins, with role-based access control and a custom rich text editor integration."
        ],
        technologies: ["Bubble.io", "System Design", "Data Modeling", "Role-Based Access Control", "Full-Stack Development"],
      },
    ],
  },
  {
    company: "UniShack",
    companyUrl: "https://www.unishack.com/",
    location: "Los Angeles, CA",
    logoUrl: "images/unishack.png",
    roles: [
      {
        position: "User Experience Designer",
        period: "Jan 2023 - Feb 2023",
        responsibilities: [
          "Benchmarked major apartment platforms through competitive analysis to align the product with market standards. Defined core UI features and facilitated iterative design reviews with industry mentors throughout the prototyping process."
        ],
        technologies: ["Figma", "Competitive Analysis", "UI Design", "Prototyping"],
      },
      {
        position: "UI/UX Intern",
        period: "Oct 2022 - Dec 2022",
        responsibilities: [
          "Conducted user research specifically on UCLA students to distinguish their housing needs from those of general renters, surfacing key insights that directly shaped design decisions."
        ],
        technologies: ["Figma", "User Research", "Wireframing"],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading>Experience</SectionHeading>

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
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ffd90d] rounded-full border-4 border-black/50 shadow-md z-20 hidden md:block"></div>

                <div
                  className={`relative md:max-w-[90%] lg:max-w-[80%] w-full md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group bg-black/40 backdrop-blur-md rounded-xl shadow-md p-6 relative z-10 border border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-900/40 overflow-hidden">
                    {/* Company logo and name */}
                    <div className="flex items-start mb-6">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm flex items-center justify-center p-1">
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={exp.logoUrl || "/placeholder.svg"}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="pt-1">
                        <h3 className="text-xl font-bold text-white duration-300 group-hover:text-[#ffd90d]">{exp.company}</h3>
                        {exp.roles.length === 1 && (
                          <p className="text-white duration-300 group-hover:text-[#ffd90d]">{exp.roles[0].position}</p>
                        )}
                        {exp.roles.length > 1 && (
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <LucideMapPin className="w-3 h-3 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="relative">
                      {/* Left indicator line — only for multi-role */}
                      {exp.roles.length > 1 && (
                        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/20"></div>
                      )}

                      {exp.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className={`relative ${roleIndex > 0 ? "mt-6" : ""} ${exp.roles.length > 1 ? "pl-6" : ""}`}>
                          {/* Dot on the left indicator line */}
                          {exp.roles.length > 1 && (
                            <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-[#ffd90d] bg-black"></div>
                          )}

                          {/* Position title — only for multi-role */}
                          {exp.roles.length > 1 && (
                            <p className="text-white font-medium duration-300 group-hover:text-[#ffd90d]">{role.position}</p>
                          )}

                          <div className="flex items-center text-gray-300 text-sm mt-1 mb-2 space-x-4">
                            <div className="flex items-center">
                              <LucideCalendar className="w-3 h-3 mr-1" />
                              <span>{role.period}</span>
                            </div>
                            {exp.roles.length === 1 && (
                              <div className="flex items-center">
                                <LucideMapPin className="w-3 h-3 mr-1" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-gray-300 text-sm leading-relaxed">
                            {role.responsibilities.join(" ")}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {role.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium rounded-full border border-[#ffd90d]/40 text-[#ffd90d] bg-[#F68349]/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-[#ffd90d]"></div>
                    </div>
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