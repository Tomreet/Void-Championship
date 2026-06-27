import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline"
}

export default function Button({ variant = "gold", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-500",
        "border border-transparent",
        variant === "gold" && "bg-gold-400/90 text-black shadow-glow hover:shadow-glow-lg hover:bg-gold-400",
        variant === "outline" && "border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}