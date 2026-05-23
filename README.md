# Online Shop Project

An online storefront built with **Next.js 16**, **React 19**, and **styled-components**. Uses **Strapi CMS** as the headless backend.

> ⚠️ **Early development phase.** The homepage template is functional, but most other pages are stubs and API integration is in progress.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library:** [React](https://react.dev/) 19
- **Styling:** [styled-components](https://styled-components.com/) with a custom design system
- **Icons:** [lucide-react](https://lucide.dev/)
- **Forms:** [react-hook-form](https://react-hook-form.com/)
- **Backend:** [Strapi](https://strapi.io/) CMS (headless)
- **Language:** TypeScript (strict mode)

## Architecture

The project follows **Atomic Design** methodology:

```
components/
├── atoms/        # Basic building blocks (button, text, icon, badge, etc.)
├── molecules/    # Simple component groups (card, avatar, logo, etc.)
├── organisms/    # Complex UI sections (header, footer, slideshow, carousel, etc.)
├── templates/    # Page-level layouts (homePage, baseLayout)
└── forms/        # Form components (input, searchBar, form)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Strapi CMS backend (optional for development with hardcoded data)

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment file and adjust if needed:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Status

| Feature       | Status                           |
|---------------|----------------------------------|
| Homepage      | ✅ Complete (hardcoded demo data) |
| Header/Footer | ✅ Complete                      |
| Product List  | ⬜ Stub                          |
| Product Detail| ⬜ Stub                          |
| Login/Register| ⬜ Stub                          |
| Favorites     | ⬜ Not started                   |
| Account       | ⬜ Not started                   |
| Cart/Checkout | ⬜ Not started                   |
| API Sync      | 🔄 In progress                   |
| Tests         | ⬜ Not started                   |
| CI/CD         | ⬜ Not started                   |

## Scripts

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run start`   | Start production server  |
| `npm run lint`    | Run ESLint                |

## Environment Variables

See [`.env.example`](.env.example) for required variables.

## License

[MIT](LICENSE)
