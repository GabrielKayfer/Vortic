# Vortic

Vortic is a contemporary sports brand front-end concept built as a marketplace plus editorial experience. The current delivery focuses on a responsive home page that connects products, sports categories, guides, community, and a conceptual app layer in a single visual system.

## Current scope

- Responsive home page with editorial composition
- Category navigation for sports modalities
- Featured product curation
- Sports guide/content sections
- Conceptual app support section
- Community and lifestyle storytelling blocks
- Catalog and product detail base routes

## Stack

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

## Design direction

This phase intentionally does not lock the final brand identity. Visual decisions are organized through tokens so the palette and typography can be replaced later without rebuilding the layout structure.

Current interface principles:

- clear visual hierarchy
- generous spacing
- editorial composition
- premium but restrained presentation
- reusable sections prepared for future evolution

## Available scripts

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

## Build status

Production build is currently passing with:

```bash
npm run build
```

## Next evolution

- expand catalog data and category coverage
- connect pages to a real data source
- refine navigation and anchor behavior
- define final brand palette and typography
- add tests and deployment workflow
