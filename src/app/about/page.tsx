import { Heart, Mail, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">Hi</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              I&apos;m [Your Name]
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              And this is my unemployment story. Not the sanitized version you see on social media, 
              but the real, messy, human experience of what it&apos;s actually like to be without work 
              while trying to figure out what comes next.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Story */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How I Got Here
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    [You can customize this with your real story] - I used to work in [your field] 
                    for [X] years. I thought I had it figured out. Then life happened, and suddenly 
                    I was scrolling job boards at 2 AM, questioning everything I thought I knew about myself.
                  </p>
                  <p>
                    What nobody tells you is how unemployment messes with your head. It&apos;s not just 
                    about finding another job - it&apos;s about maintaining your sanity, your self-worth, 
                    and your hope while everything feels uncertain.
                  </p>
                  <p>
                    I started documenting this because I felt so alone in these feelings. 
                    Turns out, a lot of us are going through similar stuff, but we&apos;re all 
                    suffering in silence. So here&apos;s my attempt to break that silence.
                  </p>
                </div>
              </section>

              {/* What You'll Find */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What You'll Find Here
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Raw Honesty</h3>
                    <p className="text-blue-800 text-sm">
                      The bad days, the good days, the frustrating days. 
                      No sugar-coating the experience.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-2">Practical Insights</h3>
                    <p className="text-green-800 text-sm">
                      What&apos;s actually working, what isn&apos;t, and lessons learned 
                      from the trenches.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold text-purple-900 mb-2">Mental Health</h3>
                    <p className="text-purple-800 text-sm">
                      Coping strategies, therapy insights, and maintaining 
                      sanity during uncertainty.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="font-semibold text-orange-900 mb-2">Community</h3>
                    <p className="text-orange-800 text-sm">
                      A space for others going through similar experiences 
                      to connect and support each other.
                    </p>
                  </div>
                </div>
              </section>

              {/* Current Situation */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Where I Am Now
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">120+</div>
                      <div className="text-sm text-gray-600">Days Unemployed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">150+</div>
                      <div className="text-sm text-gray-600">Applications Sent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">25</div>
                      <div className="text-sm text-gray-600">Interviews</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">0</div>
                      <div className="text-sm text-gray-600">Job Offers</div>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-4 text-sm">
                    Updated regularly as the journey continues...
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                    <span>Based in [Your City]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 text-gray-400 mr-3" />
                    <span>[Your Previous Role]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <GraduationCap className="h-4 w-4 text-gray-400 mr-3" />
                    <span>[Your Education/Background]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                    <span>Unemployed since [Date]</span>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-blue-800 text-sm mb-4">
                  Going through something similar? Want to share your story? 
                  Or just need someone who gets it?
                </p>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get in touch
                </a>
              </div>

              {/* Support */}
              <div className="bg-pink-50 rounded-lg p-6">
                <Heart className="h-6 w-6 text-pink-600 mb-3" />
                <h3 className="font-semibold text-pink-900 mb-2">
                  You&apos;re Not Alone
                </h3>
                <p className="text-pink-800 text-sm mb-4">
                  If you&apos;re reading this while unemployed, know that your feelings 
                  are valid and this situation is temporary.
                </p>
                <Link
                  href="/resources"
                  className="text-pink-600 hover:text-pink-700 font-medium text-sm"
                >
                  Browse resources →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}