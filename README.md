# Vortic

Vortic is a contemporary sports marketplace front-end concept that blends commerce, editorial structure, and brand ecosystem storytelling in a single responsive experience.

The current version focuses on a high-fidelity home page for a sports brand with a more premium and human tone than a conventional online store.

## Highlights

- Editorial home page with seven structured sections
- Responsive layout for desktop, tablet, and mobile
- Marketplace-oriented product curation
- Sports categories, guides, community, and conceptual app layer
- Design tokens ready for future brand color and typography changes
- Feature-based React project structure for continued growth

## Experience scope

The current front-end includes:

- Hero section with strong brand framing
- Sports category navigation
- Featured product showcase
- Sports guide/editorial section
- Conceptual app support block
- Community and lifestyle storytelling section
- Final call-to-action section
- Base catalog and product routes

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- styled-components

## Project structure

```text
src/
  app/          App providers and routing
  assets/       Local images and symbols used by the interface
  components/   Shared layout and UI primitives
  features/     Feature-based sections such as home and catalog
  pages/        Route-level pages
  services/     Service abstraction for future data integration
  styles/       Theme, tokens, and global styles
  types/        Shared types
  utils/        Helper utilities
```

## Design approach

This phase intentionally avoids locking the final brand identity.

The interface is built around replaceable tokens so the final palette, typography, and visual refinements can be changed later without rebuilding the layout system.

Current design principles:

- strong hierarchy
- clean composition
- generous spacing
- editorial rhythm
- restrained premium feel
- scalable section architecture

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Local setup

```bash
npm install
npm run dev
```

## Production build

The project currently builds successfully with:

```bash
npm run build
```

## Deploy

This project is ready for static front-end deployment platforms such as Vercel.

Suggested flow:

```bash
npm install
npm run build
```

Deploy the generated output from `dist/`, or connect the repository directly to a hosting provider that supports Vite projects.

Recommended build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node environment: current LTS

## Roadmap

Short term:

- expand catalog coverage with more products and grouping logic
- connect home and catalog to a real service/data source
- improve anchor navigation behavior across routes
- define final brand palette and typography

Mid term:

- add filters, search, and category-driven browsing
- enrich product detail pages
- add shared state for favorites and cart
- introduce loading, empty, and error states

Later:

- add tests
- integrate analytics and performance monitoring
- prepare deployment pipeline and preview workflow

## Repository status

This repository currently represents a front-end foundation in active evolution, not a finished production marketplace.
