# Rasol Alkhair

An umbrella website showcasing innovative products and professional services. Built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Portfolio**: Showcase your projects and achievements
- **Blog**: Share insights and updates
- **Services Booking**: Custom form for service inquiries (Consulting & Development)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Built with Astro for optimal speed
- **Easy Content Management**: Markdown-based blog and portfolio with type-safe schemas

## 📁 Project Structure

```
rasol-alkhair/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation header
│   │   └── Footer.astro        # Site footer
│   ├── content/
│   │   ├── blog/               # Blog posts (Markdown)
│   │   ├── portfolio/          # Portfolio items (Markdown)
│   │   └── config.ts           # Content collections schema
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── portfolio.astro     # Portfolio grid
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog listing
│   │   │   └── [slug].astro    # Individual blog posts
│   │   └── services.astro      # Services & booking form
│   └── styles/
│       └── global.css          # Tailwind CSS imports
├── public/                     # Static assets
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, content-focused web framework
- **Language**: TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Forms**: [EmailJS](https://www.emailjs.com/) for booking form submissions
- **Deployment**: GitHub Pages via GitHub Actions
- **Content**: Markdown with Zod schema validation

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohammedbie/rasol-alkhair.git
cd rasol-alkhair
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Available Commands

## 📝 Available Commands

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run astro`   | Run Astro CLI commands                       |

## 📧 Email Configuration (EmailJS)

To enable the booking form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template for booking requests
4. Update the credentials in `src/pages/services.astro`:

```javascript
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

### Email Template Variables

Your EmailJS template should include these variables:

- `{{name}}` - Customer name
- `{{email}}` - Customer email
- `{{phone}}` - Customer phone
- `{{service}}` - Service type (Consulting or Development)
- `{{datetime}}` - Preferred date/time
- `{{message}}` - Customer message

## ✍️ Adding Content

### Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: 2026-01-20
tags: ["tag1", "tag2"]
image: "/images/post-image.jpg" # Optional
---

Your blog post content here...
```

### Portfolio Items

Create a new Markdown file in `src/content/portfolio/`:

```markdown
---
title: "Project Name"
description: "Project description"
date: 2026-01-20
tags: ["web", "development"]
image: "/images/project.jpg" # Optional
url: "https://project-url.com" # Optional
---

Project details and description...
```

## 🚀 Deployment

### GitHub Pages (Automated)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mohammedbie/rasol-alkhair.git
git push -u origin main
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

3. The site will automatically deploy on every push to `main` branch

### Site URL

- **Live Site**: [https://mohammedbie.github.io/rasol-alkhair/](https://mohammedbie.github.io/rasol-alkhair/)

## 🎨 Customization

### Colors

The site uses a blue color scheme by default. To change colors, update Tailwind classes in components and pages.

### Service Categories

To modify service options, edit the dropdown in `src/pages/services.astro`:

```html
<option value="Consulting">Consulting</option>
<option value="Development">Development</option>
<!-- Add more options -->
```

## 📦 Future Enhancements

- [ ] DecapCMS integration for easier content editing
- [ ] Custom domain setup
- [ ] Enhanced portfolio filtering by tags
- [ ] Blog features (RSS feed, reading time estimates)
- [ ] Dark mode support
- [ ] Search functionality

## 📄 License

Copyright © 2026 Rasol Alkhair. All rights reserved.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
