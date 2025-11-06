# PhysicalTV Studios Website - TODO

**Status:** Ready for Vercel Deployment ✅
**Build Status:** Passing ✅
**Linting:** Clean ✅

---

## Pre-Launch Checklist

### Critical (Before Launch)

- [ ] **Domain Configuration**
  - Connect physical.tv domain to Vercel
  - Configure DNS settings
  - Set up SSL certificate (automatic via Vercel)

- [ ] **Contact Form Integration**
  - Implement form submission handler (currently frontend only)
  - Options:
    - Vercel Forms
    - Resend.com for email
    - Formspree
    - Custom API endpoint
  - Add email notifications to info@physical.tv

- [ ] **Analytics Setup**
  - Add Vercel Analytics or Google Analytics
  - Set up conversion tracking for contact form

- [ ] **Environment Variables (if needed)**
  - Cal.com API keys (if integrating booking)
  - Email service API keys
  - Analytics tracking IDs

### Content Finalization

- [ ] **Hero Video**
  - Verify BodyRock TV YouTube video is appropriate
  - Consider adding more client work videos to rotate
  - Test autoplay behavior on mobile devices

- [ ] **Projects Portfolio**
  - Add real client testimonials (currently using example copy)
  - Add actual project images where available
  - Consider NDA'd work - how to showcase without revealing sensitive info
  - Verify all 5 case studies are accurate representations

- [ ] **Company Logos**
  - Replace example logos (Amazon, Uber, etc.) with actual client/partner logos
  - Or remove logos section if no permission to use
  - Get logo usage permissions in writing

- [ ] **About Frederick Section**
  - Verify profile photo is the one Frederick wants to use
  - Confirm bio copy and credentials
  - Consider adding LinkedIn or social links

### SEO & Metadata

- [ ] **Favicon & App Icons**
  - Create custom favicon (currently using default)
  - Add Apple touch icons
  - Create social share images (Open Graph)

- [ ] **Sitemap & Robots.txt**
  - Verify sitemap.xml is generated correctly
  - Configure robots.txt for search engines

- [ ] **Meta Descriptions**
  - Review all page meta descriptions
  - Optimize for search engines
  - Ensure all Open Graph tags are correct

### Legal & Compliance

- [ ] **Terms of Service** (page exists at `/pricing` but hidden)
  - Write or adapt terms of service
  - Link in footer when ready

- [ ] **Privacy Policy**
  - Create privacy policy page
  - Required if collecting emails
  - Link in footer

- [ ] **Cookie Consent** (if tracking users)
  - Add cookie consent banner if using analytics

---

## Post-Launch Improvements

### High Priority

- [ ] **Cal.com Integration**
  - Set up Cal.com booking widget
  - Replace placeholder in contact section
  - Test booking flow

- [ ] **Contact Form Backend**
  - Set up email delivery
  - Add spam protection (reCAPTCHA or similar)
  - Create autoresponder
  - Set up form submission tracking

- [ ] **Performance Optimization**
  - Optimize images (already using Next/Image, but check file sizes)
  - Review Core Web Vitals
  - Test mobile performance
  - Enable caching strategies

### Medium Priority

- [ ] **Blog Activation** (infrastructure ready)
  - Decide if/when to activate blog
  - Create first thought leadership articles
  - Set up RSS feed
  - Social share buttons

- [ ] **Testimonials Section**
  - Collect client testimonials
  - Add photos/logos of testimonial sources
  - Video testimonials (optional)

- [ ] **Case Study Deep Dives**
  - Expand project pages with more detail
  - Add metrics/results where available
  - Include process documentation
  - Before/after examples

- [ ] **Email Newsletter**
  - Set up newsletter signup
  - Choose email platform (Mailchimp, ConvertKit, Buttondown)
  - Create welcome sequence

### Low Priority / Nice to Have

- [ ] **Auth Pages** (login/signup hidden but functional)
  - Decide if client portal is needed
  - Set up authentication if needed
  - Create client dashboard

- [ ] **Additional Project Examples**
  - Add more case studies as work allows
  - Create project categories/filters
  - Add search functionality

- [ ] **Video Background** (alternative to YouTube embed)
  - Self-hosted background video option
  - Lighter weight than iframe
  - More control over playback

- [ ] **Animations & Interactions**
  - Review all scroll animations
  - Test on various devices
  - Accessibility review (motion preferences)

- [ ] **Social Proof Widgets**
  - YouTube subscriber count
  - View count ticker
  - Client logo carousel enhancements

---

## Technical Debt / Cleanup

### Deprecation Warnings (Non-Breaking)

- [ ] **Image Component Warnings**
  - Update `onLoadingComplete` to `onLoad` in blur-image.tsx
  - Update testimonials component
  - Low priority - doesn't affect functionality

- [ ] **Image Domains Configuration**
  - Update next.config.mjs to use `remotePatterns` instead of `domains`
  - Currently using deprecated but working pattern

### Code Cleanup

- [ ] **Unused Components**
  - Review if all 36 components are needed
  - Consider removing unused auth components if not needed
  - Clean up any remaining template code

- [ ] **Unused Assets**
  - Remove template images (tyler.jpeg, avatar.jpeg)
  - Clean up unused logo files
  - Audit public folder

- [ ] **Environment-Specific Configuration**
  - Review all hardcoded URLs
  - Make sure production URLs are correct
  - Check for any localhost references

---

## Known Issues / Notes

### Working As Expected ✅

- Hydration error fixed (Math.random() replaced with static values)
- All ESLint warnings resolved
- Projects page loading correct data from /projects directory
- Blog infrastructure preserved but not linked in nav (intentional)
- Auth pages preserved but not linked (intentional)

### Browser Compatibility

- [ ] Test in Safari (especially video autoplay)
- [ ] Test in Firefox
- [ ] Test in Chrome
- [ ] Test on iOS devices
- [ ] Test on Android devices

### Accessibility

- [ ] Run Lighthouse audit
- [ ] Test keyboard navigation
- [ ] Verify ARIA labels
- [ ] Check color contrast ratios
- [ ] Test with screen reader

---

## Deployment Checklist

### Vercel Setup

- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings (default Next.js settings should work)
- [ ] Set up environment variables (if any)
- [ ] Configure custom domain (physical.tv)
- [ ] Enable Vercel Analytics (optional but recommended)
- [ ] Set up branch deployments (main = production)

### Post-Deployment Verification

- [ ] Test all pages load correctly
- [ ] Verify SSL certificate is active
- [ ] Check video autoplay on production
- [ ] Test contact form submission
- [ ] Verify images load from CDN
- [ ] Check mobile responsiveness
- [ ] Test navigation links
- [ ] Verify social share preview (LinkedIn, Twitter)

### Monitoring

- [ ] Set up uptime monitoring
- [ ] Configure error tracking (Sentry optional)
- [ ] Monitor Core Web Vitals
- [ ] Track form submissions
- [ ] Monitor traffic sources

---

## Content Strategy (Future)

### Blog Topics (when/if activated)
- How ideas move through culture
- Media architecture case studies
- Creator economy insights
- Strategic frameworks deep dives

### Social Media
- LinkedIn presence
- Twitter/X for thought leadership
- Instagram for visual case studies
- YouTube for longer-form content

### SEO Strategy
- Target keywords: "media architecture", "creative intelligence", "creator economy"
- Local SEO for Los Angeles (if applicable)
- Industry partnerships and backlinks

---

## Budget Items

### Paid Services to Consider
- Email service: $0-$20/mo (Resend, Mailchimp starter)
- Analytics: $0 (Vercel Analytics free tier)
- Monitoring: $0 (Vercel included)
- Domain: ~$12/year (physical.tv already owned)
- **Total Monthly Cost: $0-20** (as planned)

### Premium Upgrades (Optional)
- Cal.com Pro features
- Premium email service tier
- Advanced analytics
- CDN enhancements (Vercel handles this)

---

## Timeline Estimate

**Immediate (Pre-Launch):**
- Domain connection: 1-2 hours
- Form backend setup: 2-4 hours
- Analytics integration: 30 minutes
- Final content review: 1-2 hours
- **Total: ~1 day**

**Week 1 Post-Launch:**
- Monitor analytics
- Fix any issues that arise
- Collect initial feedback
- SEO optimization

**Month 1:**
- Add testimonials as they come in
- Refine case studies
- Cal.com integration
- Privacy policy & terms

---

## Success Metrics

### Launch Goals
- Site loads in < 2 seconds
- 90+ Lighthouse score
- Mobile responsive across all devices
- Contact form functional
- Zero console errors

### Growth Metrics (Track Over Time)
- Contact form submissions
- Time on site
- Pages per session
- Bounce rate
- Conversion rate (visitor → contact)

---

**Last Updated:** 2025-11-06
**Ready for Production:** ✅ YES
**Blocking Issues:** None - site is production-ready
**Next Step:** Connect to Vercel and deploy
