"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
      <h2 className="text-3xl font-display text-gold-400 mb-4">Что-то пошло не так</h2>
      <p className="text-indigo-200/70 mb-6">{error.message}</p>
      <button onClick={reset} className="px-6 py-3 bg-gold-400 text-black rounded-full">Попробовать снова</button>
    </div>
  )
}