# Aaron Gulzar Portfolio

A static personal portfolio website for Aaron Gulzar, built for GitHub Pages.
The site presents education, skills, experience placeholders and selected
projects across data science, machine learning, information retrieval, neural
networks and software development.

Live GitHub Pages URL:

```text
https://aarongulzar.github.io/portfolio/
```

## Project overview

This portfolio is intentionally lightweight:

- Plain HTML, CSS and JavaScript
- No backend
- No build step
- Relative paths so it works from the `/portfolio/` GitHub Pages subpath
- Responsive layout for desktop, tablet and mobile
- Dark and light mode
- Accessible colour contrast and keyboard-friendly navigation
- Motion reduced for users who prefer reduced motion

## Local preview

You can open `index.html` directly in a browser, or run a small local static
server from the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## GitHub Pages deployment

This repository is intended to deploy from:

- Branch: `main`
- Folder: repository root

In GitHub, check:

1. Go to **Settings** → **Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select the `main` branch.
4. Select the `/ (root)` folder.
5. Save.

After GitHub Pages finishes deploying, the site should be available at:

```text
https://aarongulzar.github.io/portfolio/
```

## Folder structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── assets/
│   ├── images/
│   │   └── .gitkeep
│   └── cv/
│       └── aaron-gulzar-cv.md
└── projects/
    ├── information-retrieval.html
    ├── cnn-image-classification.html
    ├── disease-prediction.html
    └── stud-safari.html
```

## Updating content

- LinkedIn: <a href="https://www.linkedin.com/in/aaron-gulzar-b1b613243/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aaron-gulzar-b1b613243</a>
- Update `assets/cv/aaron-gulzar-cv.md` or replace it with a PDF when your CV is ready.
- Add project links, screenshots or implementation notes only when you want to publish them.
