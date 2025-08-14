# Contentful CMS Setup Guide 🎯

This guide will walk you through setting up Contentful CMS for your Unemployment Journey blog, step by step.

## 📋 Overview

Contentful is a headless CMS that will manage your blog content. We'll create 3 content models:
- **Blog Post** - Your daily journal entries
- **Author** - Your profile information  
- **Page** - Static pages like About, Resources
- **Resource** - Helpful links and tools

## 🚀 Step 1: Create Contentful Account

1. Go to [contentful.com](https://www.contentful.com)
2. Click "Start building for free"
3. Sign up with email or GitHub
4. Verify your email address

## 🏗️ Step 2: Create Your Space

1. After login, click "Create space"
2. Choose "I want to create content"
3. Name your space: "Unemployment Journey" 
4. Select "Free" plan
5. Click "Create space"

## 📊 Step 3: Create Content Models

### 3.1 Create Author Content Model

1. In your space dashboard, click "Content model" in the sidebar
2. Click "Add content type"
3. Name: `Author`
4. API Identifier: `author` (auto-generated)
5. Description: "Author information for blog posts"
6. Click "Create"

**Add these fields to Author:**

1. **Name** (required)
   - Field type: "Short text"  
   - Name: "Name"
   - Field ID: "name"
   - Check "This field represents the entry title"
   - Check "Required field"

2. **Bio**
   - Field type: "Long text"
   - Name: "Bio" 
   - Field ID: "bio"
   - Help text: "Short biography"

3. **Avatar**
   - Field type: "Media"
   - Name: "Avatar"
   - Field ID: "avatar" 
   - Help text: "Profile picture"
   - Media type: "Image"

4. Click "Save" in the top right

### 3.2 Create Blog Post Content Model

1. Click "Add content type"
2. Name: `Blog Post`
3. API Identifier: `blogPost`
4. Description: "Blog posts for unemployment journey"
5. Click "Create"

**Add these fields to Blog Post:**

1. **Title** (required)
   - Field type: "Short text"
   - Name: "Title"
   - Field ID: "title"  
   - Check "This field represents the entry title"
   - Check "Required field"

2. **Slug** (required)
   - Field type: "Short text"
   - Name: "Slug"
   - Field ID: "slug"
   - Help text: "URL-friendly version of title (e.g., 'day-30-still-searching')"
   - Check "Required field"
   - Under "Validation" → "Unique field"

3. **Content** (required)
   - Field type: "Rich text"
   - Name: "Content"
   - Field ID: "content"
   - Check "Required field"

4. **Excerpt**
   - Field type: "Long text"
   - Name: "Excerpt"
   - Field ID: "excerpt"
   - Help text: "Short summary for blog cards"

5. **Featured Image**
   - Field type: "Media"
   - Name: "Featured Image"
   - Field ID: "featuredImage"
   - Media type: "Image"

6. **Tags**
   - Field type: "Short text"
   - Name: "Tags"
   - Field ID: "tags"
   - Check "List" (allows multiple values)
   - Help text: "e.g., mental-health, job-search, interview"

7. **Published Date** (required)
   - Field type: "Date and time"
   - Name: "Published Date"
   - Field ID: "publishedDate"
   - Check "Required field"

8. **Author** (required)
   - Field type: "Reference"
   - Name: "Author" 
   - Field ID: "author"
   - Check "Required field"
   - Reference: "Author" content type
   - Check "Accept only specified entry type"

9. Click "Save"

### 3.3 Create Page Content Model

1. Click "Add content type"
2. Name: `Page`
3. API Identifier: `page`
4. Description: "Static pages like About, Resources"
5. Click "Create"

**Add these fields:**

1. **Title** (required)
   - Field type: "Short text"
   - Name: "Title"
   - Field ID: "title"
   - Check "This field represents the entry title"
   - Check "Required field"

2. **Slug** (required)
   - Field type: "Short text" 
   - Name: "Slug"
   - Field ID: "slug"
   - Check "Required field"
   - Under "Validation" → "Unique field"

3. **Content** (required)
   - Field type: "Rich text"
   - Name: "Content"
   - Field ID: "content"
   - Check "Required field"

4. Click "Save"

### 3.4 Create Resource Content Model

1. Click "Add content type"
2. Name: `Resource`
3. API Identifier: `resource`
4. Description: "Helpful resources for job seekers"
5. Click "Create"

**Add these fields:**

1. **Title** (required)
   - Field type: "Short text"
   - Name: "Title"
   - Field ID: "title"
   - Check "This field represents the entry title"
   - Check "Required field"

2. **Description** (required)
   - Field type: "Long text"
   - Name: "Description"
   - Field ID: "description"
   - Check "Required field"

3. **URL** (required)
   - Field type: "Short text"
   - Name: "URL"
   - Field ID: "url"
   - Check "Required field"
   - Under "Validation" → "URL"

4. **Category** (required)
   - Field type: "Short text"
   - Name: "Category"
   - Field ID: "category"
   - Check "Required field"
   - Help text: "e.g., Mental Health, Job Boards, Career Coaching"

5. Click "Save"

## 🔑 Step 4: Get API Keys

1. Go to "Settings" → "API keys" in the sidebar
2. Click "Add API key"
3. Name: "Unemployment Journey Website"
4. Copy these values for your `.env` file:
   - **Space ID**: Found at the top
   - **Content Delivery API - access token**: Copy this token

## 📝 Step 5: Create Your First Content

### Create Author Profile

1. Go to "Content" in sidebar
2. Click "Add entry" → "Author"
3. Fill in:
   - **Name**: Your name
   - **Bio**: Brief description about yourself
   - **Avatar**: Upload your profile picture
4. Click "Publish"

### Create Your First Blog Post

1. Click "Add entry" → "Blog Post"
2. Fill in:
   - **Title**: "Day 1: Starting This Journey"
   - **Slug**: "day-1-starting-this-journey"
   - **Content**: Write your first post using the rich text editor
   - **Excerpt**: "Today I decided to document my unemployment experience..."
   - **Featured Image**: Upload a relevant image
   - **Tags**: ["personal", "beginning", "hope"]
   - **Published Date**: Today's date
   - **Author**: Select your author profile
3. Click "Publish"

## ⚙️ Step 6: Configure Your Website

1. In your project, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your Contentful keys:
   ```
   CONTENTFUL_SPACE_ID=your_space_id_from_step_4
   CONTENTFUL_ACCESS_TOKEN=your_access_token_from_step_4
   ```

3. Start your development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` - you should see your blog post!

## 📖 Content Creation Tips

### Blog Post Ideas
- **Daily Check-ins**: "Day X: How I'm feeling today"
- **Application Updates**: "Applied to 5 companies today"
- **Interview Experiences**: "My first interview in months"
- **Mental Health**: "Dealing with rejection anxiety"
- **Small Wins**: "Updated my LinkedIn profile"
- **Resources Found**: "This job board actually works"

### Good Slug Examples
- `day-30-still-searching`
- `interview-went-well`
- `dealing-with-anxiety`
- `found-great-resource`
- `small-win-today`

### Tag Suggestions
- `mental-health`
- `job-search`
- `interviews`
- `networking`
- `skills-development`
- `rejection`
- `hope`
- `resources`
- `daily-update`

## 🔄 Ongoing Content Management

### Publishing Workflow
1. Draft your post in Contentful
2. Preview on your website (saves as draft)
3. When ready, click "Publish"
4. Your website updates automatically

### Content Organization
- Use consistent tagging for easier filtering
- Write compelling excerpts for better social sharing
- Add featured images for visual appeal
- Keep slugs short and descriptive

## 🛠️ Troubleshooting

### Common Issues

**"No posts showing on website"**
- Check that posts are Published (not just saved)
- Verify API keys in `.env.local`
- Check browser console for errors

**"Images not loading"**
- Ensure images are published in Contentful
- Check image URLs start with `//images.ctfassets.net`

**"API errors"**
- Verify Space ID and Access Token
- Make sure you're using the Content Delivery API token (not Preview API)

### Testing Your Setup

Visit these URLs to test:
- `http://localhost:3000` - Should show recent posts
- `http://localhost:3000/blog` - Should list all posts  
- `http://localhost:3000/blog/your-slug` - Should show individual post

## 🎉 You're Ready!

Your Contentful CMS is now configured and ready for your unemployment journey documentation. Start writing your authentic story - the struggles, victories, and everything in between.

Remember: Your story matters and can help others going through similar experiences. 💙

## 📚 Additional Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Rich Text Editor Guide](https://www.contentful.com/developers/docs/concepts/rich-text/)
- [Content Modeling Best Practices](https://www.contentful.com/developers/docs/concepts/data-model/)

---

*Need help? The Contentful community and documentation are excellent resources. You've got this! 🚀*