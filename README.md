# Nicole Bustos · Personal Portfolio

A little code, a little creativity, and a place to share what I’m building.

I’m Nicole, a computer science student at the University of Central Florida. This is the source for my personal portfolio, inspired by Persona’s expressive menus and my love of art, music, and cockatiels.

## A work in progress

The site is in early development. The current version has an entry screen, a menu skeleton, a cockatiel logo, and a sage green, pink, and cream palette. Some artwork and content are still placeholders.

I’m drawing the opening scene myself: a seated portrait that will transition into a closer view with the portfolio menu beside it. The illustration, camera movement, and subtle hair animation are planned work, with layouts adapted for desktop and mobile.

## Built with

- Next.js App Router, React, and TypeScript
- Tailwind CSS and custom CSS
- Vercel for hosting and pull-request previews
- GitHub Actions for lint and production-build checks

## Run locally

Use Node.js 22 and npm, matching the version configured in CI.

```sh
git clone https://github.com/nickycodezz/personal-port.git
cd personal-port
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). If that port is occupied, use the local address printed in the terminal.

```sh
npm run lint   # Check code quality
npm run build  # Create and type-check the production build
npm run start  # Serve the production build after building
```

## Project structure

```text
app/
  page.tsx       Entry screen and menu
  layout.tsx     Shared layout, fonts, and metadata
  globals.css    Palette and shared styles
public/          Static assets, including the cockatiel logo
.github/         Automated checks and pull-request template
AGENTS.md        Project guidance for AI-assisted development
```

## How changes are reviewed

Development happens in small changes on separate branches. Each pull request is checked by GitHub Actions and gets a Vercel preview so the appearance and behavior can be reviewed before merging. AI review feedback is evaluated alongside those checks and manual testing.

I review the result before merging into `main`. Finished branches are removed after merging.

## Art direction

The aim is a personal, Persona-inspired experience that stays easy to navigate and quick to load. The opening artwork will be my own layered illustration; buttons and menu text stay separate from the drawing so they remain readable and usable across screen sizes.

Persona is a visual inspiration. This portfolio is an independent personal project and is not affiliated with Atlus or Sega.
