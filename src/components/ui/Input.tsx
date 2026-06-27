import { forwardRef, InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 bg-void-800/80 border border-void-700 rounded-lg text-white placeholder:text-indigo-400/50 focus:border-gold-400/60 focus:outline-none focus:shadow-glow transition",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"
export default Input