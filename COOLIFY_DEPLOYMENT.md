# 🚀 Coolify Deployment Guide

This guide covers deploying the Unemployment Journey website using Coolify.

## 📋 Pre-Deployment Checklist

### ✅ Ready for Coolify
- Next.js 15 application ✓
- Dockerfile optimized ✓
- docker-compose.yml configured ✓
- Environment variables documented ✓
- Build tested locally ✓

## 🔧 Coolify Configuration

### 1. Repository Setup
- Repository: Your GitHub repository
- Branch: `main` (or your default branch)
- Build Pack: `Dockerfile`

### 2. Environment Variables
Set these in Coolify's environment section:

```
NODE_ENV=production
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

### 3. Port Configuration
- **Application Port**: `3000`
- **Public Port**: `80` or `443` (handled by Coolify)

## 🐳 Docker Configuration

### Dockerfile (Optimized for Coolify)
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

### docker-compose.yml (Simplified)
```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - CONTENTFUL_SPACE_ID=${CONTENTFUL_SPACE_ID:-}
      - CONTENTFUL_ACCESS_TOKEN=${CONTENTFUL_ACCESS_TOKEN:-}
    restart: unless-stopped
```

## 📝 Deployment Steps

### 1. In Coolify Dashboard
1. Click "**+ New**" → "**Public Repository**"
2. Enter your GitHub repository URL
3. Select "**Dockerfile**" as build pack
4. Configure environment variables
5. Set port to `3000`
6. Click "**Deploy**"

### 2. Environment Variables Setup
```
NODE_ENV=production
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 3. Domain Configuration
- Set your domain in Coolify
- SSL certificates are handled automatically
- Access your site at your configured domain

## 🔍 Troubleshooting

### Common Issues & Solutions

**1. Build Fails**
- Check environment variables are set
- Ensure Contentful API keys are valid
- Review build logs in Coolify

**2. Application Won't Start**
- Verify port 3000 is exposed
- Check Node.js version compatibility
- Review application logs

**3. Contentful Connection Issues**
- Verify API keys are correct
- Check Contentful space is active
- Ensure content models are created

### Build Logs to Check
```
✓ Dependencies installed
✓ Next.js build completed  
✓ Docker image built
✓ Container started on port 3000
```

## 📊 Expected Build Output
```
Route (app)                    Size  First Load JS
├ ○ /                         174 B         108 kB
├ ○ /about                    161 B         103 kB
├ ○ /blog                     176 B         108 kB
└ ● /blog/[slug]              176 B         108 kB
```

## 🎯 Post-Deployment

### 1. Verify Deployment
- Visit your domain
- Check `/api/health` endpoint
- Test blog functionality
- Verify mobile responsiveness

### 2. Content Setup
1. Follow `CONTENTFUL_SETUP.md` 
2. Create your content models
3. Add your first blog post
4. Update the About page

### 3. Monitoring
- Monitor logs in Coolify dashboard
- Set up uptime monitoring
- Check performance metrics

## 🔒 Security Notes

- Contentful API keys are server-side only
- No client-side API key exposure
- Docker container runs as non-root user
- Environment variables are encrypted in Coolify

## 💡 Optimization Tips

### Performance
- Images are optimized via Next.js Image component
- Static pages are pre-generated
- CSS is automatically optimized with Tailwind v4

### SEO
- Meta tags configured
- Open Graph tags included
- Sitemap generated automatically

## 🆘 Support

If deployment fails:

1. **Check Coolify logs** - Most issues are in the build logs
2. **Verify environment variables** - Missing variables cause failures
3. **Review Dockerfile** - Ensure it matches the provided version
4. **Test locally first** - Run `npm run build` to verify

## 🎉 Success!

Once deployed, your unemployment journey website will be live and ready to help others going through similar experiences. Your authentic story matters! 💙

---

*Coolify handles the infrastructure, you focus on sharing your story.*