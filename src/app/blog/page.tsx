import { Search, Filter } from 'lucide-react'
import { getBlogPosts } from '@/lib/contentful'
import BlogCard from '@/components/ui/BlogCard'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-lg font-bold text-blue-600">📖</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My Daily Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This is where I share what&apos;s really happening - the messy, 
              beautiful, frustrating, hopeful reality of being unemployed. 
              No LinkedIn polish, just truth.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter (Future Enhancement) */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled
              />
            </div>
            <button
              disabled
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Search and filter functionality coming soon!
          </p>
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
            <div className="max-w-3xl mx-auto text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Getting Ready to Share My Story
              </h2>
              <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I&apos;m setting up my writing space to start documenting this journey. 
                  Soon, you&apos;ll find my real, unfiltered thoughts about what it&apos;s 
                  like to be unemployed - the kind of stuff I wish someone had shared with me.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Real Stuff</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• &quot;Day 23: I cried in my car today&quot;</li>
                      <li>• &quot;Small win: Got dressed before noon&quot;</li>
                      <li>• &quot;Rejection email #47 - how I&apos;m dealing&quot;</li>
                      <li>• &quot;2 AM thoughts about my worth&quot;</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Growth</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Learning to be kind to myself</li>
                      <li>• Discovering unexpected strengths</li>
                      <li>• Building new routines that help</li>
                      <li>• Finding hope in small moments</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                If you&apos;re going through this too, bookmark this page. 
                Let&apos;s figure it out together.
              </p>
              
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more about my journey so far →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}