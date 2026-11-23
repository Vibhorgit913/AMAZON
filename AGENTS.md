# Repository Guidelines

## Project Structure & Module Organization

This repository is a client-side React application built with Vite. Application code and styles live in `src/`: `App.jsx` and `App.css` define the main screen, while `main.jsx` and `index.css` provide the entry point and global styles. Static files served as-is belong in `public/` (for example, `icons.svg` and `favicon.svg`). The root contains `index.html`, `vite.config.js`, and npm configuration. There are currently no test directories or test files.

## Build, Test, and Development Commands

Run commands from the repository root (`amazon/`):

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the built bundle locally for review.
- `npm run lint` checks source files with Oxlint.

No automated test command is configured. Run the build and lint commands before submitting changes; add a test framework and script if a change needs automated coverage.

## Coding Style & Naming Conventions

Use JavaScript modules and React function components. Follow the existing two-space indentation, semicolon, and single-quote style in JSX and JavaScript. Use PascalCase for component names and filenames (for example, `ProductCard.jsx`); use camelCase for variables and functions. Keep component-specific styles near their component, and place shared page-wide rules in `index.css`. Preserve the configured React hooks lint rule; fix lint errors rather than suppressing them without a clear reason.

## Testing Guidelines

There is no test framework, coverage requirement, or test naming convention in the current project. For UI changes, check the affected screen in `npm run dev`, then run `npm run lint` and `npm run build`. If tests are introduced, name them after the component or behavior and add a documented npm script.

## Commit & Pull Request Guidelines

Git history is not available in this checkout, so no established commit format can be verified. Use a short imperative commit subject, such as `Add product filter controls`. Pull requests should explain the user-visible change, list validation commands run, link any related issue, and include screenshots for visual changes.

## Security & Configuration

Do not commit credentials, tokens, or local environment files. Keep dependencies locked with `package-lock.json`, and place public assets in `public/` only when they are intended to be served directly.
