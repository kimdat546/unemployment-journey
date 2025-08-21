import { getBlogPost, getBlogPosts } from '@/lib/contentful'
import { ContentfulAsset, AuthorEntry } from '@/types/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { format } from 'date-fns'
import { ArrowLeft, Calendar, Heart, Leaf, MessageCircle, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Document } from '@contentful/rich-text-types'

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

// Enable dynamic params for new stories that aren't pre-generated
export const dynamicParams = true

// Revalidate this page every hour as a fallback
export const revalidate = 3600

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.fields.title} | Healing Journey`,
    description: post.fields.excerpt || 'A personal post about my healing journey',
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
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 border-b border-green-200/30 py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/story"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium bg-white/50 px-4 py-2 rounded-lg hover:bg-white/70 transition-all backdrop-blur-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to healing stories
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 relative">
            <div className="healing-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 opacity-15">
                <Leaf className="w-full h-full text-green-400 gentle-float" />
              </div>

              <div className="flex items-center text-sm text-green-600 mb-6">
                <Calendar className="h-4 w-4 mr-2" />
                {publishedDate
                  ? format(new Date(publishedDate as string), "MMMM d, yyyy")
                  : format(new Date(post.sys.createdAt), "MMMM d, yyyy")}
                <span className="ml-4 text-green-500">•</span>
                <span className="ml-2 text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">
                  Healing Story
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6 leading-tight">
                {title as string}
              </h1>

              {tags && Array.isArray(tags) && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {(tags as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm rounded-full border border-green-200/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
                <p className="text-green-700 font-medium text-sm flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  This story is part of my authentic healing journey
                </p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {featuredImage &&
            (featuredImage as ContentfulAsset)?.fields?.file && (
              <div className="mb-12 aspect-video w-full overflow-hidden rounded-2xl shadow-lg relative">
                <Image
                  src={`https:${
                    (featuredImage as ContentfulAsset).fields.file.url
                  }`}
                  alt={
                    (featuredImage as ContentfulAsset).fields.title ||
                    "Featured image"
                  }
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}

          {/* Content */}
          <div className="healing-card rounded-2xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute bottom-4 left-4 w-16 h-16 opacity-10">
              <Sun className="w-full h-full text-yellow-400 soft-pulse" />
            </div>
            <div className="prose prose-lg max-w-none">
              {content && documentToReactComponents(content as Document)}
            </div>
          </div>

          {/* Author Info */}
          {author && (author as AuthorEntry)?.fields && (
            <div className="healing-card rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 opacity-15">
                <Heart className="w-full h-full text-green-400 soft-pulse" />
              </div>
              <div className="flex items-start space-x-4">
                {(author as AuthorEntry).fields?.avatar && typeof (author as AuthorEntry).fields.avatar === 'object' && 'fields' in (author as AuthorEntry).fields.avatar! && (
                  <Image
                    src={`https:${
                      ((author as AuthorEntry).fields.avatar as ContentfulAsset).fields
                        .file.url
                    }`}
                    alt={((author as AuthorEntry).fields.name as string) || "Author avatar"}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full border-2 border-green-200"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-green-800 text-lg">
                    {(author as AuthorEntry).fields.name as string}
                  </h3>
                  {(author as AuthorEntry).fields.bio && (
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {(author as AuthorEntry).fields.bio as string}
                    </p>
                  )}
                  <p className="text-green-600 text-sm mt-2 font-medium">
                    🌱 Sharing authentic healing stories
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="healing-card rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
              <Heart className="w-full h-full text-green-400 breathe-animation" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Did this healing story resonate?
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your healing journey matters too. Share your own story or connect
              with me. Together, we create a supportive community where
              authentic healing can flourish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all disabled:opacity-50 shadow-lg"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Share Your Story (Coming Soon)
              </button>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white/90 text-green-700 font-semibold rounded-xl border-2 border-green-300 hover:bg-green-50 hover:border-green-400 transition-all shadow-md"
              >
                Connect with Me
              </Link>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200/30">
              <p className="text-green-700 text-sm font-medium">
                🤗 Remember: Your healing journey is unique and valuable
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
