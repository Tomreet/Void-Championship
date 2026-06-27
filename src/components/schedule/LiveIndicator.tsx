export default function LiveIndicator() {
  return (
    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-600/20 border border-red-500/50 text-red-400 text-xs rounded-full animate-pulse">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
      LIVE
    </span>
  )
}