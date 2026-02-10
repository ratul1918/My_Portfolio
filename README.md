
# 🚀 Futuristic Personal Portfolio

A modern, fully responsive personal portfolio website built with React, TypeScript, and Vite. Features a sleek futuristic design with interactive components, smooth animations, and a matrix rain effect.

## ✨ Features

- **⚡ Lightning Fast** - Built with Vite for instant hot module replacement and optimized builds
- **🎨 Modern UI** - Beautiful gradient designs and futuristic styling with TailwindCSS
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices
- **🎭 Interactive Components** - Smooth animations, tooltips, and engaging user interactions
- **🔤 Matrix Rain Effect** - Eye-catching matrix rain animation effect
- **📊 GitHub Stats** - Integrated GitHub statistics display
- **🎯 Multiple Sections** - Hero, About, Skills, Projects, and Contact sections
- **🌗 Modern Tooling** - TypeScript for type safety, Vite for fast development

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + CSS Modules
- **Component Library**: shadcn/ui
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Animations**: Custom CSS animations
- **Charting**: Recharts
- **Toast Notifications**: Sonner

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx              # About section component
│   ├── Contact.tsx            # Contact section with form
│   ├── FeaturedProjects.tsx   # Featured projects showcase
│   ├── FunProjects.tsx        # Fun side projects
│   ├── GitHubStats.tsx        # GitHub statistics display
│   ├── Hero.tsx               # Hero/landing section
│   ├── MatrixRain.tsx         # Matrix rain effect
│   ├── Navigation.tsx         # Navigation bar
│   ├── SectionMatrixRain.tsx  # Section divider with matrix effect
│   ├── Skills.tsx             # Skills showcase
│   ├── lib/                   # Utility components
│   │   └── ImageWithFallback.tsx
│   ├── ui/                    # shadcn/ui components
├── pages/
│   └── Home.tsx               # Main home page
├── styles/
│   ├── globals.css            # Global styles
│   └── index.css              # Main styles
├── assets/                    # Static assets
├── guidelines/
│   └── Guidelines.md          # Development guidelines
├── App.tsx                    # Main App component
├── main.tsx                   # Entry point
├── routes.ts                  # Route definitions
└── Attributions.md            # Attribution and credits
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Customization

All sections can be customized by editing component files in `src/components/`:
- **About**: `About.tsx`
- **Skills**: `Skills.tsx`
- **Projects**: `FeaturedProjects.tsx` & `FunProjects.tsx`
- **Contact**: `Contact.tsx`
- **Styling**: `src/styles/globals.css`

## 🙏 Credits

- **shadcn/ui** - Component library (MIT License)
- **Unsplash** - Free photos and images
- **Lucide Icons** - Icon library
- **Recharts** - Charting library

See [Attributions.md](src/Attributions.md) for complete attributions.

---

**Built with ❤️ using React, TypeScript, and Vite**
  