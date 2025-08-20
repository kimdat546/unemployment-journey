import { Heart, Mail, Calendar, MapPin, Briefcase, GraduationCap, Leaf, Sun, Smile } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24 overflow-hidden">
        {/* Healing background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg breathe-animation">
              <span className="text-3xl">🌱</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Hi, I&apos;m on a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                healing journey
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              This is my real story of healing and growth through unemployment. Not the sanitized version you see on social media,
              but the authentic, messy, beautiful human experience of finding hope while everything feels uncertain.
            </p>
            <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-green-200/30 max-w-2xl mx-auto">
              <p className="text-green-700 font-medium">
                🤗 If you&apos;re here, you&apos;re probably going through something similar. You&apos;re not alone, and your healing matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Story */}
              <section className="healing-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 opacity-15">
                  <Leaf className="w-full h-full text-green-400 gentle-float" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
                  <Smile className="w-8 h-8 mr-3 text-green-600" />
                  How My Healing Journey Began
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
                  <p className="text-lg">
                    I used to work in [your field] for [X] years. I thought I had it all figured out.
                    Then life happened, and suddenly I was scrolling job boards at 2 AM, questioning
                    everything I thought I knew about myself and my worth.
                  </p>
                  <p>
                    What nobody tells you is how unemployment affects your entire being - not just your bank account.
                    It challenges your self-worth, your daily routine, your sense of purpose, and sometimes even
                    your faith in the future. But I&apos;ve learned that this challenge can also become a gateway to profound healing.
                  </p>
                  <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 italic">
                    I started documenting this journey because I felt so isolated in these feelings.
                    Turns out, millions of us are navigating similar paths, but we&apos;re all healing in silence.
                    This is my attempt to break that silence and create space for authentic healing.
                  </p>
                </div>
              </section>

              {/* What You'll Find */}
              <section className="healing-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute bottom-4 left-4 w-16 h-16 opacity-10">
                  <Sun className="w-full h-full text-yellow-400 soft-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  What You&apos;ll Find in My Healing Space
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200/30">
                    <h3 className="font-semibold text-green-800 mb-3 text-lg">🌿 Authentic Healing</h3>
                    <p className="text-green-700 text-sm leading-relaxed">
                      The difficult days, breakthrough moments, and everything in between.
                      Real healing isn&apos;t always pretty, and I share it all.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/30">
                    <h3 className="font-semibold text-blue-800 mb-3 text-lg">💡 Growth Insights</h3>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Practical tools, coping strategies, and wisdom gained
                      through this transformative journey.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200/30">
                    <h3 className="font-semibold text-purple-800 mb-3 text-lg">🧠 Mental Wellness</h3>
                    <p className="text-purple-700 text-sm leading-relaxed">
                      Self-care practices, therapy insights, and maintaining
                      emotional balance during life&apos;s storms.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200/30">
                    <h3 className="font-semibold text-yellow-800 mb-3 text-lg">🤝 Healing Community</h3>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      A safe space for others on similar journeys
                      to connect, share, and heal together.
                    </p>
                  </div>
                </div>
              </section>

              {/* Current Healing Progress */}
              <section className="healing-card rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                  My Healing Journey Progress
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200/30">
                    <div className="text-3xl font-bold text-green-700 mb-2">120+</div>
                    <div className="text-sm text-gray-600">Days of Growth</div>
                    <div className="text-xs text-green-600 mt-1">🌱 Still growing</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200/30">
                    <div className="text-3xl font-bold text-blue-700 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Steps Taken</div>
                    <div className="text-xs text-blue-600 mt-1">👣 Moving forward</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200/30">
                    <div className="text-3xl font-bold text-purple-700 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Conversations</div>
                    <div className="text-xs text-purple-600 mt-1">💬 Connecting</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200/30">
                    <div className="text-3xl font-bold text-yellow-700 mb-2">∞</div>
                    <div className="text-sm text-gray-600">Healing Moments</div>
                    <div className="text-xs text-yellow-600 mt-1">✨ Always discovering</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-green-200/30 text-center">
                  <p className="text-green-700 font-medium text-sm">
                    🌿 Progress isn&apos;t always linear, but every day is part of my healing story
                  </p>
                </div>
              </section>
            </div>

            {/* Healing Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="healing-card rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-8 h-8 opacity-15">
                  <Leaf className="w-full h-full text-green-400 gentle-float" />
                </div>
                <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">🌱</span>
                  About Me
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Based in [Your City]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">[Your Previous Role]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <GraduationCap className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">[Your Education/Background]</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Healing since [Date]</span>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200/30">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <span className="text-lg mr-2">🤝</span>
                  Let&apos;s Heal Together
                </h3>
                <p className="text-blue-700 text-sm mb-4 leading-relaxed">
                  Going through something similar? Want to share your healing story?
                  Or just need someone who truly understands?
                </p>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm bg-white/50 px-3 py-2 rounded-lg hover:bg-white/70 transition-all"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reach out
                </a>
              </div>

              {/* Support */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200/30 relative overflow-hidden">
                <div className="absolute bottom-2 right-2 w-10 h-10 opacity-15">
                  <Heart className="w-full h-full text-green-400 soft-pulse" />
                </div>
                <Heart className="h-6 w-6 text-green-600 mb-3" />
                <h3 className="font-semibold text-green-800 mb-3">
                  You&apos;re Not Alone in This
                </h3>
                <p className="text-green-700 text-sm mb-4 leading-relaxed">
                  If you&apos;re reading this while navigating your own challenges, know that your feelings
                  are completely valid and your healing journey matters.
                </p>
                <Link
                  href="/story"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm bg-white/50 px-3 py-2 rounded-lg hover:bg-white/70 transition-all"
                >
                  Read healing stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
