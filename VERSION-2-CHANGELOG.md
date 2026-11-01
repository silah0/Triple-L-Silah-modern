# Version 2 — What changed and why

This update keeps the original Warm Modern direction but makes the concept more launch-ready and easier to customise.

## Design and content

- Kept the warm ivory, charcoal, sage, and caramel palette.
- Refined the announcement bar so it communicates a short brand message and links directly to the menu.
- Removed the misleading Cairo label from the hero image caption.
- Kept the concept disclaimer subtle so viewers understand this is a sample brand, not a real café listing.

## Navigation and structure

- Moved the `top` anchor to the start of the page, so the brand mark and Back to the top links return to the actual page beginning.
- Kept the main header sticky while allowing the announcement bar to scroll away.
- Improved the mobile menu toggle's open/close state and added click-outside closing.
- Added a skip-to-content link and clearer focus styling for keyboard users.

## Menu experience

- Removed the duplicate product-detail action: the image is now visual, and each card has one clear View details button.
- Made category counts calculate from the `menuItems` array instead of relying on hard-coded numbers.
- Kept category filtering, live search, the `/` shortcut, and the empty-results reset.
- Added local fallback illustrations if a remote product photo cannot load.
- Improved the product dialog with Escape-to-close, backdrop closing, focus return, and keyboard focus containment.

## Launch preparation

- Added social sharing metadata for Open Graph and Twitter cards.
- Created a 1200 × 630 share-preview image.
- Added a favicon and local fallback illustrations.
- Added README and launch checklist files covering client customisation, hosting, metadata, and QR-code preparation.

## Still intentionally left as concept data

Triple L is a fictional portfolio brand. Product details, prices, opening hours, and location are illustrative. The Cairo map link is a general area search, not the address of a real venue. Replace these details before presenting the site as a real café menu.
