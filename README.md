# Serenity Skin Studio — Website

The one-page marketing site for **Serenity Skin Studio**, a boutique med spa in
Pasadena specializing in facials, microneedling, and chemical peels. Its job is to
turn a visitor into a booked consultation via the lead form.

Built as a static site — plain HTML, CSS, and JavaScript. No build step, no
dependencies.

## Files

| File | What it is |
| --- | --- |
| `index.html` | All page content — headlines, services, reviews, FAQ, and the booking form. |
| `styles.css` | The look. Brand colors (sage green) and fonts live at the top in `:root`. |
| `script.js` | Form validation, the confirmation message, and gentle scroll-reveal effects. |

## Preview locally

```
cd serenity-skin-studio
python3 -m http.server 8000
```

Then open **http://localhost:8000**. Stop the server with `Control` + `C`.

## ⚠️ Before launch — connect the form

**The booking form does not send anything yet.** A visitor sees a friendly thank-you,
but the details aren't emailed or saved. Open `script.js`, find the `submitLead(data)`
function (marked with a **"Backend hook"** comment), and wire it to Serenity's email,
CRM, or booking system before sharing the site with real clients.

## Content still to finalize with the client

The reviews, ratings, and stats currently on the page are **placeholder sample
content**. Replace them with Serenity's real Google/Yelp reviews and numbers, and
confirm the address, phone, email, and hours in the footer, before going live.
