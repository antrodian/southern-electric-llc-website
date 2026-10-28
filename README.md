# Southern Electric LLC website

This is the Southern Electric LLC landing page for owner review. Read [AGENTS.md](AGENTS.md) for the staged brief, confirmed details, and open questions. Approved photos and hosting details are needed for the next content and contact upgrades.

## Preview locally

Open `index.html` in a browser. Alternatively, from this folder, run:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173> in a browser. No installation or build step is required.

## Connect to Netlify

The GitHub repository is private. In Netlify, choose **Add new project → Import an existing project → GitHub**, then select `antrodian/southern-electric-llc-website` and the `main` branch. The committed `netlify.toml` sets the build command and `dist` publish directory. It copies only the website files into the published site; `AGENTS.md` and this README are not published.

Review the draft and confirm the remaining business content before making the Netlify site public. The inquiry form currently opens an email draft; it is not a hosted submission form.

## Current state

- Responsive home page with a hero, services, a light craftsmanship section, company values, contact section, footer, working section navigation, and a phone contact bar.
- The owner confirmed residential and commercial work, the phrase “God, Country, and Craftsmanship,” the veteran-owned statement, and the displayed phone and email. The service examples come from the [existing website](https://www.southernelectric-llc.com/about-us/). That site does not provide a fuller service list.
- Phone and email links use the owner-confirmed values. The old site's actual link destinations were placeholders; the new draft fixes those destinations.
- The owner asked to omit service-area information. Company photos approved for publication, an official logo, and final brand choices still need owner input.
- The project inquiry form opens a prefilled draft in the visitor's email app. It does not send or store a submission on the website. Direct phone and email links remain available.
- The October 27 redesign gives the site a rugged, minimalist industrial feel: matte near-black surfaces, off-white monospaced type, flat rules, service rows, and a restrained red accent. The veteran-owned statement and “God, Country, and Craftsmanship” provide a subtle patriotic note. The colors are a design proposal until the owner approves the final brand palette.
- The page includes continuous hero current with a pause/play control, animated hover and press feedback, service rows that reveal on scroll, page progress, active navigation, and a connected red scroll path through services, the lighter craftsmanship section, company values, and contact actions. Motion is disabled for reduced-motion preferences, and content remains visible without JavaScript. The text wordmark remains until the official logo arrives.
- The light section now uses abstract circuit artwork and complete copy. Visible empty photo frames were removed. An authentic photo-led hero and project spotlights will be added when the owner supplies approved images and accurate descriptions; no project imagery is fabricated.

Edit the page in `index.html`, the visual styles in `styles.css`, and the mobile navigation in `main.js`.
