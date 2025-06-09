export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 w-full bg-[#f5f5f5] dark:bg-[#232323]">
      <div className="max-w-4xl mx-auto flex justify-between items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <a href="/contact" className="hover:text-gray-800 dark:hover:text-gray-200 hover:underline transition-colors">
            Let's collaborate →
          </a>
        </div>
        <div className="space-x-1">
          <span className="hidden sm:inline-block">Built by Chandan Malakar |</span>
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  )
}
