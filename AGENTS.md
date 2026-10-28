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
- Southern Electric's electricians do **residential and commercial** work. The owner also said "etc." but has not yet named further categories; do not infer them.
- For now, use only the work actually described on the original website: residential and commercial work, new construction home wiring, and complex panel troubleshooting. The original site does not publish a fuller service list.
- The owner confirmed **(615) 278-8256**, **tylan.southernelectricllc@gmail.com**, and the **veteran-owned and operated** statement on October 20, 2026.
- Do not include a service-area section or coverage language. The owner declined to publish service-area details at this stage.
- The owner is looking for the official logo and photos; keep the text wordmark until those assets are supplied.
- The owner wants the site to feel **nice, clean, professional, and slightly minimalist**, while communicating all useful information from the existing site. Apply the `frontend-design` and `ui-ux-pro-max` skills when making visual or interaction changes.
- The owner wants high-quality UI animation and a distinctive scroll animation that elevates the desktop website.
- On October 27, 2026, the owner requested a full **rugged, minimalist** redesign with a **subtle patriotic feel** connected to the veteran-owned company. Avoid literal flags, stars, badges, or loud red-white-blue decoration. Apply the `frontend-design` and `ui-ux-pro-max` skills to this redesign.
- The owner then asked for **many more animations and a fun, impressive feel**: a constantly running hero/banner animation, scroll animations, and animated feedback on every button or link. This supersedes the earlier preference for only brief, restrained motion; preserve the rugged visual system and reduced-motion accessibility.
- On October 28, 2026, the owner approved adding a connected scroll path, a lighter visual section, a project inquiry form, and a pause control for the continuous hero circuit. Prepare a project photo layout, but add actual photographs only after the owner supplies and approves them.
- On October 28, 2026, the owner approved the next visual pass: a photo-led hero and project spotlights once approved images arrive, a connected motion sequence through contact, phone layout polish, and a real inquiry submission once a hosting platform is selected. No publishable images or hosting choice were present in the local project when this pass began.

## Visual and UX direction

- Use a restrained industrial system for the current draft: matte near-black surfaces, off-white type, one red signal accent, sturdy monospaced typography, precise borders, and flat service rows. Keep the service offer readable. Avoid gradients, shadows, decorative stock photos, loud patriotic symbols, and dense cards. Exact brand colors remain open until the owner approves them.
- Lead with the service offer: electrical work for homes and businesses. Make it easy to find services and contact methods from the first screen.
- Treat “God, Country, and Craftsmanship” as a prominent brand statement. Present veteran ownership clearly, without adding unsupported badges or guarantees.
- Keep the current one-page navigation clear. Use visible text for actions, predictable section links, keyboard focus styles, sufficient contrast, and reduced-motion behavior.
- Use the old site for business facts and value language. Paraphrase carefully; do not turn its broad marketing copy into new factual promises. The phone, email, and veteran-owned statement are owner-confirmed; brand assets remain open.
- The visual signature is a simple red electrical path motif in the hero, built from lines and nodes. It is decorative only and must not interfere with reading or navigation. The veteran-owned statement and prominent “God, Country, and Craftsmanship” message provide the patriotic cue.
- Motion should now feel lively: a short hero entrance followed by continuous current moving along the circuit paths while the hero is visible, animated hover/press feedback across interactive links, service rows that reveal as they enter, a scroll-following service rail, page progress, and the values sequence with a sticky company message, advancing red rail, and progress count. Keep text stable and readable. The page must remain readable and functional if JavaScript is unavailable. Respect `prefers-reduced-motion` by removing entrance, continuous, and scroll effects; never trap or take over scrolling.
- Carry one decorative red path from the hero through services, the lighter work section, and the company values. Keep it clear of copy. The circuit has a visible pause/play control when motion is available.
- Use a light workwear-toned section as a visual break. While approved photos are pending, show a complete abstract craftsmanship composition instead of visible empty photo frames. Replace this with owner-approved work imagery and accurate project captions when supplied; do not substitute stock or generated work images.
- The project inquiry form currently opens a prefilled email draft addressed to the owner-confirmed email. State clearly that the visitor must send the message in their email app; no submission backend or delivery claim exists yet. Keep direct phone and email links available.
- The scroll path now reaches the first contact action. The phone layout has a persistent two-action contact bar that links to the confirmed phone and the inquiry form.

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

- Any additional service offerings or commercial project limits, if the owner later wants them shown. For now, stick to the original site's content.
- Whether calling, email, or a quote form should be the primary action. The current draft retains calling as the primary action.
- The official logo, job photos, and final brand colors. The owner is looking for assets.
- Approval to publish each supplied job or team photo, plus any project details or captions the owner wants shown.
- Whether the inquiry should remain an email-draft flow or use a hosted form endpoint once hosting is chosen.
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

- Refine layout, typography, spacing, navigation, and contact actions for phones and tablets. The owner approved starting phone polish on October 28; tablet review and final refinement remain open.
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

Stage 1 uses a lightweight, one-page static HTML/CSS/JavaScript site. This avoids unnecessary dependencies for a first pass and makes the structure easy to revise. The desktop layout is the current focus. The October 27 design direction is rugged and minimalist, with near-black surfaces, off-white monospaced type, flat rules, and a red electrical path. Exact brand assets and final colors remain open.

The landing page is implemented in `index.html`, `styles.css`, and `main.js`. The rugged redesign uses a plain text wordmark until an official logo is supplied, a strong two-column hero, a circuit line drawing, three flat service rows, a sticky company-values sequence, and direct contact actions. New construction home wiring remains a sourced example under residential work. The service-area section and coverage language remain omitted at the owner's request. The message “God, Country, and Craftsmanship” is prominent, while patriotism stays subtle. Motion includes continuous hero current with a pause/play control, animated action feedback, scroll-revealed service rows, page progress, active navigation, and one scroll-following path through services, the light craftsmanship section, company values, and contact actions. The light section uses abstract circuit artwork while actual photographs and accurate project spotlights await owner-supplied, approved images. The phone layout includes a persistent call/inquiry bar. A project inquiry form opens a prefilled email draft; it does not send from the site. Open `index.html` directly or serve the folder with `python3 -m http.server 4173` and visit `http://localhost:4173`. The page is ready for owner review. A photo-led hero, real project spotlights, and an actual form submission endpoint remain dependent on approved photos, project details, and hosting choice.

On October 28, 2026, the owner asked to put the current draft in a GitHub repository for a later Netlify import. The repository is private while the content remains a draft. `netlify.toml` publishes a generated `dist` directory containing only the website files, so this brief is not part of the public site. `.netlify/` and `dist/` are excluded from Git. Connecting or publishing on Netlify remains a separate step.
