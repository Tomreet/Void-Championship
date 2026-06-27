"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, Gamepad2, User, LogOut } from "lucide-react"
import Button from "@/components/ui/Button"

const links = [
  { label: "О турнире", href: "#about" },
  { label: "Команды", href: "#teams" },
  { label: "Призы", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  user?: { nickname: string } | null
  signOut?: () => Promise<void>
}

export default function MobileMenu({ isOpen, onClose, user, signOut }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 z-50 h-full w-72 max-w-[85vw] bg-void-950/90 backdrop-blur-xl border-r border-void-700/50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-void-700/50">
              <Link href="/" onClick={onClose} className="flex items-center gap-2 text-gold-400">
                <Gamepad2 className="w-6 h-6" />
                <span className="font-display text-lg font-bold tracking-wider">VOID</span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-gold-400 hover:bg-gold-400/10 rounded-full transition"
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {user && (
              <div className="px-6 py-4 border-b border-void-700/50">
                <p className="text-sm text-indigo-300/70">Привет,</p>
                <p className="text-gold-400 font-display font-semibold text-lg truncate">
                  {user.nickname}
                </p>
              </div>
            )}

            <nav className="flex flex-col gap-6 px-6 py-10 flex-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-xl font-display text-indigo-200 hover:text-gold-400 transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-8">
              {user ? (
                <Button
                  variant="outline"
                  className="w-full justify-center border-red-400/30 text-red-400 hover:bg-red-400/10"
                  onClick={() => { signOut?.(); onClose() }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Выйти
                </Button>
              ) : (
                <Link href="/login" onClick={onClose} className="block">
                  <Button variant="gold" className="w-full justify-center">
                    Войти
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}