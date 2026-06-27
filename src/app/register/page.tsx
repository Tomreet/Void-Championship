"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { UserPlus, Eye, EyeOff, Shield } from "lucide-react"
import Link from "next/link"
import { signUp } from "@/lib/auth"
import { useAuth } from "@/contexts/AuthContext"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

const registerSchema = z
  .object({
    nickname: z.string().min(2, "Минимум 2 символа"),
    email: z.string().email("Некорректный email"),
    password: z
      .string()
      .min(6, "Минимум 6 символов")
      .regex(/[A-Z]/, "Должна быть хотя бы одна заглавная буква")
      .regex(/[0-9]/, "Должна быть хотя бы одна цифра"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  })

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  const { user, setUser } = useAuth()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const passwordValue = watch("password", "")
  const getPasswordStrength = (pwd: string) => {
    let score = 0
    if (pwd.length >= 6) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++
    return score
  }
  const strength = getPasswordStrength(passwordValue)

  const onSubmit = async (data: RegisterForm) => {
    setStatus("loading")
    setErrorMessage("")
    const { user, error } = await signUp(data.nickname, data.email, data.password)
    if (error) {
      setStatus("error")
      setErrorMessage(error)
    } else if (user) {
      setUser(user)
      setStatus("success")
      setTimeout(() => router.push("/"), 2000)
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
          <UserPlus className="w-6 h-6" /> Регистрация
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Никнейм</label>
            <Input {...register("nickname")} placeholder="void_master" />
            {errors.nickname && <p className="text-red-400 text-xs mt-1">{errors.nickname.message}</p>}
          </div>

          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Email</label>
            <Input type="email" {...register("email")} placeholder="master@void.com" />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Пароль</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-gold-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
            {passwordValue && (
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full ${
                      level <= strength ? "bg-gold-400" : "bg-void-700"
                    }`}
                  />
                ))}
                <span className="text-xs text-indigo-300/70 ml-2">
                  {strength <= 1 ? "Слабый" : strength <= 2 ? "Средний" : "Надёжный"}
                </span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm text-indigo-200/80 mb-1">Подтвердите пароль</label>
            <Input type="password" {...register("confirmPassword")} placeholder="••••••••" />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
              {errorMessage}
            </motion.p>
          )}

          <Button type="submit" variant="gold" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Регистрация..." : "Зарегистрироваться"}
          </Button>
        </form>

        {status === "success" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center mt-4">
            Успешная регистрация! Перенаправляем...
          </motion.p>
        )}

        <p className="mt-6 text-center text-indigo-400/60 text-sm">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="text-gold-400 hover:underline">Войти</Link>
        </p>
      </motion.div>
    </div>
  )
}