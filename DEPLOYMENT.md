# Deploy Rayne Motors

This is a static site: no build command and no server is required.

## Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, create a project from that repository.
3. Framework preset: None.
4. Build command: leave empty.
5. Build output directory: `/` (or the repository root).
6. Deploy.
7. Cloudflare will assign a free `*.pages.dev` address.

## GitHub Pages
1. Push the folder contents to a GitHub repository.
2. Repository Settings → Pages.
3. Deploy from the `main` branch and `/` root.
4. GitHub will provide a free `*.github.io` address.

## Netlify
Drag the project folder into Netlify Drop, or connect the GitHub repository. No build command is required.
