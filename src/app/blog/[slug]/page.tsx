import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getBlogPost, getBlogPosts } from '@/lib/contentful'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.fields.title} | Unemployment Journey`,
    description: post.fields.excerpt || 'A personal post about my unemployment journey',
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const { title, content, publishedDate, featuredImage, tags, author } = post.fields

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {format(new Date(publishedDate as string), 'MMMM d, yyyy')}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {title as string}
            </h1>

            {tags && Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {(tags as string[]).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {featuredImage && typeof featuredImage === 'object' && 'fields' in featuredImage && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={`https:${(featuredImage as any).fields.file.url}`}
                alt={(featuredImage as any).fields.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {documentToReactComponents(content as any)}
          </div>

          {/* Author Info */}
          {author && typeof author === 'object' && 'fields' in author && (
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                {(author as any).fields.avatar && (author as any).fields.avatar.fields && (
                  <Image
                    src={`https:${(author as any).fields.avatar.fields.file.url}`}
                    alt={(author as any).fields.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{(author as any).fields.name}</h3>
                  {(author as any).fields.bio && (
                    <p className="text-gray-600 mt-1">{(author as any).fields.bio}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Found this helpful?
            </h3>
            <p className="text-gray-600 mb-6">
              Share your own story or leave a comment. Let&apos;s support each other through this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Leave a Comment (Coming Soon)
              </button>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}