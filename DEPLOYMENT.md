# Vercel Deployment Guide - PhysicalTV Studios

## Pre-Deployment Checklist ✅

- ✅ Production build successful
- ✅ No linting errors
- ✅ No TypeScript errors
- ✅ All components rendering correctly
- ✅ Responsive design tested
- ✅ Hydration errors fixed
- ✅ .gitignore configured properly

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit - PhysicalTV Studios website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Settings** (all auto-detected, just verify)
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Click Deploy**
   - First deployment takes ~2-3 minutes
   - Get a preview URL: `physical-tv-template.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Custom Domain Setup (physical.tv)

### Step 1: Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add `physical.tv` and `www.physical.tv`
3. Vercel will provide DNS records

### Step 2: Configure DNS
Add these records at your domain registrar:

**For apex domain (physical.tv):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for Propagation
- DNS changes take 5 minutes to 48 hours
- Usually ready in under 1 hour
- Vercel will auto-provision SSL certificate

## Environment Variables (If Needed)

Currently none required. Add later for:
- Email service API keys
- Analytics tracking codes
- Cal.com integration tokens

To add in Vercel:
1. Go to Project Settings → Environment Variables
2. Add key-value pairs
3. Redeploy for changes to take effect

## Post-Deployment Verification

### Check These URLs Work:
- [ ] `https://physical.tv/` - Homepage
- [ ] `https://physical.tv/projects` - Projects page
- [ ] `https://physical.tv/projects/changelog-for-2024` - Sample project
- [ ] `https://physical.tv/contact` - Contact page
- [ ] `https://physical.tv/pricing` - Pricing page (hidden but working)

### Test These Features:
- [ ] Video autoplay in hero
- [ ] Logo carousel rotation
- [ ] Mobile navigation menu
- [ ] All section scroll links work
- [ ] Images load properly
- [ ] Dark mode toggle
- [ ] Forms display (backend not yet configured)

### Performance Check:
```bash
# Run Lighthouse in Chrome DevTools
# Target scores:
# Performance: 90+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 90+
```

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run build checks before deploying
- Provide deployment previews with unique URLs

## Rollback

If something goes wrong:
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "..." menu → Promote to Production

## Monitoring

Vercel automatically monitors:
- Build success/failure
- Deployment status
- Basic analytics (if enabled)

Enable in Project Settings:
- [ ] Vercel Analytics (free)
- [ ] Web Vitals tracking
- [ ] Error tracking

## Troubleshooting

### Build Fails
```bash
# Test locally first
npm run build

# Check for errors
npm run lint
```

### Images Not Loading
- Verify image paths are correct
- Check `next.config.mjs` for remote image domains
- Look for 404s in Network tab

### Slow Performance
- Check image sizes (should be optimized)
- Review Core Web Vitals in Vercel dashboard
- Consider enabling Image Optimization (automatic on Vercel)

### Domain Not Working
- Verify DNS records at registrar
- Check DNS propagation: `dig physical.tv`
- Wait up to 24 hours for full propagation
- Contact Vercel support if stuck

## Next Steps After Deployment

1. **Set up form backend** (high priority)
   - Implement email delivery for contact form
   - Add to environment variables

2. **Configure analytics**
   - Enable Vercel Analytics
   - Or add Google Analytics

3. **Add real content**
   - Replace example logos
   - Add testimonials
   - Update project images

4. **SEO optimization**
   - Submit sitemap to Google Search Console
   - Verify meta tags and Open Graph
   - Set up Google Business Profile

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Project Issues:** Check TODO.md

---

**Deployment Status:** Ready ✅
**Estimated Deploy Time:** 2-3 minutes
**Zero Downtime:** Yes (Vercel handles this)
**SSL Certificate:** Automatic & Free
**CDN:** Global (Vercel Edge Network)

---

**Note:** The build output shows all routes compiled successfully with optimal bundle sizes. The site is production-ready with no blocking issues.
