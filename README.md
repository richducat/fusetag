# Fusetag UI Preview

This project is a Next.js app showcasing a simplified, Google-inspired connection hub UI.

## Getting a live preview
1. Install dependencies (already vendored via `package-lock.json`):
   ```bash
   npm install
   ```
2. Start the development server on an externally reachable host:
   ```bash
   npm run dev
   ```
   The UI will be available at `http://localhost:3000`.

For a production-like preview, build then start:
```bash
npm run preview
```

## GitHub Pages live demo

This repo ships with a GitHub Actions workflow (`.github/workflows/gh-pages.yml`) that statically
exports the Next.js app and publishes it to GitHub Pages on each push to `main` or when manually
triggered.

To enable the live preview:
1. Push this repository to GitHub.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main` (or run **Actions → Deploy preview to GitHub Pages → Run workflow**).
4. After the workflow finishes, the published URL will be visible in the job summary
   (typically `https://<your-username>.github.io/<repo-name>/`).

You can also generate the static export locally to inspect what gets deployed:
```bash
npm run build
npm run export
ls out  # contains the pages served by GitHub Pages
```
