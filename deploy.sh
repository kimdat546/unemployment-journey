#!/bin/bash

echo "🚀 Unemployment Journey - Deployment Script"
echo "==========================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from template..."
    cp .env.example .env
    echo "✅ Please edit .env file with your Contentful credentials before continuing."
    exit 1
fi

# Build and deploy with Docker Compose
echo "📦 Building and starting containers..."
docker-compose up -d --build

echo ""
echo "✅ Deployment completed!"
echo ""
echo "🌐 Your website should be available at:"
echo "   - Local: http://localhost:3000"
echo "   - With nginx: http://localhost (if using --profile production)"
echo ""
echo "📊 Health check: http://localhost:3000/api/health"
echo ""
echo "🔧 To view logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 To stop:"
echo "   docker-compose down"
echo ""
echo "📝 Don't forget to:"
echo "   1. Set up your Contentful space with the required content models"
echo "   2. Update personal information in src/app/about/page.tsx"
echo "   3. Configure your domain in nginx.conf (for production)"
echo ""
echo "🎉 Happy blogging! Remember: unemployment is temporary, but your story matters. 💙"