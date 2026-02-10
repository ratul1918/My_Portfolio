# Vercel Deployment Guide

## Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com) with repository access
- Git installed locally

## Deployment Steps

### 1. **Push to GitHub**
```bash
git remote add origin https://github.com/ratul1918/My_Portfolio.git
git branch -M main
git push -u origin main
```

### 2. **Deploy on Vercel**

#### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

Follow the CLI prompts:
- Confirm project directory
- Link to existing project or create new
- Override build settings (use defaults)

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add Environment Variables (if needed)
6. Click "Deploy"

### 3. **Environment Variables (Optional)**

In Vercel Dashboard under Project Settings → Environment Variables, add:
- `VITE_API_URL`: Your API endpoint (if applicable)

### 4. **Custom Domain (Optional)**

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Post-Deployment

### Verify Deployment
- Check build status in Vercel Dashboard
- Visit your deployed URL: `https://your-project.vercel.app`
- Test all navigation and links

### Enable Auto-Deploy
- Default: Enabled (deploys on every push to `main`)
- Configure branch protection in GitHub Settings

### Monitor Performance
- Use Vercel Analytics
- Check Core Web Vitals
- Monitor deployment logs

## Troubleshooting

### Build Fails
- Check `npm run build` locally works
- Verify Node.js version compatibility
- Check for missing dependencies

### Deployment Errors
- Review build logs in Vercel Dashboard
- Check environment variables are set correctly
- Ensure `.gitignore` excludes `node_modules`

### Performance Issues
- Enable caching headers (configured in `vercel.json`)
- Optimize images
- Check for large dependencies

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Build Output API](https://vercel.com/docs/build-output-api)

## Support

For Vercel support: [support.vercel.com](https://support.vercel.com)
