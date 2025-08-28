# Kernel Equity Website

**Technology-Powered Equity. Human-Centered Partnership.**

A modern, responsive website for Kernel Equity - a Nashville-based venture firm that partners with exceptional founders to build durable, efficient companies through hands-on product development, smart capital, and go-to-market support.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Guide](#development-guide)
- [Design System](#design-system)
- [Components Architecture](#components-architecture)
- [Routing & Pages](#routing--pages)
- [Styling Guidelines](#styling-guidelines)
- [Animation System](#animation-system)
- [Portfolio Management](#portfolio-management)
- [SEO & Performance](#seo--performance)

## 🎯 Project Overview

This is the official website for Kernel Equity, built with modern web technologies to showcase the firm's portfolio, team, and services. The site features:

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Glassmorphism effects, smooth animations, and consistent branding
- **Portfolio Showcase**: Dynamic portfolio pages with detailed project information
- **Contact Integration**: Professional contact forms and team information
- **Performance Optimized**: Fast loading times and SEO-friendly structure

## 🛠 Tech Stack

### Core Technologies
- **Framework**: [Next.js 15.5.2](https://nextjs.org/) (App Router)
- **Runtime**: React 19.1.0 with React DOM 19.1.0
- **Language**: TypeScript 5.x
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.23.12](https://www.framer.com/motion/)
- **Icons**: [Lucide React 0.542.0](https://lucide.dev/)

### Development Tools
- **Linting**: ESLint 9.x with Next.js config
- **Build Tool**: Turbopack (Next.js built-in)
- **CSS Processing**: PostCSS with Autoprefixer
- **Deployment**: [Vercel](https://vercel.com/)

### Tailwind Plugins
- **@tailwindcss/forms**: Enhanced form styling
- **@tailwindcss/typography**: Rich text formatting
- **@tailwindcss/postcss**: PostCSS integration

## 📁 Project Structure

```
kernelequity/
├── public/                          # Static assets
│   ├── *.png                       # Company logos and images
│   ├── Kernel Equity About Us.jpeg # Team/office photos
│   └── favicon.ico                 # Site favicon
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── globals.css            # Global styles and CSS variables
│   │   ├── layout.tsx             # Root layout component
│   │   ├── page.tsx               # Homepage
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page
│   │   ├── portfolio/
│   │   │   ├── page.tsx           # Portfolio overview
│   │   │   ├── [company]/         # Dynamic portfolio detail pages
│   │   │   ├── compass/
│   │   │   ├── tempo/
│   │   │   ├── hopdoc/
│   │   │   ├── plankk/
│   │   │   ├── time-miner/
│   │   │   ├── theravista-health/
│   │   │   ├── clarity-behavioural-health/
│   │   │   ├── creative-health-care-insight/
│   │   │   ├── maxxcontent/
│   │   │   ├── corecommerce/
│   │   │   ├── otherleft/
│   │   │   ├── 5-star-finds/
│   │   │   └── clearly-legal/
│   │   └── team/
│   │       └── page.tsx           # Team page
│   └── components/                # Reusable React components
│       ├── ui/                    # Base UI components
│       ├── layout/                # Layout components
│       └── sections/              # Page section components
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json               # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or later
- **Package Manager**: npm (recommended) or yarn
- **Git**: For version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jarodak/TFRSoftworks.git
   cd kernelequity
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev     # Start development server with Turbopack
npm run build   # Build production application
npm run start   # Start production server
npm run lint    # Run ESLint for code quality
```

## 💻 Development Guide

### Code Style & Standards

- **TypeScript**: Strict typing enabled for better code quality
- **ESLint**: Configured with Next.js recommended rules
- **Component Structure**: Functional components with hooks
- **File Naming**: kebab-case for files, PascalCase for components

### Git Workflow

1. Create feature branches from `main`
2. Use descriptive commit messages
3. Test locally before pushing
4. Create pull requests for review

### Environment Setup

The project uses Next.js defaults with no additional environment variables required for basic functionality.

## 🎨 Design System

### Color Palette

The site uses CSS custom properties defined in `globals.css`:

```css
:root {
  /* Charcoal - Neutral dark foundation */
  --charcoal-1: #2B2D2F;        /* Lighter charcoal for surfaces */
  --charcoal-2: #1F2022;        /* Deeper charcoal for base */
  --charcoal-3: #131416;        /* Darkest charcoal */
  
  /* Timberwolf - Neutral background + typography balance */
  --timberwolf-100: #312e24;    /* Darkest - text over light backgrounds */
  --timberwolf-500: #dad7cd;    /* Base neutral */
  --timberwolf-600: #e2dfd7;    /* Light background */
  --timberwolf-700: #e9e7e1;    /* Lighter background */
  --timberwolf-800: #f0efeb;    /* Very light background */
  --timberwolf-900: #f8f7f5;    /* Lightest background */
  
  /* Sage - Soft supporting accent (calm, approachable) */
  --sage-300: #64724c;          /* Text/icons on dark backgrounds */
  --sage-400: #859865;          /* Medium sage */
  --sage-500: #a3b18a;          /* Base sage */
  --sage-600: #b6c1a2;          /* Badges/subtle highlights */
  
  /* Hunter Green - Primary brand anchor */
  --hunter-green-100: #0c120d;  /* Darkest hunter - text on light */
  --hunter-green-500: #3a5a40;  /* Base hunter */
  --hunter-green-600: #56865f;  /* Hover states, lighter accents */
  
  /* Fern Green - Mid-tone green for secondary CTAs and UI accents */
  --fern-green-500: #588157;    /* Base fern */
  
  /* Brunswick Green - Deep supporting green */
  --brunswick-green-500: #344e41; /* Base brunswick */
}
```

### Typography

- **Primary Font**: System font stack for optimal performance
- **Headings**: Gradient text effects using brand colors
- **Body Text**: White with opacity variations (70%, 80%, 90%)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Spacing & Layout

- **Container Max Width**: `max-w-5xl` for content, `max-w-7xl` for full-width sections
- **Vertical Spacing**: `py-16 lg:py-24` for sections
- **Grid Systems**: CSS Grid and Flexbox for responsive layouts
- **Border Radius**: `rounded-2xl` for cards and buttons

### Visual Effects

- **Glassmorphism**: `bg-slate-950/35 backdrop-blur-sm ring-1 ring-white/10`
- **Gradients**: Brand color gradients for headings and CTAs
- **Shadows**: Subtle shadows for depth and hierarchy
- **Opacity**: Strategic use of opacity for text hierarchy

## 🧩 Components Architecture

### Layout Components

- **Header**: Global navigation with responsive menu
- **Footer**: Site-wide footer with contact information
- **Container**: Consistent content width wrapper

### UI Components

- **CTAButton**: Primary and secondary button variants
- **Pill**: Status badges and tags
- **Logo**: Dynamic logo component with multiple display modes
- **Motion Components**: Framer Motion wrappers for animations

### Section Components

- **Hero**: Homepage hero section with animated content
- **AboutUs**: Company information with image and text
- **Portfolio**: Portfolio grid with filtering
- **Contact**: Contact form with validation

## 🗺 Routing & Pages

### Page Structure

1. **Homepage** (`/`): Company overview, hero section, portfolio preview
2. **Portfolio** (`/portfolio`): Complete portfolio grid with filtering
3. **Portfolio Details** (`/portfolio/[company]`): Individual company pages
4. **Contact** (`/contact`): Contact form and company information
5. **Team** (`/team`): Team member profiles and information

### Dynamic Routing

Portfolio detail pages use file-based routing with specific naming conventions:
- Company names converted to lowercase
- Spaces replaced with hyphens
- Special characters removed
- Example: "Time Miner" → `/portfolio/time-miner`

### URL Generation Logic

```typescript
const generateUrl = (name: string) => 
  name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace('formerly-', '')
      .replace('kalatech', '')
      .replace(/-+$/, '');
```

## 🎭 Styling Guidelines

### Tailwind CSS Usage

- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- **Custom Properties**: CSS variables for consistent theming
- **Utility Classes**: Prefer utility classes over custom CSS
- **Component Variants**: Use conditional classes for state management

### Status Badge System

```typescript
// Active companies: Green theme
className="bg-[color:var(--sage-600)] text-[color:var(--hunter-green-100)]"

// Exited companies: Soft red theme
className="bg-red-400/20 text-red-300 ring-red-400/30"
```

### Animation Classes

- **Fade In**: `opacity-0` → `opacity-1`
- **Slide Up**: `y: 16` → `y: 0`
- **Duration**: Standard 0.8s for page elements, 0.5s for interactions
- **Easing**: `ease-out` for natural motion

## ⚡ Animation System

### Framer Motion Implementation

```typescript
// Standard page animation
const pageAnimation = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Staggered list animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Reduced Motion Support

The site respects user preferences for reduced motion:

```typescript
const reduce = useReducedMotion();
const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 16 };
```

## 📊 Portfolio Management

### Portfolio Data Structure

Portfolio companies are defined in `/src/app/portfolio/page.tsx`:

```typescript
interface PortfolioCompany {
  name: string;
  sector: string;
  status: "Active" | "Exit";
  url: string | null;
  blurb: string;
}
```

### Adding New Portfolio Companies

1. **Add to portfolio array** in `/src/app/portfolio/page.tsx`
2. **Create detail page** in `/src/app/portfolio/[company-name]/page.tsx`
3. **Add company logo** to `/public/` directory
4. **Update Logo component** mapping if needed

### Portfolio Detail Page Template

Each portfolio detail page follows this structure:
- Hero section with logo and company info
- Status badge (Active/Exit with appropriate colors)
- Website link or "No public site available" notice
- Company description and key features
- Kernel Equity's role and contributions
- Consistent styling with glassmorphism effects

## 🔍 SEO & Performance

### Current Implementation

- **Next.js App Router**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component for all images
- **Font Optimization**: System font stack for performance
- **Static Generation**: Pages pre-rendered for faster loading

### Build Configuration

The project uses Turbopack for faster builds:

```json
{
  "scripts": {
    "build": "next build --turbopack"
  }
}
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** following code style guidelines
4. **Test locally**: `npm run dev` and `npm run build`
5. **Commit changes**: Use descriptive commit messages
6. **Push branch**: `git push origin feature/new-feature`
7. **Create Pull Request**: Describe changes and testing done

### Code Review Process

- All changes require review before merging
- Ensure TypeScript compilation passes
- Test responsive design on multiple devices
- Verify animations work smoothly
- Check accessibility standards

### Common Tasks

#### Adding a New Page

1. Create page file in appropriate `/src/app/` directory
2. Follow existing page structure and styling
3. Add navigation links if needed
4. Test routing and responsive design

#### Updating Styling

1. Use existing CSS custom properties when possible
2. Follow Tailwind utility-first approach
3. Maintain consistency with design system
4. Test dark theme compatibility

#### Adding Components

1. Create in appropriate `/src/components/` subdirectory
2. Use TypeScript for props interface
3. Follow existing naming conventions
4. Include proper accessibility attributes

## 🔧 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

#### Styling Issues

- Check CSS custom property definitions in `globals.css`
- Verify Tailwind class names are correct
- Ensure responsive breakpoints are properly applied
- Test in multiple browsers

#### Animation Performance

- Reduce motion complexity for lower-end devices
- Use `will-change` CSS property sparingly
- Prefer `transform` and `opacity` for animations
- Test on mobile devices

#### TypeScript Errors

- Run `npm run lint` to check for issues
- Ensure all imports have proper types
- Check for missing dependencies in `package.json`
- Verify TypeScript configuration in `tsconfig.json`

### Performance Optimization

#### Image Optimization

- Use Next.js Image component for all images
- Provide appropriate `width` and `height` props
- Use `priority` prop for above-fold images
- Consider WebP format for better compression

#### Bundle Size

- Analyze bundle with `npm run build`
- Use dynamic imports for large components
- Remove unused dependencies
- Optimize third-party library imports


*Last Updated: August 2025*  
*Version: 1.0.0*
