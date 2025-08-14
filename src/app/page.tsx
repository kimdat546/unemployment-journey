import Link from 'next/link'
import { ArrowRight, Calendar, BookOpen, Users, TrendingUp } from 'lucide-react'
import EmotionalSupport from '@/components/ui/EmotionalSupport'
import { getBlogPosts } from '@/lib/contentful'
import BlogCard from '@/components/ui/BlogCard'

export default async function Home() {
  const blogPosts = await getBlogPosts()
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="bg-white">
      {/* Personal Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-blue-600">✨</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I&apos;m sharing my{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  unemployment journey
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                This is my personal space to share what I&apos;m really going through - 
                the daily struggles, unexpected moments of hope, and everything in between. 
                <span className="block mt-2 text-blue-700 font-medium">No filters, just honest feelings.</span>
              </p>
            </div>
            
            {/* Quick Personal Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-white/20">
              <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">My Journey So Far</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-gray-900 mb-1">Day 120</div>
                  <div className="text-sm text-gray-600">of this journey</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">hopeful days</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-1">25</div>
                  <div className="text-sm text-gray-600">challenging days</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">∞</div>
                  <div className="text-sm text-gray-600">lessons learned</div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read My Daily Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/90 text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                About My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              A little about me and this journey
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                I never thought I&apos;d be here - unemployed, searching for meaning, 
                and trying to figure out what comes next. But here I am, and I&apos;ve 
                decided to document this experience because I know I&apos;m not alone.
              </p>
              <p>
                Some days are harder than others. Some days I feel hopeful and motivated. 
                Most days are somewhere in between. This is my space to share those real, 
                unfiltered moments - the kind you don&apos;t see in LinkedIn posts.
              </p>
              <p className="font-medium text-blue-700">
                If you&apos;re going through something similar, know that your feelings are valid 
                and you&apos;re not alone in this. We&apos;ll figure it out together.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read my full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Recent Stories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Recent Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here&apos;s what I&apos;ve been feeling and experiencing lately. 
              The real, unfiltered moments of this journey.
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
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read All My Stories
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

      {/* Personal Connection Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            You&apos;re Not Alone in This
          </h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed">
            If my story resonates with you, or if you&apos;re going through your own unemployment journey, 
            I&apos;d love to connect. Sometimes just knowing someone else understands makes all the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read My Full Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Follow My Journey
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            This is temporary. We&apos;ll figure it out together. 💙
          </p>
        </div>
      </section>
    </div>
  )
}