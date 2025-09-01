# HIRAuto - Vercel Deployment Guide

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nickdyyz/HIRAuto)

Click the button above to deploy HIRAuto to Vercel in one click!

## 📋 Manual Deployment Steps

### 1. Prerequisites
- GitHub repository: https://github.com/nickdyyz/HIRAuto
- Vercel account (free tier works perfectly)
- Node.js 16+ for local development

### 2. Deploy from GitHub

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `nickdyyz/HIRAuto` from your GitHub repositories
   - Click "Import"

3. **Configure Project**
   - **Project Name**: `hirauto` (or customize)
   - **Framework Preset**: Other
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Your app will be live in ~2 minutes!

### 3. Environment Variables (Optional)

Currently, HIRAuto runs entirely client-side with no environment variables needed. However, if you want to add analytics or other services:

```bash
# Example environment variables
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Custom Domain (Optional)

1. In your Vercel dashboard, go to your HIRAuto project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🛠️ Local Development

```bash
# Clone and setup
git clone https://github.com/nickdyyz/HIRAuto.git
cd HIRAuto
npm install

# Start development server
npm run dev
# → http://localhost:4501

# Build for production
npm run build

# Run tests
npm test
```

## 📊 Performance & Optimization

### Current Optimizations:
- ✅ Static site generation
- ✅ Security headers configured
- ✅ Proper caching strategies
- ✅ Minified TypeScript output
- ✅ Optimized for Core Web Vitals

### Vercel Features Used:
- **Static Site Generation**: Ultra-fast loading
- **Global CDN**: Worldwide distribution
- **Security Headers**: XSS protection, content security
- **Automatic HTTPS**: SSL certificates included
- **Performance Monitoring**: Built-in analytics

## 🔧 Build Configuration

The project uses a simplified `vercel.json` configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🚨 Troubleshooting

### Common Issues:

**Build fails with TypeScript errors:**
```bash
npm run build  # Check locally first
npm run lint   # Fix linting issues
```

**Static assets not loading:**
- Ensure all paths in `index.html` are relative
- Check `vercel.json` rewrite rules

**Security headers not applied:**
- Verify `vercel.json` headers configuration
- Check browser dev tools → Network → Response Headers

## 📈 Post-Deployment

After successful deployment:

1. **Test all features**:
   - Hazard search and filtering
   - Risk assessment sliders
   - Drag-and-drop prioritization
   - Mobile responsiveness

2. **Monitor performance**:
   - Use Vercel Analytics (free)
   - Check Core Web Vitals
   - Monitor error rates

3. **Set up monitoring**:
   - Enable Vercel Speed Insights
   - Configure uptime monitoring
   - Set up error alerts

## 🔗 Useful Links

- **Live Demo**: Your Vercel URL (after deployment)
- **GitHub**: https://github.com/nickdyyz/HIRAuto
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentation**: README.md

---

**Need help?** Check the GitHub Issues or create a new one!
