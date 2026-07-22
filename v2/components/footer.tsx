"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-white bg-black/40 backdrop-blur-md rounded-xl border border-white/10 shadow-lg py-5 px-6"
        >
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Qetsia Nkulu. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
