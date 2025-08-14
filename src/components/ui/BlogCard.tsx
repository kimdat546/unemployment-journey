import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { Entry } from 'contentful'

interface BlogCardProps {
  post: Entry<any>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, slug, excerpt, publishedDate, featuredImage, tags } = post.fields

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift border border-gray-100">
      {featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={`https:${(featuredImage as any).fields.file.url}`}
            alt={(featuredImage as any).fields.title}
            width={400}
            height={225}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          {format(new Date(publishedDate as string), 'MMM d, yyyy')}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title as string}
        </h3>
        
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt as string}
          </p>
        )}
        
        {tags && Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {(tags as string[]).slice(0, 3).map((tag) => (
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
          href={`/blog/${slug as string}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
        >
          Read more
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}