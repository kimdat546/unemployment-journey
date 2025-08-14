import { Heart, Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                Unemployment Journey
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Sharing the real experience of unemployment - the struggles, the growth, 
              and the hope. You&apos;re not alone in this journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  My Journey
                </Link>
              </li>
              <li>
                <a href="/resources" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/timeline" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Feel free to reach out if you&apos;re going through something similar.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Unemployment Journey. Made with{' '}
            <Heart className="inline h-3 w-3 text-red-500" /> and hope.
          </p>
        </div>
      </div>
    </footer>
  )
}