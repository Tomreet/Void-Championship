"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import type { Team } from "@/lib/data/teams"
import { kebabToPascalCase } from "@/lib/utils"

export default function TeamCard({ team, index }: { team: Team; index: number }) {
  const iconName = kebabToPascalCase(team.iconKey)
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center p-6 rounded-full aspect-square bg-void-800/60 backdrop-blur-sm border border-void-700/40 hover:border-gold-400/50 hover:shadow-[0_0_60px_rgba(185,146,63,0.2)] transition-all duration-700 cursor-default"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-void-900/80 border border-void-700/50 flex items-center justify-center mb-3 group-hover:border-gold-400/40 group-hover:shadow-glow transition-all">
        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gold-400 transform group-hover:scale-110 transition-transform" />
      </div>

      <h3 className="text-base md:text-lg font-display font-semibold text-gold-400/90 text-center mb-1">
        {team.name}
      </h3>
      <p className="text-xs text-indigo-300/70 mb-3">{team.region}</p>

      <div className="text-xs text-indigo-200/60 text-center leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        {team.players.join(" · ")}
      </div>
    </motion.div>
  )
}