# Unemployment Journey 🚀

A personal blog website built with Next.js to share authentic experiences and feelings during unemployment. This project provides a platform to document the real, unfiltered journey of job searching, mental health struggles, and personal growth during unemployment.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan?style=flat-square&logo=tailwindcss)
![Contentful](https://img.shields.io/badge/Contentful-CMS-orange?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)

## ✨ Features

- **📝 Personal Blog**: Share daily experiences, thoughts, and emotions
- **🎨 Responsive Design**: Beautiful, mobile-first UI with unemployment journey theme
- **📊 Journey Timeline**: Visual representation of the unemployment experience
- **📚 Resources Section**: Curated resources for job seekers and unemployed individuals
- **💬 Community Support**: Emotional support components and encouraging messaging
- **🔍 Content Management**: Powered by Contentful CMS (free tier)
- **🐳 Docker Ready**: Easy deployment with Docker Compose
- **⚡ Performance**: Optimized with Next.js 14 and modern best practices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **CMS**: Contentful (Free: 25K records, 2 locales)
- **Icons**: Lucide React
- **Deployment**: Docker + Docker Compose
- **Analytics**: Google Analytics (optional)
- **Comments**: Giscus (GitHub-based, optional)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Contentful account (free)

### 1. Clone and Setup
```bash
git clone <your-repo>
cd unemployment-journey
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

Add your Contentful credentials to `.env.local`:
```
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 3. Contentful Setup
Create these content models in your Contentful space:

#### Blog Post
- Title (Short Text)
- Slug (Short Text, unique)
- Content (Rich Text)
- Excerpt (Long Text)
- Featured Image (Media)
- Tags (Short Text, list)
- Published Date (Date & Time)
- Author (Reference to Author)

#### Author
- Name (Short Text)
- Bio (Long Text)
- Avatar (Media)

### 4. Development
```bash
npm run dev
```
Visit `http://localhost:3000`

### 5. Docker Deployment
```bash
# Build and run
docker-compose up -d

# With nginx (production)
docker-compose --profile production up -d
```

## 📁 Project Structure

```
unemployment-journey/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── blog/           # Blog listing and individual posts
│   │   ├── about/          # About page
│   │   └── api/            # API routes
│   ├── components/         # React components
│   │   ├── layout/         # Header, Footer
│   │   └── ui/             # BlogCard, EmotionalSupport
│   ├── lib/                # Utility functions
│   │   └── contentful.ts   # Contentful API client
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
├── docker-compose.yml      # Docker deployment config
├── Dockerfile             # Container definition
└── nginx.conf             # Reverse proxy config
```

## 🎨 Design Philosophy

This website is designed with empathy and authenticity in mind:

- **Warm, supportive color palette** (blues, soft gradients)
- **Clean, readable typography** (Inter font family)
- **Emotional support components** throughout the site
- **Mobile-first responsive design**
- **Accessible and inclusive** interface design
- **Encouraging messaging** to reduce isolation

## 🔧 Customization

### Update Personal Information
Edit `/src/app/about/page.tsx` to add your:
- Background story
- Current statistics
- Contact information
- Personal details

### Modify Theme Colors
Update Tailwind classes in components or customize in `tailwind.config.js`

### Add New Content Types
1. Create content model in Contentful
2. Add TypeScript types in `/src/types/contentful.ts`
3. Add API functions in `/src/lib/contentful.ts`

## 🚀 Deployment Options

### VPS with Docker
```bash
# Clone repository on your VPS
git clone <your-repo>
cd unemployment-journey

# Set up environment
cp .env.example .env
# Edit .env with your values

# Deploy
docker-compose up -d
```

### With SSL/Domain
1. Update `nginx.conf` with your domain
2. Add SSL certificates to `./ssl/` directory
3. Uncomment SSL section in nginx.conf
4. Run: `docker-compose --profile production up -d`

## 🤝 Contributing

This is a personal project, but you're welcome to:
- Fork for your own unemployment journey
- Suggest improvements via issues
- Share resources that helped you

## 📄 License

MIT License - feel free to use this for your own journey.

---

**Remember**: Unemployment is a chapter, not your whole story. 💙
