import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'dummy-space-id',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'dummy-access-token',
})

export async function getBlogPosts() {
  try {
    // Return empty array if no valid credentials
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      console.log('Missing Contentful credentials')
      return []
    }
    
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'], // Fallback to creation date if publishedDate is missing
    })
    
    // Filter and sort posts more robustly
    const posts = entries.items.filter(post => {
      // Only include posts with title and slug
      return post.fields.title && post.fields.slug
    }).sort((a, b) => {
      // Sort by publishedDate if available, otherwise by createdAt
      const aDate = (a.fields.publishedDate as string) || a.sys.createdAt
      const bDate = (b.fields.publishedDate as string) || b.sys.createdAt
      return new Date(bDate).getTime() - new Date(aDate).getTime()
    })
    
    console.log(`Found ${posts.length} blog posts`)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string) {
  try {
    // Return null if no valid credentials
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      return null
    }
    
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
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      return null
    }
    
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
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      return []
    }
    
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