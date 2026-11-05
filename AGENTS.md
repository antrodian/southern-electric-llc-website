# Southern Electric LLC website

This file is the working brief for anyone building this website. Read it before changing the site. Keep confirmed business facts separate from design assumptions, and update this file when the owner answers an open question or approves a new stage.

## Confirmed direction

- Company name: **Southern Electric LLC**.
- Build the website in stages.
- Stage 1 is a complete, reviewable desktop landing page with working navigation and contact links. The owner wants to see the main website now and refine details later.
- **Desktop is the design target for the first stage.** Optimize the layout and review at desktop widths first. Mobile refinement is a later stage.
- Add real photographs and richer visual content in a later stage.
- The owner wants the finished website to match their exact specifications. Ask for missing business details instead of inventing them.
- The owner provided the [existing Southern Electric website](https://www.southernelectric-llc.com/) as a source for business information.
- The owner explicitly wants to keep the message **"God, Country, and Craftsmanship"**.
- On November 3, 2026, the owner identified **commercial, residential, and industrial electrical work** as the three main service categories, in that display order. Replace the featured panel troubleshooting service with industrial work. Residential work already shown is acceptable.
- The owner also confirmed three specialty capabilities for a secondary section: pool, spa, and fountain electrical system installations; **Alternative Energy and Backup Power Integration**; and RV campground electrical service installations. The energy and backup category covers integration of generators, solar, and power cells, without presenting Southern Electric as a dealer of those systems.
- On November 3, the website builder clarified that the industrial project anecdote in the owner's message was background context only. Do not include it in the website or future project plans. Keep internal business percentages, bidding strategy, and profitability details private.
- The owner confirmed **(615) 278-8256**, **tylan.southernelectricllc@gmail.com**, and the **veteran-owned and operated** statement on October 20, 2026.
- Do not include a service-area section or coverage language. The owner declined to publish service-area details at this stage.
- The owner is looking for the official logo and photos; keep the text wordmark until those assets are supplied.
- The owner wants the site to feel **nice, clean, professional, and slightly minimalist**, while communicating all useful information from the existing site. Apply the `frontend-design` and `ui-ux-pro-max` skills when making visual or interaction changes.
- The owner wants high-quality UI animation and a distinctive scroll animation that elevates the desktop website.
- On October 27, 2026, the owner requested a full **rugged, minimalist** redesign with a **subtle patriotic feel** connected to the veteran-owned company. Avoid literal flags, stars, badges, or loud red-white-blue decoration. Apply the `frontend-design` and `ui-ux-pro-max` skills to this redesign.
- The owner then asked for **many more animations and a fun, impressive feel**: a constantly running hero/banner animation, scroll animations, and animated feedback on every button or link. This supersedes the earlier preference for only brief, restrained motion; preserve the rugged visual system and reduced-motion accessibility.
- On October 28, 2026, the owner approved adding a connected scroll path, a lighter visual section, a project inquiry form, and a pause control for the continuous hero circuit. Prepare a project photo layout, but add actual photographs only after the owner supplies and approves them.
- On October 28, 2026, the owner approved the next visual pass: a photo-led hero and project spotlights once approved images arrive, a connected motion sequence through contact, phone layout polish, and a real inquiry submission once a hosting platform is selected. No publishable images or hosting choice were present in the local project when this pass began.
- On October 31, 2026, the owner asked to optimize the existing draft for a polished mobile phone experience before adding other features. Keep the rugged visual system and confirmed content while improving phone navigation, spacing, touch controls, and the inquiry flow.
- Later on October 31, 2026, the owner asked for a whole-site visual redesign because the black and red looked harsh. The current direction is calmer, minimal, and polished. This supersedes the near-black/red palette and monospaced typography; keep the confirmed business content, subtle veteran-owned cue, and working interactions.
- The owner then asked to bring red, white, and blue into the calm minimalist design and gave freedom to revise the layout. Use `frontend-design` and `ui-ux-pro-max` for this pass. Keep the palette measured and the veteran-owned reference subtle; the owner is not attached to the previous layout.
- The owner then requested finer visual polish, a reworked main hero, and impressive animation. The calmer minimalist red, white, and blue direction gave the service headline more room and made the circuit a focused supporting graphic. That version retained a pause control, which the owner later asked to remove.
- After reviewing that hero, the owner said the banner animation still did not feel right and asked for a better alternative. The circuit animation was replaced with a calm typographic sequence; reduced-motion behavior remains required. The pause control from that pass was later removed at the owner's request.
- The owner then asked to make sure the typographic hero works on both desktop and mobile and to push the finished update to GitHub for Netlify deployment. Keep the sequence readable through the transition and at narrow widths.
- On November 3, 2026, the owner asked to remove the hero animation's pause button and make the header text wordmark slightly larger. The hero sequence continues when visible and still respects reduced-motion preferences.
- The owner then selected a house and connected-lights hero experiment, but rejected it after review. Return to a polished text sequence with more interesting motion while keeping the main service headline steady. Do not restore a pause button.

- On November 4, 2026, the owner approved a full simplification and polish pass: reduce repeated content, delay the phone contact bar until after the hero, combine company/value messaging, simplify decorative elements and specialty services, and add coordinated professional animation. This supersedes the earlier page-spanning circuit, repeated slogan banners, and large progress counters. Desktop and mobile are both required review targets.
- The owner then said the header wordmark was still much too small. Make the name substantially larger, with stronger navy typography and a stacked phone layout that preserves room for the menu.
- The owner still finds the homepage cluttered and dislikes the layout. Prioritize a clean, intuitive, professional composition with a clearer hierarchy. The next local revision integrates the animated words into one hero headline, removes the separate animation panel and service numbering, uses three main service columns, presents specialty details and the inquiry form in native expandable sections, and lightens the company section. Preserve the larger wordmark and all confirmed service information.
- The owner approved this cleaner layout and requested a polished, intuitive scroll animation. Preserve the composition. Use a gentle hero lift, scroll-driven service reveals and divider drawing, and a subtle expansion of the light company backdrop. Reading content settles once; scrolling remains native, phone movement is smaller, and reduced-motion disables these effects.
- The owner expects most visitors to use phones and requested a dedicated mobile polish pass. Keep the approved clean composition, use a consistent full-width phone call action, readable body copy, earlier/smaller scroll reveals, safe-area spacing, a compact landscape menu, and form labels that clearly indicate when a phone number is required. Hide the persistent contact bar on short screens and while the keyboard reduces available space.

## Visual and UX direction

- Use a calm editorial layout: white and cool neutral surfaces, deep navy, muted red details, Helvetica-style sans-serif type, selective hairline rules, and clear spacing. Keep the main service categories in commercial, residential, industrial order. Avoid stock imagery, loud patriotic symbols, dense cards, gradients, and heavy shadows.
- The page has four main sections: hero, services, company, and contact. Use one large left-aligned hero headline with integrated animated words, followed by a supporting sentence and clear call/services actions. Avoid a separate decorative panel competing with the headline.
- The hero reads “Electrical work. For businesses / homes / industry.” using staggered letter transitions, with a stable complete heading for assistive technology. No extra animation label, progress indicator, or visible pause button is requested.
- Use coordinated motion: masked headline entrances, staggered hero letters, scroll-driven section reveals and service-rule drawing, a company-heading reveal with an expanding neutral backdrop, and responsive button/link feedback. Reveal progress is tied to the viewport and retained once read; hero/background movement is subtle and reversible. Continuous motion pauses offscreen and in background tabs. Respect reduced-motion preferences with static words and fully visible content; never take over scrolling.
- Present the three main services in a quiet three-column desktop layout that stacks on phones. Specialty names remain visible in native expandable rows beneath them. Keep the full confirmed power-integration scope and the distinction between installation services and equipment sales in the expanded content.
- Present “God, Country, and Craftsmanship” once as the prominent heading of a light neutral company section, with veteran ownership and concise prose covering integrity, precision, and safety.
- Combine direct contact details and an expandable inquiry form in one section. Direct phone and email links stay immediately visible. Inquiry links open the disclosure. The form prepares a prefilled email draft; the visitor must review and send it in their email app.
- Show the mobile call/inquiry bar after visitors pass the hero. Hide it when the contact section approaches, the menu opens, or the inquiry form has focus. Hidden bar controls are inert and unavailable to keyboard or screen-reader navigation.
- Preserve semantic HTML, readable contrast, visible focus, keyboard navigation, touch targets, browser zoom, and usable no-JavaScript fallbacks. Use approved company assets only when supplied; no photo placeholders are necessary in this version.

## Details sourced from the existing site

These were checked against the existing site on October 20, 2026. The owner confirmed the contact details and veteran-owned claim that day.

- Southern Electric describes itself as **veteran-owned and operated**. Source: [home](https://www.southernelectric-llc.com/).
- Its story specifically mentions **new construction home wiring** and **complex panel troubleshooting**. Source: [about](https://www.southernelectric-llc.com/about-us/).
- Displayed contact details: **(615) 278-8256** and **tylan.southernelectricllc@gmail.com**. The current site's underlying phone and email links point to dummy destinations. The new site uses links built from the owner-confirmed displayed values. Source: [contact](https://www.southernelectric-llc.com/contact-us/).
- The existing brand language emphasizes **God, Country, and Craftsmanship**, integrity, technical precision, and safety. The owner has confirmed the first message should remain. Source: [home](https://www.southernelectric-llc.com/).
- The existing visual style uses dark navy/purple, red, white, and a stacked text logo. Treat that as a reference, not an approved replacement design.
- The current legal notice contains unfilled template fields. Do not copy it as legal information.

## Open questions

These details remain open until the owner answers:

- Any limits or qualifications on the newly confirmed commercial, industrial, and specialty work, and future refinement of the service wording.
- Whether calling, email, or a quote form should be the primary action. The current draft retains calling as the primary action.
- The official logo, job photos, and final brand colors. The owner is looking for assets.
- Approval to publish each supplied job or team photo, plus any project details or captions the owner wants shown.
- Whether the inquiry should remain an email-draft flow or use a hosted form endpoint on the connected Netlify project.
- Example websites, if the owner has favorites, and whether the finished site should stay on one page or use separate pages. The clean, professional, slightly minimalist direction is confirmed.
- Business hours, licensing details, insurance statements, emergency availability, testimonials, and project examples, if the owner wants them displayed.
- Domain and hosting preference for a public launch.

## Stage plan

### Stage 1 — Desktop site frame

- Deliver a desktop-first home page with a clear header, navigation, hero, service overview area, about area, contact area, and footer.
- Include working navigation and keyboard access on desktop. Preserve a usable small-screen fallback, without treating mobile polish as a Stage 1 completion requirement.
- Use clearly sourced details from the existing site in the local draft; mark uncertain information in this brief and confirm it before public launch. Never present guesses as facts.
- Do not add stock photos or fabricated project imagery.
- Keep the code straightforward so later content and photos can be added without restructuring the whole site.
- Verify the page at common desktop widths, keyboard navigation, and any contact actions that are enabled.

### Stage 2 — Business content

- Refine the existing service, contact, and company copy with owner-approved details. Add hours only if the owner supplies them.
- Confirm the main call to action and implement the actual contact flow.
- Add any required legal or licensing information supplied by the owner.

### Stage 3 — Photos and polish

- Add owner-supplied logo, job photos, team photos, and project details with permission to publish them.
- Optimize images and write useful alternative text.
- Refine visual design and page copy from owner feedback.

### Stage 4 — Mobile optimization

- Refine layout, typography, spacing, navigation, and contact actions for phones and tablets. The phone pass was completed locally on October 31 with a compact header/menu, improved section layouts, larger touch controls, a safe-area-aware contact bar, and form focus behavior. A 768px tablet preview was reviewed with the typographic hero; physical device refinement remains open.
- Check the main mobile viewport sizes and touch interactions.

### Stage 5 — Launch

- Confirm domain, hosting, analytics, privacy needs, and search listing details with the owner.
- Check all links, forms, mobile layouts, performance, and accessibility before publishing publicly.

## Content rules

- Do not invent certifications, licenses, insurance, years in business, emergency service, response times, ratings, reviews, locations, or service offerings.
- Use the owner's confirmed phone number and email in the contact links.
- Do not publish service-area boundaries or coverage language unless the owner later asks for it.
- Do not copy the old site's broken `tel:0000000` or `mailto:email@example.com` links, generic social links, or template legal notice.
- Use the exact business name **Southern Electric LLC** unless the owner requests a shorter display name.
- Prefer clear, practical language over marketing claims.

## Implementation rules

- Preserve existing owner content and assets when making revisions.
- Keep layout responsive and controls usable by keyboard and screen reader.
- Use semantic HTML, visible focus styles, sufficient contrast, and reduced-motion support.
- Treat a visual placeholder as a placeholder in the page text; do not make it look like a completed claim.
- Before each later stage, inspect the current project and update this brief with newly confirmed requirements.

## Current implementation choice

The site remains a lightweight one-page static HTML/CSS/JavaScript site in `index.html`, `styles.css`, and `main.js`. The latest November 4 local layout revision uses four sections: a unified typographic hero, three main-service columns with expandable specialty descriptions, a light company section, and direct contact details with an expandable inquiry form. The text wordmark remains until the official logo is supplied. The existing confirmed business information and contact destinations are retained.

The hero integrates its animated words into a single headline with a stable complete heading for assistive technology. It splits the visual words into letters only when JavaScript runs. CSS animates their masked vertical transitions; IntersectionObserver pauses the sequence outside the viewport. Scroll-linked reveals measure stable containers and transform their children, with desktop service staggering and earlier, smaller phone movement. Revealed content stays settled, keyboard focus makes controls fully visible, and the company backdrop gently expands as it enters. Updates run in a single requested animation frame with layout reads batched before writes, rather than a continuous loop. Reduced-motion and no-JavaScript views remain static and readable. The previous page-spanning SVG path, scroll progress counters, and duplicate craftsmanship artwork are removed. The phone menu closes on link selection, Escape, outside taps, or leaving the compact layout. The mobile call/inquiry bar appears below the hero and hides near contact, while the menu or form is in use, and when the available viewport height is below 480px. Phone layouts use a full-width hero call action, 16px body copy, safe-area spacing, and a compact landscape header with a scrollable menu. Form fields use 16px text and mobile keyboard hints; native select controls receive consistent styling. Choosing a phone reply updates both the phone requirement and its visible label.

Open `index.html` directly or serve the folder with `python3 -m http.server 4173` and visit `http://localhost:4173`. The latest local layout was visually reviewed in Safari responsive mode at 320px, 390px, 768px, and 1440px. The reduced-motion view, mobile menu navigation, and inquiry expansion were checked. Background Safari suspends animation frames; a temporary browser-only static style was used to inspect responsive geometry, then cleared by reloading. The scroll pass also passed behavior checks for desktop reveal sequencing, retained visibility, keyboard focus, animation-frame batching, reduced-motion changes, mobile bar visibility, and missing IntersectionObserver support. Its settled desktop service and phone company views were inspected with explicit frame updates because background Safari suspends requestAnimationFrame. Prior behavior checks covered conditional phone requirements and email-draft encoding. Physical device testing remains open.

The November 4 mobile refinement was visually reviewed at 320 × 700, 430 × 700, and 844 × 390 in Safari responsive mode. Navigation to contact, inquiry expansion, the phone reply label, and landscape menu fit were checked. Behavior checks passed for earlier phone reveals, viewport/keyboard-aware contact bar visibility, compact-layout menu reset, conditional phone labels, and reduced motion. These are responsive previews and simulated behavior checks, not physical-device keyboard or safe-area verification.

The owner's November 3 service direction is implemented in the page: commercial work leads, residential and industrial follow, the panel troubleshooting service row is replaced, the hero and inquiry choices reflect all three categories, and the confirmed specialty services appear in a secondary block. The industrial project anecdote is omitted. Keep the source message out of the public repository.

On October 28, 2026, the owner asked to put the draft in a GitHub repository. The repository is public at `antrodian/southern-electric-llc-website`. The Netlify project `southernelectricllc` is linked to that repository's `main` branch for continuous deployment and serves the public draft at `https://southernelectricllc.netlify.app/`. `netlify.toml` publishes a generated `dist` directory containing only the website files, so this brief is not part of the public site. `.netlify/` and `dist/` are excluded from Git.
