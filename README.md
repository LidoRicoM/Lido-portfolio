# 🚀 Manuel Lidó Rico - Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat&logo=tailwind-css)

Modern and innovative portfolio website showcasing my work as a Web Developer & Software Engineer. Built with cutting-edge technologies and featuring unique interactive elements.

## ✨ Features

### 🎨 Innovative Design
- **Custom Particle System** - Interactive animated particles with dynamic connections
- **Magnetic Buttons** - Buttons that follow your cursor with smooth spring animations
- **Custom Cursor** - Enhanced cursor with magnetic effects on interactive elements
- **Morphing Shapes** - Organic animated shapes that constantly transform
- **Gradient Animations** - Smooth, flowing gradient effects throughout

### 🌓 Theme System
- **Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- **System Preference Detection** - Automatically adapts to your system theme
- **Persistent Preferences** - Remembers your theme choice

### 📱 Responsive & Accessible
- **Mobile-First Design** - Optimized for all screen sizes
- **Touch-Friendly** - Gestures and interactions work perfectly on touch devices
- **Keyboard Navigation** - Full keyboard support for accessibility
- **Screen Reader Compatible** - Proper ARIA labels and semantic HTML

### 🎯 Sections
- **Hero** - Eye-catching introduction with typing animation
- **About** - Professional summary and skill showcase with progress bars
- **Projects** - Featured projects with live demos and source code
- **CV** - Comprehensive resume with education and experience
- **Contact** - Get in touch form with multiple contact methods

### ⚡ Performance
- **Optimized Animations** - Smooth 60fps animations using Framer Motion
- **Lazy Loading** - Images and components load on demand
- **Code Splitting** - Efficient bundle sizes for faster load times
- **SEO Optimized** - Proper meta tags and semantic structure

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Animations
- **Framer Motion** - Production-ready animation library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icons

### Development
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS transformations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LidoRicoM/manuel-portfolio.git
cd manuel-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 📂 Project Structure

```
manuel-portfolio/
├── app/                    # Next.js App Router
│   ├── cv/                # CV page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (Radix UI)
│   ├── custom-cursor.tsx # Custom cursor
│   ├── particles.tsx     # Particle system
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects section
│   ├── contact.tsx       # Contact section
│   └── ...
├── public/               # Static assets
└── ...
```

## 🎨 Key Components

### Particles System
Animated particle system with:
- Dynamic particle generation based on screen size
- Connection lines between nearby particles
- Smooth movement with velocity
- Color gradients matching the theme

### Custom Cursor
Enhanced cursor experience:
- Follows mouse position with spring physics
- Grows on hover over interactive elements
- Mix-blend-mode for unique visual effect
- Trail effect for depth

### Visual Effects
- **Gradient Text** - Animated gradient text with glow
- **Floating Elements** - Organic floating animations
- **Parallax** - Depth-based scroll effects
- **Reveal on Scroll** - Elements animate in when visible

## 📝 Customization

### Colors
Edit `app/globals.css` to customize the color palette:
- `--accent` - Primary accent color (turquoise)
- `--background` - Background color
- `--foreground` - Text color

### Content
- Update personal information in `components/hero.tsx`
- Modify projects in `components/projects.tsx`
- Edit CV details in `app/cv/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The project works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## 📧 Contact

- **Email**: lidoricom@gmail.com
- **LinkedIn**: [Manuel Lidó Rico](https://www.linkedin.com/in/manuel-lidó-rico-650345242/)
- **GitHub**: [@LidoRicoM](https://github.com/LidoRicoM)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- UI components from Radix UI
- Icons from Lucide React
- Fonts: Inter & JetBrains Mono

---

Made with ❤️ by Manuel Lidó Rico

