# Triple L — Modern Digital Menu (Version 2)

A responsive, English-only specialty-coffee menu concept created as a showcase project for **SILAH**.

## Run locally

1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. An internet connection is needed for the Google Fonts and Unsplash photography. Local fallback illustrations are included if a product image fails to load.

No framework, package manager, build step, or backend is required.

## Project structure

```text
triple-l-menu-v2/
├── index.html
├── README.md
├── LAUNCH-CHECKLIST.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── menu.js
    └── images/
        ├── favicon.svg
        ├── fallback-coffee.svg
        ├── fallback-cold.svg
        ├── fallback-bakery.svg
        └── triple-l-social-preview.jpg
```

## Interactions

- Responsive navigation with an accessible mobile toggle.
- Category filters with counts calculated from the menu data.
- Live search; press `/` to focus the search field.
- Product detail dialog with Escape-to-close, backdrop closing, focus return, and keyboard focus containment.
- Single, clear product-details action on each card (the image is no longer a second button for the same action).
- Bakery call-to-action that opens the Bakery & sweets category.
- Empty search state with a reset action.
- Reduced-motion support and visible keyboard focus styles.

## Updating products and prices

Open `assets/js/menu.js` and edit the `menuItems` array near the beginning of the file.

Each product uses:

- `id`: unique number
- `name`: displayed product name
- `category`: `coffee`, `cold`, `other`, or `bakery`
- `categoryLabel`: displayed category label
- `price`: number in EGP
- `description`: short product description
- `image`: image URL from `imageBank`
- `label`: small product badge

The category counts update automatically from `menuItems`; there is no need to change the counts in HTML when adding or removing products.

To replace photography, update the URLs in `imageBank`. The images currently use Unsplash URLs. Unsplash's standard license permits free commercial and non-commercial use, but review the license and any third-party rights relevant to each selected image before client deployment. Official information: https://unsplash.com/license and https://help.unsplash.com/en/articles/2612329-releases-and-trademarks.

## Before presenting this as a real café menu

This is a **fictional concept brand** for the SILAH portfolio. The products, prices, location, and opening hours are illustrative. Before converting it into a live client menu:

1. Replace every product name, description, and price with client-approved information.
2. Replace the Cairo map search with the café's exact Google Maps place link.
3. Add the real address, opening hours, phone number, and approved social links.
4. Replace stock photography with the café's own approved images when available.
5. Update the Open Graph and Twitter image URLs in `index.html` to the final absolute, public URL of `assets/images/triple-l-social-preview.jpg`.
6. Test the final site on real iOS and Android devices, especially the category row, search, menu dialog, and map link.
7. Publish the site, then generate the QR code from the final public URL.

## Social preview image

A 1200 × 630 branded preview image is included at `assets/images/triple-l-social-preview.jpg`. Social platforms require a public absolute URL for link previews; replace `https://YOUR-DOMAIN/...` in the metadata after publishing.
