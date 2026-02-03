# Deployment Instructions

## Quick Deploy

### Option 1: Vercel (Easiest - Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/saudi-property-guide.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain**
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your domain (e.g., saudipropertyguide.com)
   - Follow DNS configuration instructions

### Option 2: Render

1. Push code to GitHub (as above)
2. Go to [render.com](https://render.com)
3. New > Static Site
4. Connect GitHub repo
5. Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click "Create Static Site"

### Option 3: Netlify

1. Push code to GitHub (as above)
2. Go to [netlify.com](https://netlify.com)
3. Add new site > Import from Git
4. Select your repository
5. Build settings auto-detected
6. Click "Deploy Site"

## Post-Deployment Checklist

- [ ] Update contact email in `Footer.tsx` and `ContactPage.tsx`
- [ ] Update phone number (WhatsApp link)
- [ ] Update social media links in `Footer.tsx`
- [ ] Set up Calendly/Cal.com for bookings
- [ ] Add Google Analytics (optional)
- [ ] Test all forms and links
- [ ] Verify mobile responsiveness

## Environment Variables (Optional)

Create `.env.local` for local development:

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
NEXT_PUBLIC_WHATSAPP_NUMBER=966501234567
```

## Performance Optimization

1. **Images**: Replace Unsplash URLs with optimized images
2. **Fonts**: Consider self-hosting Google Fonts
3. **Analytics**: Add Google Analytics or Plausible
4. **SEO**: Submit sitemap to Google Search Console

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: info@saudipropertyguide.com
