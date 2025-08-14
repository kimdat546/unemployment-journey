import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { ContentfulEntry, BlogPostFields } from '@/types/contentful'

interface BlogCardProps {
  post: ContentfulEntry<BlogPostFields>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, slug, excerpt, publishedDate, featuredImage, tags } = post.fields

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {featuredImage && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={`https:${featuredImage.fields.file.url}`}
            alt={featuredImage.fields.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          {format(new Date(publishedDate), 'MMM d, yyyy')}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
        >
          Read more
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}