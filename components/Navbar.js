import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Tools', href: '/tools' }
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-60 px-4 py-12 space-y-6 overflow-y-auto bg-[#eaeaea] dark:bg-[#1f1f1f] z-10">
      <div className="space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center cursor-pointer rounded-md text-sm px-3 py-2 gap-3 justify-start dark:hover:text-white hover:text-black hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors ${
              router.pathname === item.href
                ? 'dark:bg-[#3a3a3a] dark:text-white bg-[#d6d6d6] text-black'
                : ''
            }`}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
