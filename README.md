# Ganapathi Tadi — Portfolio

A responsive personal portfolio built with HTML, CSS and vanilla JavaScript.

## Features

- Personal photograph with a scroll-linked parallax and gentle zoom effect.
- Automatic reduced-motion support.
- Smart Study Hub project and ViewSure project proposal.
- About, skills, internship and education sections based on the supplied LinkedIn profile.
- LinkedIn, GitHub and email contact links.
- Responsive layouts, keyboard navigation and a skip-to-content link.

## Run locally

Clone this repository and open `index.html` in your browser. No build step or dependencies are required.

Alternatively, serve the folder with Python:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio content and page structure |
| `style.css` | Base theme and responsive layout |
| `portrait.css` | Photo background and profile-section styles |
| `scroll.js` | Scroll animation and reduced-motion handling |
| `ganapathi.jpg` | Supplied personal photograph |

Google Fonts is optional; system fonts are used if it cannot load.

## Editing

Update profile and project details in `index.html`. Adjust the colors and layout in the CSS files. Replace `ganapathi.jpg` to change the background photo. Change the movement range in `scroll.js` to tune the effect.

## Hosting

The files can be served by any static web host. The separate Sites publication is at https://gana-tadi-portfolio.ganatadi8.chatgpt.site and currently requires owner access. Uploading this repository does not automatically enable GitHub Pages or synchronize future edits with that publication.
