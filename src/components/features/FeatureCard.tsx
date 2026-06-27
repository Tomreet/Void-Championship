"use client"

import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import type { Feature } from "@/lib/data/features"
import { kebabToPascalCase } from "@/lib/utils"

export default function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const iconName = kebabToPascalCase(feature.iconKey)
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-void-900/60 backdrop-blur-md border border-void-700/50 shadow-inner-glow hover:border-gold-400/30 hover:shadow-neon-purple transition-all duration-700 group"
    >
      <div className="mb-4">
        <IconComponent className="w-8 h-8 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-2xl font-display font-semibold text-gold-400/90 mb-2">{feature.title}</h3>
      <p className="text-indigo-200/70 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}