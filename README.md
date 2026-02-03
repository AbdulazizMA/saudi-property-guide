# SaudiPropertyGuide.com

A professional real estate consultation website for foreigners interested in buying property in Saudi Arabia.

## Features

- **Landing Page** - Hero section, benefits, statistics, city showcases
- **About Page** - Company story, Vision 2030 alignment, values
- **Services Page** - Service packages with pricing and features
- **Property Guide** - Step-by-step buying guide, legal requirements, financing options, FAQ
- **Contact Page** - Contact form, WhatsApp integration, Calendly booking

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd saudi-property-guide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with a custom domain

### Render

1. Create a new Static Site on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Netlify

1. Push to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Build settings will be auto-detected
4. Deploy

## Calendly Integration

To enable the booking calendar:

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Get your scheduling link
3. Install the react-calendly package:
   ```bash
   npm install react-calendly
   ```
4. Replace the placeholder in `app/contact/page.tsx` with:
   ```tsx
   import { InlineWidget } from "react-calendly";
   
   <InlineWidget 
     url="https://calendly.com/YOUR_USERNAME"
     styles={{ height: '600px' }}
   />
   ```

Alternatively, use [Cal.com](https://cal.com) for open-source scheduling.

## Customization

### Colors

The Saudi green and gold theme is defined in `tailwind.config.js`:

```javascript
colors: {
  saudi: {
    green: '#006C35',
    'green-dark': '#004d26',
    'green-light': '#1a8550',
    gold: '#C5A028',
    'gold-light': '#e6c55c',
    'gold-dark': '#9a7b1a',
  },
}
```

### Images

Replace the Unsplash images in the components with your own by updating the `src` attributes.

### Content

Update the content in each page component to match your services and messaging.

## SEO

SEO metadata is configured in:
- `app/layout.tsx` - Global metadata
- Each page's `metadata` export - Page-specific metadata

Update the following for your domain:
- Site URL
- Open Graph images
- Keywords
- Descriptions

## License

MIT License - feel free to use for your own projects.

## Support

For questions or customization requests, contact info@saudipropertyguide.com
