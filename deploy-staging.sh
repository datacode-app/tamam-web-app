#!/bin/bash

echo "🚀 Deploying TamamWebApp to Staging Environment"
echo "==============================================="

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Copy staging environment file
echo "📋 Setting up staging environment..."
cp .env.staging .env.local

# Install/update dependencies
echo "📦 Installing dependencies..."
yarn install --silent

# Build the application
echo "🏗️ Building application..."
yarn run build

# Stop existing staging process
echo "🛑 Stopping existing staging process..."
pm2 delete "tamam-web-staging" 2>/dev/null || echo "No existing process found"

# Start new staging process
echo "▶️ Starting staging process..."
pm2 start npm --name "tamam-web-staging" -- start -- -p 3001

# Show status
echo "📊 Deployment Status:"
pm2 status tamam-web-staging

echo ""
echo "✅ Staging Deployment Complete!"
echo "🌐 Staging URL: https://app.tamam.krd"
echo "🔗 Admin URL: https://admin.tamam.krd"
echo ""
echo "📝 Next Steps:"
echo "1. Configure your web server to proxy app.tamam.krd to localhost:3001"
echo "2. Test the staging deployment thoroughly"
echo "3. Deploy to production when ready"