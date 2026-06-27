"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Button from "../ui/Button"
import Preloader from "../ui/Preloader"
import { useAuth } from "@/contexts/AuthContext"

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false })

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const { user } = useAuth()

  const handleReady = () => {
    setIsReady(true)
    setTimeout(() => setIsLoading(false), 800)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ThreeScene onReady={handleReady} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-linear-to-r from-gold-400 via-gold-500 to-neon-cyan/30 mb-6">
          VOID CHAMPIONSHIP
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200/80 mb-2">
          Abyssal Arena • 24–26 ноября
        </p>
        <p className="text-3xl font-semibold text-gold-400/90 mb-8">
          Призовой фонд: $50,000
        </p>

        {user ? (
          <div className="space-y-4">
            <Link href="/#schedule">
              <Button variant="gold" className="text-lg px-10 py-4">
                На арену
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/register">
            <Button variant="gold" className="text-lg px-10 py-4">
              Зарегистрироваться
            </Button>
          </Link>
        )}
      </motion.div>

      {isReady && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-[30%] pointer-events-auto z-10" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-void-950 via-void-950/80 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-full h-48 backdrop-blur-[2px] pointer-events-none z-10" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400/60 pointer-events-none z-30"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </>
      )}
    </section>
  )
}