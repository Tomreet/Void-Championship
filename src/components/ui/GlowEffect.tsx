export default function GlowEffect({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-gold-400 opacity-20 blur-xl -z-10" />
    {children}
  </div>
}