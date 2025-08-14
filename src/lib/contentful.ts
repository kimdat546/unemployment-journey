import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export async function getBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getPage(slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getResources() {
  try {
    const entries = await client.getEntries({
      content_type: 'resource',
      order: ['fields.category', 'fields.title'],
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}