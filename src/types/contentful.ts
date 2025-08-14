import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'

export interface BlogPostFields {
  title: string
  slug: string
  content: Document
  excerpt?: string
  featuredImage?: any
  tags?: string[]
  publishedDate: string
  author: any
}

export interface AuthorFields {
  name: string
  bio?: string
  avatar?: any
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

export type ContentfulEntry<T> = Entry<any>