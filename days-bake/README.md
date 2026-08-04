# Day's Bake — static GitHub Pages website

A dependency-free static site for the Day's Bake Android app.

## Contents

- `index.html` — public landing page
- `privacy.html` — pre-release privacy-policy draft
- `support.html` — support and FAQ page
- `app-ads.txt` — placeholder at the site root
- `404.html` — custom error page
- `assets/` — styles, script and images
- `PLACEHOLDERS.md` — required replacements before submission

## Publish with GitHub Pages

1. Create a new public repository, for example `days-bake-site`.
2. Upload the **contents of this folder** to the repository root.
3. Commit the files.
4. Open **Repository settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then save.
7. Wait for GitHub to publish the URL.

All internal links are relative, so the site works on a GitHub project Pages URL or a custom domain.

## Before using the privacy-policy URL

Read `PLACEHOLDERS.md` and replace every highlighted placeholder. Review the advertising wording after the production AdMob/UMP configuration is final.

## app-ads.txt and GitHub Pages

Google expects `app-ads.txt` to be reachable from the root of the developer website domain. A GitHub **user/organisation Pages site** (`username.github.io`) or a custom domain/subdomain connected to this repository is the safest setup. If you use a project Pages path (`username.github.io/repository/`), confirm that the final developer website arrangement still exposes the file at the root AdMob will crawl.

Replace `app-ads.txt` with the exact personalised line copied from AdMob. Do not invent the publisher ID.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
