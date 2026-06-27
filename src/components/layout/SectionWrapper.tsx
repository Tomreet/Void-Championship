"use client"

import { motion } from "framer-motion"

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
}

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-6 relative z-10"
    >
      {children}
    </motion.section>
  )
}