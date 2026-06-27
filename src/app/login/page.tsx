"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { LogIn } from "lucide-react"
import Link from "next/link"
import { signIn } from "@/lib/auth"
import { useAuth } from "@/contexts/AuthContext"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(1, "Введите пароль"),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const { user, setUser } = useAuth()
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setStatus("loading")
    setErrorMessage("")
    const { user, error } = await signIn(data.email, data.password)
    if (error) {
      setStatus("error")
      setErrorMessage(error)
    } else if (user) {
      setUser(user)
      router.push("/")
    }
  }

  if (user) {
    router.push("/")
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-void-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-void-900/80 backdrop-blur-md border border-void-700/50 rounded-2xl p-8 shadow-neon-purple"
      >
        <h1 className="text-2xl font-display font-bold text-gold-400 mb-6 flex items-center gap-2">
          <LogIn className="w-6 h-6" /> Вход в бездну
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Email</label>
            <Input type="email" {...register("email")} placeholder="master@void.com" />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Пароль</label>
            <Input type="password" {...register("password")} placeholder="••••••••" />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
              {errorMessage}
            </motion.p>
          )}

          <Button type="submit" variant="gold" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Вход..." : "Войти"}
          </Button>
        </form>

        <p className="mt-6 text-center text-indigo-400/60 text-sm">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-gold-400 hover:underline">Зарегистрироваться</Link>
        </p>
      </motion.div>
    </div>
  )
}