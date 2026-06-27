"use client"

import { motion } from "framer-motion"
import type { Prize } from "@/lib/data/prizes"

export default function PrizeCard({ prize, index, isTop }: { prize: Prize; index: number; isTop?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`p-8 rounded-2xl text-center border backdrop-blur-sm ${
        isTop
          ? "bg-linear-to-b from-void-900 to-void-800 border-gold-400/60 shadow-glow"
          : "bg-void-900/60 border-void-700/50 hover:border-gold-400/40"
      }`}
    >
      <div className="text-sm font-bold text-gold-400 mb-2 tracking-widest uppercase">{prize.place}</div>
      <div className="text-4xl font-display font-bold text-white mb-4">{prize.amount}</div>
      <p className="text-indigo-200/70 text-sm">{prize.description}</p>
    </motion.div>
  )
}