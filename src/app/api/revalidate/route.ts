import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get the secret from query params
    const secret = request.nextUrl.searchParams.get('secret')
    
    // Verify webhook secret
    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      console.error('Invalid revalidation secret')
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Parse the webhook payload
    const body = await request.json()
    
    // Log the webhook for debugging
    console.log('Contentful webhook received:', {
      contentType: body.sys?.contentType?.sys?.id,
      entryId: body.sys?.id,
      action: body.sys?.type
    })

    // Revalidate based on content type
    const contentType = body.sys?.contentType?.sys?.id

    switch (contentType) {
      case 'story':
        // Revalidate story-related pages
        revalidateTag('stories')
        revalidatePath('/story')
        revalidatePath('/')
        
        // If we have a slug, revalidate the specific story page
        if (body.fields?.slug) {
          const slug = typeof body.fields.slug === 'string' 
            ? body.fields.slug 
            : body.fields.slug['en-US'] || Object.values(body.fields.slug)[0]
          
          if (slug) {
            revalidatePath(`/story/${slug}`)
            console.log(`Revalidated story page: /story/${slug}`)
          }
        }
        break
        
      case 'author':
        // Revalidate all story pages since author info might be displayed
        revalidateTag('stories')
        revalidateTag('authors')
        revalidatePath('/story')
        break
        
      case 'page':
        // Revalidate specific page if we have a slug
        if (body.fields?.slug) {
          const slug = typeof body.fields.slug === 'string' 
            ? body.fields.slug 
            : body.fields.slug['en-US'] || Object.values(body.fields.slug)[0]
          
          if (slug) {
            revalidatePath(`/${slug}`)
            console.log(`Revalidated page: /${slug}`)
          }
        }
        break
        
      default:
        // For any other content type, revalidate main pages
        revalidatePath('/')
        revalidatePath('/story')
    }

    console.log(`Successfully revalidated content for ${contentType}`)
    
    return NextResponse.json({ 
      revalidated: true, 
      contentType,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error in revalidation webhook:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    )
  }
}

// Handle GET requests for testing
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  return NextResponse.json({ 
    message: 'Revalidation endpoint is working',
    timestamp: new Date().toISOString()
  })
}