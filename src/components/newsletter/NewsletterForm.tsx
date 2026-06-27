"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { useState } from "react"
import { newsletterSchema, type NewsletterFormData } from "@/lib/validators/newsletter"

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle")
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Email:", data.email)
    setStatus("success")
    reset()
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
    >
      <div className="flex-1 relative">
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="w-full px-5 py-4 bg-void-900/80 border border-void-700 rounded-full text-white placeholder:text-indigo-400/50 focus:outline-none focus:border-gold-400/60 focus:shadow-glow transition"
          disabled={isSubmitting || status === "success"}
        />
        {errors.email && (
          <p className="absolute -bottom-6 left-5 text-red-400 text-xs">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || status === "success"}
        className="px-7 py-4 bg-gold-400/90 text-black font-bold rounded-full shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === "success" ? (
          <CheckCircle className="w-5 h-5" />
        ) : isSubmitting ? (
          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Подписаться
          </>
        )}
      </button>
    </motion.form>
  )
}