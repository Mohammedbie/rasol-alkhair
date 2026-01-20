# Rasol Alkhair - Copilot Instructions

## Project Overview
Rasol Alkhair is an umbrella website showcasing different products with portfolio, blog, and services booking capabilities.

## Tech Stack
- **Framework**: Astro with TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Forms**: EmailJS for booking form submissions
- **Deployment**: GitHub Pages (mohammedbie.github.io/rasol-alkhair/)
- **Content**: Markdown-based content collections

## Development Guidelines
- Use TypeScript strict mode for all `.ts` and `.astro` files
- Follow Astro's content collections pattern for blog and portfolio
- Keep components simple and reusable
- Use Tailwind utility classes for styling
- Implement responsive design (mobile-first)
- Validate form inputs client-side before EmailJS submission

## Service Categories
- Consulting
- Development

## Content Structure
- **Blog**: Markdown files in `src/content/blog/`
- **Portfolio**: Markdown files in `src/content/portfolio/`
- Frontmatter: title, date, description, image, tags

## Booking Form Fields
- Name (required)
- Email (required)
- Phone (required)
- Service Type (dropdown: Consulting, Development)
- Preferred Date/Time (required)
- Message (textarea, required)

## Build Configuration
- Base path: `/rasol-alkhair/`
- Site URL: `https://mohammedbie.github.io/rasol-alkhair/`
- Deploy target: GitHub Pages via GitHub Actions

## Future Enhancements
- DecapCMS integration for non-technical content editors
- Custom domain migration
- Enhanced portfolio filtering
- Blog features (RSS, reading time)
