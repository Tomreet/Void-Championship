import Link from "next/link"
import { Gamepad2 } from "lucide-react"

const socials = ["Twitch", "YouTube", "Discord", "Telegram"]
const footerLinks = [
  { label: "О турнире", href: "#about" },
  { label: "Команды", href: "#teams" },
  { label: "Призы", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
]

export default function Footer() {
  return (
    <footer className="bg-void-950 border-t border-void-800/50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 text-gold-400 font-display text-xl font-bold mb-4">
            <Gamepad2 className="w-6 h-6" /> VOID
          </Link>
          <p className="text-indigo-300/70 text-sm">
            Крупнейший киберспортивный турнир в космической бездне.
          </p>
        </div>
        <div>
          <h4 className="text-gold-400 font-semibold mb-4 uppercase text-sm">Навигация</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-indigo-300/70 hover:text-gold-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold-400 font-semibold mb-4 uppercase text-sm">Соцсети</h4>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="text-indigo-300/70 hover:text-gold-400 transition-colors text-sm">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-void-800/50 text-center text-indigo-400/50 text-xs">
        © {new Date().getFullYear()} Void Championship. Демо-проект.
      </div>
    </footer>
  )
}