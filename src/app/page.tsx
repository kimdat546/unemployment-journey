import Link from 'next/link'
import { ArrowRight, Calendar, BookOpen, Users, TrendingUp } from 'lucide-react'
import EmotionalSupport from '@/components/ui/EmotionalSupport'
import HealingResources from '@/components/ui/HealingResources'
import { getBlogPosts } from '@/lib/contentful'
import BlogCard from '@/components/ui/BlogCard'

export default async function Home() {
  const blogPosts = await getBlogPosts()
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Personal Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24 overflow-hidden">
        {/* Subtle healing background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-28 h-28 bg-gradient-to-br from-green-100 to-blue-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg breathe-animation">
                <span className="text-3xl font-bold text-green-600">🌱</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Hi, I&apos;m sharing my{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  healing journey
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                This is my safe space to share what I&apos;m really going through - 
                the daily struggles, unexpected moments of hope, and everything in between. 
                <span className="block mt-3 text-green-700 font-medium">No filters, just honest healing. 💚</span>
              </p>
            </div>
            
            {/* Healing Journey Stats */}
            <div className="healing-card rounded-2xl shadow-lg p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 opacity-20">
                <div className="w-full h-full bg-green-300 rounded-full soft-pulse"></div>
              </div>
              <h2 className="text-center text-lg font-semibold text-green-800 mb-6">My Healing Journey So Far</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200/30">
                  <div className="text-3xl font-bold text-green-700 mb-1">Day 120</div>
                  <div className="text-sm text-gray-600">of healing</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200/30">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">hopeful moments</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200/30">
                  <div className="text-3xl font-bold text-purple-600 mb-1">25</div>
                  <div className="text-sm text-gray-600">growth days</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200/30">
                  <div className="text-3xl font-bold text-yellow-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">strength gained</div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read My Healing Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/90 text-green-700 font-semibold rounded-xl border-2 border-green-300 hover:bg-green-50 hover:border-green-400 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                About My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="healing-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 left-4 w-12 h-12 opacity-15">
              <div className="w-full h-full bg-green-300 rounded-full gentle-float"></div>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              A little about me and this healing journey
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                I never thought I&apos;d be here - in this space of uncertainty, searching for meaning, 
                and trying to figure out what comes next. But here I am, and I&apos;ve 
                decided to document this healing experience because I know I&apos;m not alone.
              </p>
              <p>
                Some days are harder than others. Some days I feel hopeful and motivated. 
                Most days are somewhere in between. This is my safe space to share those real, 
                unfiltered moments of healing - the kind you don&apos;t see in LinkedIn posts.
              </p>
              <p className="font-medium text-green-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                If you&apos;re going through something similar, know that your feelings are valid 
                and you&apos;re not alone in this healing process. We&apos;ll grow stronger together. 🌱
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/about"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                Read my full healing story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Recent Stories */}
      <section className="py-16 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📖</span>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              My Recent Healing Stories
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Here&apos;s what I&apos;ve been feeling and experiencing lately. 
              The real, unfiltered moments of this healing journey.
            </p>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <BlogCard key={post.sys.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              {/* Sample Story Previews */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-900 mb-2">Coming Soon: My Daily Stories</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    I&apos;m setting up my writing space to start sharing daily moments - the good days, 
                    the tough days, and everything in between.
                  </p>
                  <p className="text-xs text-gray-500">
                    Stories like: &quot;Day 15: Why I cried at the grocery store&quot; or 
                    &quot;Small win: Finally updated my resume&quot;
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Daily check-ins about how I&apos;m feeling</li>
                    <li>• Job application wins and rejections</li>
                    <li>• Random thoughts at 2 AM</li>
                    <li>• Small victories worth celebrating</li>
                    <li>• Honest moments about mental health</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more about my journey →
                </Link>
              </div>
            </div>
          )}

          {recentPosts.length > 0 && (
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all"
              >
                Read All My Healing Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Emotional Support Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmotionalSupport />
        </div>
      </section>

      {/* Healing Resources Section */}
      <HealingResources />

      {/* Personal Connection Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🤗</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              You&apos;re Not Alone in This Healing
            </h2>
            <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              If my story resonates with you, or if you&apos;re going through your own healing journey, 
              I&apos;d love to connect. Sometimes just knowing someone else understands makes all the difference in our healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-white/90 text-green-700 font-semibold rounded-lg hover:bg-white transition-colors shadow-lg"
              >
                Read My Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Follow My Journey
              </Link>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white/95 text-sm font-medium">
                🌱 This is temporary. You are healing. We&apos;ll grow stronger together. 💚
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}