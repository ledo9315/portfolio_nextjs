export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-color)] mx-auto mb-4"></div>
        <p className="text-[var(--light-grey)] font-medium">Laden...</p>
      </div>
    </div>
  )
}