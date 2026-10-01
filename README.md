# Mobile Apps by Manan — split developer landing page

This is a complete static GitHub Pages package for:

`https://mobileappsmanan.github.io/`

The existing Day's Bake website is preserved at:

`https://mobileappsmanan.github.io/days-bake/`

## Design

- Fixed cream information pane on desktop
- Independently scrolling app gallery on the right
- Two-tone header and page
- Dynamic left-side app copy
- Generic phone outline with a CSS/HTML feature preview
- Tall clickable app product card
- Both the phone and card open the selected app website
- No app screenshots, iPhone-specific hardware details, or Dynamic Island
- About stays on the same page as a dialog
- Contact is handled from the top navigation

## Upload

Upload the **contents inside this folder** to the root of your
`mobileappsmanan.github.io` repository.

Do not upload the enclosing folder as a nested directory.

## Current public release state

The developer and support email is configured as `mobileapps.manan@gmail.com`.
The root `app-ads.txt` contains the verified publisher record. Day's Bake, Paws Above and CandleSteps are available on Google Play, and each app page links to its public listing, privacy policy and support page.

## Adding another app later

Duplicate the `.app-scene` article in `index.html` and change:

- `data-headline-one`
- `data-headline-two`
- `data-description`
- `data-meta`
- `data-background`
- `data-accent`
- card icon and copy
- phone preview
- destination link

The JavaScript will update the fixed left copy and two-tone background as the
right-side app sections scroll into view.
