# Med Spa Landing Page — Template

A ready-to-customize, one-page marketing website for a med spa. It has one job:
turn a visitor into a booked consultation via the lead-capture form.

Everything on the page is written as a **placeholder** in square brackets, like
`[SPA NAME]` or `[SERVICE 1 NAME]`. Customizing the site means finding each of those
placeholders and replacing it with your real words. When there are no `[...]` brackets
left, you're done.

- **No build step.** Plain HTML, CSS, and JavaScript. Nothing to install or compile.
- **No backend yet.** The form validates and shows a thank-you, but doesn't send the
  data anywhere until you connect it (see [Connecting the form](#5-connecting-the-form)).

---

## 1. What's in this folder

| File | What it is | Do you edit it? |
| --- | --- | --- |
| `index.html` | All the words and structure of the page. | **Yes** — this is where most placeholders live. |
| `styles.css` | The look — colors, fonts, spacing. | Only to change brand colors/fonts (top of the file). |
| `script.js` | The behavior — form checking and fade-in effects. | A little — 2 placeholders + the form hook. |
| `README.md` | This guide. | No. |

---

## 2. Quick start

1. Copy this whole folder and rename it for your spa.
2. Open `index.html` in any text editor.
3. Work through the [placeholder checklist](#4-placeholder-checklist) below, replacing
   each `[PLACEHOLDER]` with your real content. Keep the surrounding tags/quotes intact —
   only change the text *between* them.
4. Preview it locally (optional but recommended):
   ```
   cd path/to/this-folder
   python3 -m http.server 8000
   ```
   Then open **http://localhost:8000** in your browser. Stop the server with `Control` + `C`.
5. When there are no `[...]` placeholders left, the page is ready to publish.

> **Tip:** Most editors have a "Find" feature. Search for `[` to jump between placeholders,
> or use Find & Replace for the repeated ones (like `[SPA NAME]`).

---

## 3. Deleting optional sections

A few parts are optional. If they don't apply to you, delete the whole marked block in
`index.html`:

- **Press / "As featured in" line** — the `<p class="as-seen">…</p>` line in the Social Proof section.
- **Social links** — the `<p><a href="[INSTAGRAM URL]">…</p>` line in the footer.
- **Any contact detail** you don't have (phone, address, etc.) — remove that piece from the footer contact line.

---

## 4. Placeholder checklist

Replace every item below. The **Where** column tells you the file and section.
Placeholders marked ⭐ appear in **more than one place** — replace them everywhere.

### Brand & page meta — `index.html` (`<head>` + header + footer)

| Placeholder | What to write | Where |
| --- | --- | --- |
| ⭐ `[SPA NAME]` | Your spa's name | `<title>`, header logo, footer logo, copyright, **and** `script.js` (comment + log) |
| ⭐ `[TAGLINE]` | Short tag under the name (e.g. "med spa", "aesthetics studio") | `<title>`, header, footer |
| `[META DESCRIPTION]` | 1–2 sentence description for search engines (~150 chars) | `<meta name="description">` |
| `[NAV CTA]` | Top-right button label (e.g. "Book a consult") | Header nav |

### Hero (top of page) — `index.html`, `.hero`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[HERO EYEBROW]` | Small line above the headline (e.g. "By appointment") | Hero |
| `[HERO HEADLINE]` | Your big attention-grabbing headline | Hero `<h1>` |
| `[HERO SUBHEADLINE]` | One or two supporting lines | Hero `.lede` |
| `[PRIMARY CTA]` | Main button label (e.g. "Book your consultation") | Hero |
| `[SECONDARY CTA]` | Secondary link label (e.g. "Explore services") | Hero |
| `[HERO NOTE]` | Small reassurance under the buttons | Hero |
| `[HERO QUOTE]` | Short customer quote shown in the floating card | Hero card |
| `[HERO QUOTE ATTRIBUTION]` | Who said it (e.g. "Jamie, client since 2022") | Hero card |

### Services — `index.html`, `.services`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[SERVICES EYEBROW]` | Small label (e.g. "What we do") | Section head |
| `[SERVICES HEADLINE]` | Section title | Section head |
| `[SERVICES SUBHEADLINE]` | One supporting line | Section head |
| ⭐ `[SERVICE 1 NAME]` | Your first service | Service card 1, the form's `<select>`, **and** `script.js` `SERVICE_LABELS` |
| `[SERVICE 1 DESCRIPTION]` | Benefit-led blurb for service 1 | Service card 1 |
| `[SERVICE 1 LINK TEXT]` | Card link text (e.g. "Ask about facials") | Service card 1 |
| ⭐ `[SERVICE 2 NAME]` | Your second service | Service card 2, `<select>`, `script.js` |
| `[SERVICE 2 DESCRIPTION]` | Benefit-led blurb for service 2 | Service card 2 |
| `[SERVICE 2 LINK TEXT]` | Card link text | Service card 2 |
| ⭐ `[SERVICE 3 NAME]` | Your third service | Service card 3, `<select>`, `script.js` |
| `[SERVICE 3 DESCRIPTION]` | Benefit-led blurb for service 3 | Service card 3 |
| `[SERVICE 3 LINK TEXT]` | Card link text | Service card 3 |

> The page is built for **exactly three** services. To add or remove one, copy or delete a
> whole `<article class="service-card">…</article>` block — and keep the `<select>` options
> and `script.js` `SERVICE_LABELS` in sync.

### Social proof — `index.html`, `.social`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[STAT 1 NUMBER]` | A number (e.g. "4.9") — note the ★ next to it | Stats |
| `[STAT 1 LABEL]` | What it means (e.g. "Average across 600+ reviews") | Stats |
| `[STAT 2 NUMBER]` / `[STAT 2 LABEL]` | Second stat + label | Stats |
| `[STAT 3 NUMBER]` / `[STAT 3 LABEL]` | Third stat + label | Stats |
| `[TESTIMONIAL 1 QUOTE]` | A real customer review | Testimonials |
| `[CUSTOMER NAME 1]` | Their name (e.g. "Priya S.") | Testimonials |
| `[TESTIMONIAL 2 QUOTE]` / `[CUSTOMER NAME 2]` | Second review + name | Testimonials |
| `[TESTIMONIAL 3 QUOTE]` / `[CUSTOMER NAME 3]` | Third review + name | Testimonials |
| `[PRESS 1]` `[PRESS 2]` `[PRESS 3]` | Publications you've appeared in (or delete the line) | "As featured in" |

### FAQ — `index.html`, `.faq`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[FAQ EYEBROW]` | Small label (e.g. "Good to know") | Section head |
| `[FAQ HEADLINE]` | Section title | Section head |
| `[FAQ SUBHEADLINE]` | One supporting line | Section head |
| `[FAQ QUESTION 1]` … `[FAQ QUESTION 5]` | Five common questions | FAQ items |
| `[FAQ ANSWER 1]` … `[FAQ ANSWER 5]` | The answer to each | FAQ items |

> Fewer than five questions? Delete whole `<details class="faq-item">…</details>` blocks.

### Lead form — `index.html`, `.book`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[FORM EYEBROW]` | Small label (e.g. "Let's begin") | Form copy |
| `[FORM HEADLINE]` | Form title (e.g. "Book your consultation") | Form copy |
| `[FORM BODY]` | 1–2 sentences on what happens after they submit | Form copy |
| `[ASSURANCE 1]` `[ASSURANCE 2]` `[ASSURANCE 3]` | Three short reassurance bullets | Form copy |
| `[OTHER OPTION]` | Label for the "not sure yet" dropdown choice | `<select>` **and** `script.js` |
| `[FORM SUBMIT BUTTON]` | Submit button label (e.g. "Request my consultation") | Form |
| `[FORM FINEPRINT]` | Small print under the button (consent note) | Form |
| `[SUCCESS HEADLINE]` | Thank-you title shown after submitting | Success state |
| `[SUCCESS MESSAGE]` | Thank-you detail line | Success state |

*(The `(555) 123-4567` and `you@email.com` text inside the form fields are example
placeholders shown in empty inputs — you can leave them or adjust the format.)*

### Footer contact — `index.html`, `.site-footer`

| Placeholder | What to write | Where |
| --- | --- | --- |
| `[ADDRESS]` | Street address (or delete) | Footer contact line |
| `[CITY]` / `[STATE]` / `[ZIP]` | Location (or delete) | Footer contact line |
| `[PHONE]` | Phone number (or delete) | Footer contact line |
| `[EMAIL]` | Contact email (or delete) | Footer contact line |
| `[HOURS]` | Opening hours (e.g. "Open Tue–Sat") | Footer contact line |
| `[INSTAGRAM URL]` / `[FACEBOOK URL]` | Social profile links (or delete the line) | Footer socials |
| `[YEAR]` | Current year for the copyright | Footer fine print |

---

## 5. Design customization (colors & fonts)

All colors and fonts are defined once at the top of **`styles.css`**, in the `:root` block.
Change them there and they update everywhere.

**Colors** — the three you'll most likely change are the brand accents:

| Token | Controls |
| --- | --- |
| `--accent` | Primary buttons, links, icons, stars |
| `--accent-deep` | Hover state (use a darker shade of `--accent`) |
| `--accent-soft` | Soft tint behind the hero and form |

The neutrals (`--bg`, `--text`, `--border`, etc.) are a clean grayscale base and can
usually stay as-is.

**Fonts** — change `--serif` (headings) and `--sans` (body). The template uses system
fonts so it works offline with nothing to load. To use a custom web font (e.g. Google
Fonts):

1. Add the font's `<link>` tags inside `<head>` in `index.html` (there's a comment marking
   the spot).
2. Update `--serif` and/or `--sans` in `styles.css` to name that font first, e.g.
   `--serif: "Playfair Display", Georgia, serif;`

---

## 6. Connecting the form

**Right now the form doesn't send you anything.** A visitor can fill it out and see a
friendly thank-you, but that information isn't emailed or saved — it just disappears.

To make it real, open `script.js` and find the `submitLead(data)` function near the bottom
(it's clearly marked with a **"Backend hook"** comment). Replace the `console.log(...)`
line with a call to your email service, CRM, or booking system — there's an example
`fetch()` right there in the comment. Whoever helps you with your website can do this
quickly.

---

## 7. What's NOT included

- No images (the hero uses a soft CSS shape, not a photo). Add your own if you like.
- No analytics or tracking.
- No real booking/payment integration — just the lead form described above.
- No cookie banner or legal pages — add these if your region requires them.
