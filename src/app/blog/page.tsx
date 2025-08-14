import Link from 'next/link'
import { Search, Filter, Heart, BookOpen } from 'lucide-react'
import { getBlogPosts } from '@/lib/contentful'
import BlogCard from '@/components/ui/BlogCard'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24 overflow-hidden">
        {/* Healing background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg breathe-animation">
              <BookOpen className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              My{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Healing Stories
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              This is where I share what&apos;s really happening in my healing journey - the messy, 
              beautiful, challenging, hopeful reality of growing through difficult times. 
              No filters, just authentic healing.
            </p>
            <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-green-200/30 max-w-2xl mx-auto">
              <p className="text-green-700 font-medium flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2" />
                Each story is a step forward in my healing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter (Future Enhancement) */}
      <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 border-b border-green-200/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="healing-card rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                <input
                  type="text"
                  placeholder="Search healing stories..."
                  className="w-full pl-10 pr-4 py-3 border border-green-300/50 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
                  disabled
                />
              </div>
              <button
                disabled
                className="inline-flex items-center px-6 py-3 border border-green-300 rounded-xl text-sm font-medium text-green-700 bg-white/50 hover:bg-white/70 disabled:opacity-50 backdrop-blur-sm transition-all"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter Stories
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-green-700 font-medium">
                🔍 Search and filter functionality coming soon to help you find the healing stories that resonate with you!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.sys.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg gentle-float">
                <span className="text-4xl">🌿</span>
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Preparing My Healing Story Space
              </h2>
              <div className="healing-card rounded-3xl p-10 mb-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                  <Heart className="w-full h-full text-green-400 soft-pulse" />
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  I&apos;m thoughtfully setting up this space to start sharing my authentic healing journey. 
                  Soon, you&apos;ll find my real, unfiltered experiences about what it&apos;s 
                  like to heal and grow through challenging times - the kind of honest stories I wish someone had shared with me.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200/30">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                      <span className="text-lg mr-2">🌱</span>
                      The Raw Healing
                    </h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• &quot;Day 23: I cried, and that&apos;s okay&quot;</li>
                      <li>• &quot;Small healing: I smiled at myself today&quot;</li>
                      <li>• &quot;Rejection #47: How I&apos;m growing stronger&quot;</li>
                      <li>• &quot;3 AM reflections on my worth&quot;</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/30">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                      <span className="text-lg mr-2">✨</span>
                      The Beautiful Growth
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• Learning to embrace self-compassion</li>
                      <li>• Discovering hidden resilience within me</li>
                      <li>• Creating healing routines that nurture</li>
                      <li>• Finding magic in ordinary moments</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200/30 mb-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you&apos;re navigating your own healing journey, bookmark this space. 
                  We&apos;ll grow stronger together, one story at a time.
                </p>
                
                <Link
                  href="/about"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all"
                >
                  Learn more about my healing journey so far →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}