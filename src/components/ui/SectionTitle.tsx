export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-gold-400/90 mb-12 tracking-tight">
      {children}
    </h2>
  )
}