# Ideas Bíblicas con Carolina

Personal-brand website for the *Ideas Bíblicas con Carolina* YouTube/Facebook ministry. Plain HTML/CSS/JS — no build step, no framework, so it's easy to edit directly.

## Structure

```
index.html        Homepage (hero, about, mission, videos, social, coming soon, email signup)
contact.html       Contact page with form
thank-you.html     Shown after a form submits
css/style.css      All styling
js/main.js         Language toggle (ES/EN), mobile menu, footer year
assets/            Avatar image + favicon
```

## Editing content

Every piece of bilingual text is written twice on the same element:

```html
<h2 data-es="Texto en español" data-en="Text in English">Texto en español</h2>
```

- The visible text (between the tags) is what shows before JavaScript runs — keep it in Spanish (the default language).
- `data-es` / `data-en` are what `js/main.js` swaps in when the visitor toggles language (top-right ES/EN buttons). Edit both when you change copy.
- For form placeholders, use `data-es-placeholder` / `data-en-placeholder` instead.

## Forms (email signup + contact)

Both forms use **Netlify Forms** — no backend needed. Netlify detects the `data-netlify="true"` forms automatically at deploy time. Submissions show up in your Netlify site dashboard under **Forms**, and you can turn on email notifications there (Site settings → Forms → Notifications).

## Videos section

The homepage embeds the channel's **uploads playlist**, so it always shows the latest videos automatically — nothing to update by hand when a new video goes live.

## Deploying to Netlify

**Option A — drag & drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this whole project folder in.
3. Done — you'll get a live URL immediately.

**Option B — connect to Git (recommended for ongoing edits)**
1. Push this project to a GitHub repo (already set up if you're reading this from the repo).
2. In Netlify: **Add new site → Import an existing project** → pick this repo.
3. Build command: leave blank. Publish directory: `.` (already set in `netlify.toml`).
4. Deploy. Every future push to the main branch redeploys automatically.

After the first deploy, update `robots.txt` and `sitemap.xml` with your real Netlify/custom domain URL.

## Custom domain

Once deployed, add your domain under **Site settings → Domain management** in Netlify and follow their DNS instructions.
