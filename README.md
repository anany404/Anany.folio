# Portfolio React

This is the React (Vite) version of Anany's portfolio website.

## Project Structure

```
portfolio-react/
├── index.html              # Entry HTML (Vite entry point)
├── vite.config.js          # Vite configuration
├── package.json
├── public/                 # Static assets (served as-is)
│   ├── css/                # Original stylesheets
│   ├── fonts/              # Original font files
│   ├── img/                # Images and icons
│   └── js/                 # Original JS libraries (libs.min.js, app.js, gallery-init.js)
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component (loads scripts, assembles layout)
    └── components/
        ├── Loader.jsx
        ├── Header.jsx
        ├── Avatar.jsx
        ├── StarIcon.jsx
        ├── HomeSection.jsx
        ├── PortfolioSection.jsx
        ├── AboutSection.jsx
        ├── ResumeSection.jsx
        ├── ContactSection.jsx
        └── PhotoSwipe.jsx
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Notes

- All original CSS, fonts, images, and JS libraries are preserved unchanged in `public/`.
- The original `index.html` content has been converted to React JSX components.
- External scripts (`libs.min.js`, `app.js`, `gallery-init.js`) are loaded dynamically via `useEffect` in `App.jsx` after the DOM is ready, preserving all original animations and functionality.
- No content has been changed — only the structure has been migrated to React.
