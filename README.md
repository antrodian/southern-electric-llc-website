# Southern Electric LLC website

This is the one-page Southern Electric LLC website. [AGENTS.md](AGENTS.md) records confirmed business details, content boundaries, and remaining questions.

## Preview locally

Open `index.html` directly, or run this from the folder:

```sh
python3 -m http.server 4173
```

Visit <http://localhost:4173>. No installation is required.

## Current site

- The main service categories appear in owner-requested order: commercial, residential, then industrial electrical work.
- A secondary section covers pool, spa, and fountain electrical installations; Alternative Energy and Backup Power Integration; and RV campground electrical service installations. The power integration copy distinguishes installation work from equipment sales.
- The hero cycles through Businesses, Homes, and Industry with clipped text reveals, a numbered indicator, and a moving red marker. Reduced-motion preferences show the first category without animation.
- The site has responsive navigation, direct phone and email links, and a project inquiry form. The form opens a prefilled email draft; the visitor must send it from their email app.
- “God, Country, and Craftsmanship” and the veteran-owned statement remain prominent. The text wordmark and abstract artwork remain until approved company assets arrive.
- The owner declined to publish service-area details. The owner's private project anecdote is not used on the page.

## Deployment

The public repository is `antrodian/southern-electric-llc-website`. Netlify deploys the `main` branch to <https://southernelectricllc.netlify.app/>. Root `netlify.toml` copies only website files into `dist`; the working brief and private source material are not part of the published site.
