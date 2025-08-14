import { Document } from '@contentful/rich-text-types'

export interface BlogPostFields {
  title: string
  slug: string
  content: Document
  excerpt?: string
  featuredImage?: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  }
  tags?: string[]
  publishedDate: string
  author: AuthorFields
}

export interface AuthorFields {
  name: string
  bio?: string
  avatar?: {
    fields: {
      file: {
        url: string
      }
      title: string
    }
  }
}

export interface PageFields {
  title: string
  slug: string
  content: Document
}

export interface ResourceFields {
  title: string
  description: string
  url: string
  category: string
}

export interface ContentfulEntry<T> {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: T
}