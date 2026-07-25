# SuperSpeed.id 🏎️

Professional racing & automotive website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Home Page**: Stunning hero section with animated background, stats, and CTAs
- **Speed Shop**: Product catalog with category filtering and professional layout
- **Racing Team**: Team member profiles, stats, and championship achievements
- **Blog**: Motorsport news and insights with featured posts and newsletter signup
- **Responsive Design**: Mobile-first approach with smooth animations
- **Performance Optimized**: Built with Next.js App Router and Turbopack

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Orbitron)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

Every git push to `main` branch will trigger automatic deployment.

### Manual Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
superspeed.id/
├── app/
│   ├── page.tsx              # Home page
│   ├── speed-shop/page.tsx   # Shop page
│   ├── racing-team/page.tsx  # Team page
│   ├── blog/page.tsx         # Blog page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Red (#DC2626) to Orange (#EA580C) gradient
- **Background**: Black (#000000)
- **Text**: White (#FFFFFF) / Gray shades

### Typography
- **Display**: Orbitron (Racing/Tech vibe)
- **Body**: Inter (Clean readability)

## 🔧 Development

```bash
# Start dev server with Turbopack (faster)
npm run dev

# Type checking
npm run build

# Lint code
npm run lint
```

## 📝 Customization

### Add New Products (Speed Shop)

Edit `app/speed-shop/page.tsx` and add to the `products` array:

```typescript
{
  id: 7,
  name: "Your Product",
  category: "helmets", // or suits, gloves, shoes, parts
  price: "Rp XX.XXX.XXX",
  image: "🎯",
  badge: "New" // optional
}
```

### Add Team Members

Edit `app/racing-team/page.tsx` and add to the `teamMembers` array.

### Add Blog Posts

Edit `app/blog/page.tsx` and add to the `blogPosts` array.

## 🚀 Performance

- ⚡ Server-side rendering with Next.js 14
- 🎯 Optimized images with Next/Image
- 📦 Code splitting and lazy loading
- 🔥 Turbopack for faster builds

## 📄 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.

---

Built with ❤️ by SuperSpeed Team
