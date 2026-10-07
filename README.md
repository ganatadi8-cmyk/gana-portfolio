# Ganapathi Tadi — 3D Portfolio

A responsive developer and creator portfolio with a continuous, real-time 3D environment and scroll-driven camera transitions.

**Live portfolio:** https://gana-portfolio-main.vercel.app/

## Technologies used

| Technology | Role |
| --- | --- |
| HTML5 | Semantic content, navigation, project sections and contact links |
| CSS3 | Responsive layouts, translucent panels, portrait effects and visual styling |
| Vanilla JavaScript | Scroll tracking, chapter navigation, pointer interaction and motion controls |
| Three.js | 3D scene, geometric objects, materials, lights and perspective camera |
| WebGL | Browser rendering of the Three.js scene |
| requestAnimationFrame | Animation loop and smooth camera updates |
| Google Fonts | DM Sans and Space Grotesk, with system font fallbacks |
| Git / GitHub | Source control and project repository |
| Vercel | Production static website hosting and deployment |

The current implementation uses a locally bundled Three.js library. It does not use React, Next.js, a backend server or a database.

## Features

- A continuous 3D landscape behind the portfolio sections.
- Scroll-driven camera transitions across Introduction, Work, About, Skills, Journey, Creative Studio and Contact.
- Crystal sculpture, orbit rings, geometric field, floor and particle effects.
- Hemisphere and directional lighting, fog and material shading.
- Pointer-based camera parallax and a chapter indicator.
- Motion on/off control and automatic reduced-motion support.
- A readable fallback when WebGL is unavailable.
- Responsive layouts and capped rendering resolution for smaller screens.
- Personal photograph, project repositories, LinkedIn and email links.
- Smart Study Hub, Daily Diary, House Price Predictor, CV AI Resume, Student Performance Intelligence and the ViewSure proposal.
- Creative Studio content covering freelance editing and an original short film.
- Keyboard-accessible links, focus indicators and a skip-to-content link.

ViewSure is a proposal; the portfolio does not claim benchmark results for it.

## Run locally

Serve the repository directory:

```bash
python -m http.server 8000
```

Open http://localhost:8000. No build step is required. A browser with WebGL support is needed for the real-time 3D scene.

## Active files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, content, base styles and motion controls |
| `immersive.css` | Current immersive theme and responsive overrides |
| `scene.js` | Three.js scene, camera transitions, animation and fallback |
| `chapters.js` | Scroll chapter indicator and active navigation |
| `vendor/three.min.js` | Locally bundled Three.js library |
| `vendor/THREE-LICENSE.txt` | Three.js MIT license |
| `ganapathi.jpg` | Profile photograph |

`style.css`, `portrait.css` and `scroll.js` are retained from the earlier design and are not loaded by the current page.

## Editing

- Edit profile details, projects and contact links in `index.html`.
- Adjust the current appearance in `immersive.css`.
- Change geometry, lighting and camera stops in `scene.js`.
- Keep section IDs synchronized across `index.html`, `scene.js` and `chapters.js`.
- Replace `ganapathi.jpg` to update the photograph.

## Hosting

The current production portfolio is hosted on **Vercel**:

https://gana-portfolio-main.vercel.app/

The production project is `gana-portfolio-main`; this GitHub repository is used for its deployment updates. The earlier ChatGPT Sites publication is a separate, older publication and is not the current production link.

## Verification status

JavaScript syntax, local asset references, internal links and duplicate-ID checks passed for the redesign. The production deployment reached READY, and the public page, scene script and Three.js library returned HTTP 200. Full visual, mobile and interaction testing remains pending; deployment success alone does not establish that every browser renders the scene correctly.
