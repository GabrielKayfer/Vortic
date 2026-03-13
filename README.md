# Vortic

Vortic is a contemporary sports storefront concept built as a marketplace with editorial structure, product storytelling, and lightweight shopping flows.

The current branch goes beyond a landing page. It now includes a stronger home experience, a more concrete catalog and product detail flow, and initial cart, favorites, and search routes.

## Highlights

- Responsive storefront with marketplace plus editorial positioning
- Home page structured into brand, categories, products, guides, app concept, community, and CTA
- Expanded catalog and product detail experience with richer product data
- Initial cart, favorites, and search pages
- Client-side cart and favorites state persisted with `localStorage`
- Feature-based React architecture with shared hooks and route helpers
- Design tokens ready for future identity refinement

## Current experience

The front-end currently includes:

- Home page with stronger product and brand narrative
- Catalog page with active shelf presentation and editorial sidebar
- Product detail page with specs, contextual notes, and related items
- Favorites page
- Cart page
- Search page
- Global header and footer
- Hash-based section navigation for home sections

## Routes

- `/` home
- `/catalogo` catalog
- `/produto/:slug` product detail
- `/favoritos` favorites
- `/carrinho` cart
- `/buscar` search

## State and interaction

Current interactive behavior includes:

- favorites persisted in browser storage
- cart persisted in browser storage
- quantity and subtotal handling in cart context
- product-to-cart and product-to-favorites mapping
- route-aware hash navigation for home sections

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- styled-components

## Project structure

```text
src/
  app/                Providers, route config, route helpers, app hooks
  assets/             Product, category, symbol, and brand images
  components/         Shared layout and UI primitives
  features/
    cart/             Cart context, hooks, and types
    catalog/          Product data, hooks, utils, and UI
    favorites/        Favorites context, hooks, and types
    home/             Home sections and content
  pages/              Route-level pages
  shared/             Shared hooks and storage utilities
  styles/             Theme, tokens, and global styles
  types/              Shared app-level types
  utils/              Generic helpers
```

## Design approach

The visual system is still token-driven and intentionally flexible. Final brand palette and typography can still evolve without forcing a layout rewrite.

Current design principles:

- strong hierarchy
- cleaner product framing
- editorial rhythm
- premium but restrained presentation
- clearer sense of brand ownership
- scalable section composition

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

The current branch builds successfully with:

```bash
npm run build
```

## Deploy

This project is ready for static deployment platforms such as Vercel.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS

## Roadmap

Short term:

- make catalog filters fully functional
- improve search behavior and query handling
- connect the storefront to a real data source
- refine asset optimization and image weight

Mid term:

- expand cart and favorites flows
- add product variants and stock-aware behavior
- improve empty, loading, and error states
- define final brand palette and typography

Later:

- add tests
- add analytics and monitoring
- prepare a stronger deployment and preview workflow

## Repository status

This repository now represents an expanded storefront foundation with early product interactions, not just a visual concept page. It is still evolving and is not yet a finished production commerce system.
