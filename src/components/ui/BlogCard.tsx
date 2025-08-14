import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Heart, Leaf } from 'lucide-react'
import { format } from 'date-fns'
import { Entry } from 'contentful'

interface BlogCardProps {
  post: Entry<any>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, slug, excerpt, publishedDate, featuredImage, tags } = post.fields

  return (
    <article className="healing-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift relative group">
      {/* Gentle healing element */}
      <div className="absolute top-3 right-3 w-8 h-8 opacity-20 z-10">
        <Leaf className="w-full h-full text-green-400 gentle-float" />
      </div>
      
      {featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage && (
        <div className="aspect-video w-full overflow-hidden relative">
          <Image
            src={`https:${(featuredImage as any).fields.file.url}`}
            alt={(featuredImage as any).fields.title}
            width={400}
            height={225}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-green-600 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {publishedDate 
            ? format(new Date(publishedDate as string), 'MMM d, yyyy')
            : format(new Date(post.sys.createdAt), 'MMM d, yyyy')
          }
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-800 transition-colors">
          {title as string}
        </h3>
        
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {excerpt as string}
          </p>
        )}
        
        {tags && Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {(tags as string[]).slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-xs rounded-full border border-green-200/30"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${slug as string}`}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors group bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70"
          >
            Read healing story
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Heart className="h-4 w-4 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </article>
  )
}