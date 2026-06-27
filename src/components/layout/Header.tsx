"use client"

import { useState } from "react"
import Link from "next/link"
import { Gamepad2, Menu, User, LogOut } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { useAuth } from "@/contexts/AuthContext"
import Button from "@/components/ui/Button"

const navLinks = [
  { label: "О турнире", href: "#about" },
  { label: "Команды", href: "#teams" },
  { label: "Призы", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-void-950/70 backdrop-blur-lg border-b border-void-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-gold-400 font-display text-xl md:text-2xl font-bold tracking-widest shrink-0">
          <Gamepad2 className="w-6 h-6 md:w-7 md:h-7" />
          <span className="hidden sm:inline">VOID</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-indigo-200/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold-400 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-indigo-200 hover:text-gold-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-void-700 border border-gold-400/50 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-sm hidden sm:inline max-w-20 truncate">
                  {user.nickname}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-void-900 border border-void-700 rounded-xl shadow-glow overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-void-700/50 text-sm text-indigo-200 truncate">
                    {user.nickname}
                  </div>
                  <button
                    onClick={() => { signOut(); setDropdownOpen(false) }}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-indigo-200 hover:bg-void-800 hover:text-red-400 transition"
                  >
                    <LogOut className="w-4 h-4" />
                    Выйти
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="hidden md:inline-block">
              <Button variant="gold">Войти</Button>
            </Link>
          )}

          <button
            className="md:hidden text-gold-400 p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        user={user}
        signOut={signOut}
      />
    </header>
  )
}