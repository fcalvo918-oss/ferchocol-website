# Vardex product page

Deployment-ready static page for `https://ferchocol.com/vardex/`.

## Files

- `index.html` - Page markup, SEO metadata, Open Graph metadata, and SoftwareApplication structured data.
- `styles.css` - Responsive layout, Vardex branding, accessibility states, and mobile styles.
- `script.js` - Updates the copyright year automatically.
- `assets/vardex-icon.png` - 512 x 512 Vardex app icon and favicon.
- `assets/vardex-feature-graphic.png` - 1024 x 500 social sharing image.
- `assets/screenshot-dashboard.png` - Vardex saved-jobs dashboard.
- `assets/screenshot-results.png` - Roofing calculation results.
- `assets/screenshot-inputs.png` - Roofing calculator inputs.
- `assets/screenshot-job-details.png` - Saved job actions and PDF tools.

## Integration

1. Back up the current `/vardex/` directory on the Ferchocol server.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder into `/vardex/`.
3. Keep the existing `/vardex/privacy.html` file in place. This package intentionally does not contain or replace it.
4. Confirm that `https://ferchocol.com/vardex/` loads over HTTPS.
5. Test the Google Play button, the privacy-policy link, and the Ferchocol homepage link.
6. Clear any website or CDN cache after deployment.

All page assets use relative paths suitable for the `/vardex/` directory. The canonical URL and social metadata use the final public HTTPS URL.
