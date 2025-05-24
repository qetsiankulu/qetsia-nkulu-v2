"use client"

import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { LucideDownload, LucideGithub, LucideLinkedin } from "lucide-react"
import RenderModel from "./RenderModel"
import ResponsiveQN from "./ResponsiveQN"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm Qetsia Nkulu
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-[#ffd90d] mb-8 h-16">
              <TypeAnimation
                sequence={["I'm a Computer Science Student", 2000, "I'm an iOS Developer", 2000, "I'm a Problem Solver", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="font-mono font-medium"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1pkNO4GpWO4KtGzVV1Bdo7wMJtHe3-3hm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#ffd90d] text-gray-900 font-medium py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:shadow-yellow-300/30 hover:shadow-xl"
              >
                <LucideDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/qetsiankulu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1b1b1b]/20 border border-[#ffd90d]/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
                  aria-label="GitHub"
                >
                  <LucideGithub className="w-5 h-5 text-[#ffd90d]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/qetsiankulu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1b1b1b]/20 border border-[#ffd90d]/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
                  aria-label="LinkedIn"
                >
                  <LucideLinkedin className="w-5 h-5 text-[#ffd90d]" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <RenderModel>
              <ResponsiveQN />
            </RenderModel>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
