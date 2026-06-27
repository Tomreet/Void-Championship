"use client"

import { motion } from "framer-motion"
import type { Match } from "@/lib/data/matches"
import { useState } from "react"

export default function MatchRow({ match, index }: { match: Match; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-void-900/60 backdrop-blur-sm border border-void-700/50 rounded-xl overflow-hidden hover:border-gold-400/30 transition-colors"
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-white font-display font-semibold">{match.team1}</span>
          <span className="text-gold-400/70 text-sm">VS</span>
          <span className="text-white font-display font-semibold">{match.team2}</span>
          {match.live && (
            <span className="px-2 py-0.5 bg-red-600/80 text-white text-xs rounded-full animate-pulse">LIVE</span>
          )}
        </div>
        <div className="text-indigo-300/70 text-sm">{match.time}</div>
      </div>
      {expanded && (
        <div className="px-4 pb-4 text-sm text-indigo-300/70 border-t border-void-700/50 pt-3">
          {match.bracket && <p>Сетка: {match.bracket}</p>}
          <p>Формат: Best of 3</p>
        </div>
      )}
    </motion.div>
  )
}