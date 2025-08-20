'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Menu, X, Leaf } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', icon: '🏡' },
  { name: 'Healing Stories', href: '/story', icon: '📖' },
  { name: 'About My Journey', href: '/about', icon: '🌱' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-green-50/80 to-blue-50/80 backdrop-blur-sm border-b border-green-200/30 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-600 gentle-float" />
                <Heart className="h-4 w-4 text-green-500 absolute -bottom-1 -right-1 opacity-70" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600 transition-all">
                Healing Journey
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-2 border-green-300/50 shadow-sm'
                    : 'text-gray-600 hover:text-green-700 hover:bg-white/50 border-2 border-transparent hover:border-green-200/30'
                }`}
              >
                <span className="text-base mr-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-green-600 hover:text-green-700 hover:bg-white/50 border-2 border-transparent hover:border-green-200/30 transition-all"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-2 bg-gradient-to-r from-green-50/90 to-blue-50/90 backdrop-blur-sm border-t border-green-200/30">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border border-green-300/50 shadow-sm'
                    : 'text-gray-600 hover:text-green-700 hover:bg-white/50 border border-transparent hover:border-green-200/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg mr-3">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-green-200/30">
              <p className="text-center text-xs text-green-700 font-medium">
                🌱 Healing happens one story at a time
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
