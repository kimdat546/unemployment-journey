import { Search, Filter } from 'lucide-react'
import { getBlogPosts } from '@/lib/contentful'
import BlogCard from '@/components/ui/BlogCard'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My Unemployment Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Day-by-day insights, struggles, breakthroughs, and the real emotions 
              of navigating life without a job. Raw, honest, and hopefully helpful.
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
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                No posts yet, but they&apos;re coming!
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I&apos;m currently setting up my Contentful CMS to start sharing my daily 
                experiences. Check back soon for authentic stories about the ups and 
                downs of unemployment.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="font-semibold text-blue-900 mb-2">
                  What to expect:
                </h3>
                <ul className="text-sm text-blue-800 space-y-1 text-left">
                  <li>• Daily reflections and emotions</li>
                  <li>• Job search victories and failures</li>
                  <li>• Mental health insights</li>
                  <li>• Practical tips and resources</li>
                  <li>• Community stories and support</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}