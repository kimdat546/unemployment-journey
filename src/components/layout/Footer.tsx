import { Heart, Mail, Github, Linkedin, Leaf, Sun } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-t border-green-200/30 relative overflow-hidden">
      {/* Gentle healing background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-7 w-7 text-green-600 gentle-float" />
                <Heart className="h-4 w-4 text-green-500 absolute -bottom-1 -right-1 opacity-70" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                Healing Journey
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              My personal sanctuary for sharing the authentic experience of healing and growth.
              The daily challenges, breakthrough moments, and everything that makes us human.
            </p>
            <div className="p-3 bg-white/50 rounded-xl border border-green-200/30">
              <p className="text-xs text-green-700 font-medium">
                🌱 Every story shared is a step toward collective healing
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sun className="h-5 w-5 text-yellow-500 soft-pulse" />
              <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider">
                Healing Paths
              </h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/story"
                  className="inline-flex items-center text-sm text-gray-700 hover:text-green-700 transition-colors bg-white/30 px-3 py-2 rounded-lg hover:bg-white/50 border border-transparent hover:border-green-200/30"
                >
                  <span className="text-base mr-2">📖</span>
                  Healing Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm text-gray-700 hover:text-green-700 transition-colors bg-white/30 px-3 py-2 rounded-lg hover:bg-white/50 border border-transparent hover:border-green-200/30"
                >
                  <span className="text-base mr-2">🌱</span>
                  About My Journey
                </Link>
              </li>
            </ul>
            <div className="p-3 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-xl border border-green-200/30">
              <p className="text-xs text-green-700">
                💚 Navigate your own path of healing and growth
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-500 breathe-animation" />
              <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider">
                Connect & Heal Together
              </h3>
            </div>
            <div className="flex space-x-3">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 border border-green-200/30 rounded-xl text-green-600 hover:text-green-700 transition-all shadow-sm hover:shadow-md"
                title="Email me"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 border border-green-200/30 rounded-xl text-green-600 hover:text-green-700 transition-all shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 border border-green-200/30 rounded-xl text-green-600 hover:text-green-700 transition-all shadow-sm hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/30">
              <p className="text-xs text-pink-700 leading-relaxed">
                🤗 Reach out if you&apos;re navigating a similar path.
                Sometimes knowing someone else understands makes all the difference in our healing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-200/30">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                <Heart className="h-3 w-3 text-green-600" />
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Made with love, hope, and authentic healing
              </p>
              <div className="w-6 h-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                <Leaf className="h-3 w-3 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Healing Journey. Every story matters, every healing counts.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full border border-green-200/30">
              <span className="text-xs text-green-700 font-medium">
                🌱 You are not alone in your healing journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
