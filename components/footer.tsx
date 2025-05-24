"use client"

import { motion } from "framer-motion"
import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ffd90d] to-yellow-500 text-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-800 mt-1">iOS Engineer & Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LucideLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-300"
              aria-label="GitHub"
            >
              <LucideGithub className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="hover:text-gray-800 transition-colors duration-300"
              aria-label="Email"
            >
              <LucideMail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-yellow-400 mt-8 pt-8 text-center text-gray-800"
        >
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
