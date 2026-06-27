"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void-950 gap-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-gold-400"
      >
        <Gamepad2 className="w-16 h-16" />
      </motion.div>

      <div className="w-48 h-1 bg-void-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-gold-400 to-gold-500 shadow-glow"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}