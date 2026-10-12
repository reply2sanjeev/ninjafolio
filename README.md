# azureninjas.in — v2 "Security Ninja"

Personal portfolio of Sanjeev Rana. React 18 + Vite, plain CSS, no UI framework.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # outputs static site to dist/
npm run preview    # serve dist/ locally to check it
```
`dist/` is plain static files with relative paths, so it can go on GitHub Pages,
Azure Static Web Apps, Azure Storage static website, or an IIS site as-is.
A prebuilt `dist/` is included in this package.

- GitHub Pages: `npm run deploy` (publishes dist/ to the gh-pages branch; public/CNAME is set to www.azureninjas.in)
- IIS: copy the contents of dist/ into the site root. No URL rewrite is needed — the site is a single page with #anchors.

## Edit content
Everything you'd change lives in **src/portfolio.js**: name, summary, resume link,
skills, experience, certifications, training, contact. Logos go in `src/assets/images/`
and are referenced by file name.

- Turn the katana intro off: `settings.showIntro = false`
- Certification filter tabs come from each cert's `group` field.

## Structure
```
src/
  portfolio.js        content
  styles.css          design tokens + all styles
  components/         Intro, Nav, Hero (KQL terminal), Skills, Experience,
                      Certifications, Training, Contact, Icon
  assets/images/      photo + logos
public/               favicon, icons, og-image, manifest, CNAME
```
