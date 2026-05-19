# Davis Center for Child Development — Website

Plain HTML/CSS/JS static site. No build step required.

## Structure

```
/
├── index.html          Home
├── about.html          About / Mission / History
├── programs.html       7 age-group classrooms
├── staff.html          Staff directory (update with real names & bios)
├── contact.html        Tour/waitlist form + location
├── css/
│   └── styles.css      All styles (design tokens, layout, components)
├── js/
│   └── script.js       Mobile nav toggle + form handling
├── assets/
│   └── logo-nav.svg    Cropped logo (no tagline)
└── images/
    ├── toddler-hero.jpg
    ├── playground-girls.jpg
    ├── founded-1995.jpg
    ├── sign-front.jpg
    └── sign-angle.jpg
```

## Before Going Live

1. **Staff page** — Open `staff.html` and replace every placeholder card with real names, titles, and bios.

2. **Contact form** — Create a free [Formspree](https://formspree.io) account, create a form, and replace `YOUR_FORM_ID` in `contact.html` with your actual endpoint.

3. **Address** — The site uses `550 Orchard Pkwy, Knoxville, TN 37918` (from the physical sign). If the correct address differs, update it in `contact.html` and in the `<footer>` of all five pages.

4. **Hours** — Update the hours in `contact.html` if the defaults are wrong.

5. **Map embed** — The Google Maps embed in `contact.html` uses the address above. If you need a more precise pin, go to [maps.google.com](https://maps.google.com), find the location, click Share → Embed a map, and replace the `<iframe src>` in `contact.html`.

6. **Phone number** — Add a phone number to the contact page and footer if desired.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (already done).
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**.
3. Select the `DavisCenter/website` repository.
4. **Build settings:** Leave the build command blank. Set the output directory to `/` (root).
5. Click **Save and Deploy**.
6. To connect your custom domain (`daviscentercd.org`): go to your project → **Custom domains** → add the domain and follow Cloudflare's DNS instructions.

No build command is needed — Cloudflare Pages serves static files directly.

## Typography

- **Fraunces** (variable serif) — headings, blockquotes, display numbers. Loaded from Google Fonts.
- **Public Sans** — body text, UI, nav. Loaded from Google Fonts.

Both are loaded with `display=swap` so text remains visible while fonts load.

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--brand-blue` | `#336699` | Primary CTAs, links |
| `--brand-teal` | `#5B9EAD` | Accent backgrounds |
| `--brand-green` | `#7AB372` | Secondary CTAs, underlines |
| `--paper` | `#FBF8F2` | Page background |
| `--ink` | `#1B2A3D` | Body text |
