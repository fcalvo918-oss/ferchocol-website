# StoryFrame preview and Windows Beta form

Prepared for the `fcalvo918-oss/ferchocol-website` GitHub Pages repository.

## Files to add

Copy these folders into the repository root:

- `storyframe/index.html` → `https://ferchocol.com/storyframe/`
- `storyframe/privacy/index.html` → `https://ferchocol.com/storyframe/privacy/`

The product page is self-contained. It does not replace the working root `index.html`, `styles.css`, or inline mobile-menu implementation.

## Connect Formspree

1. Sign in to Formspree and create a form for StoryFrame Windows Beta applications.
2. Manage applications in the Formspree dashboard or route notifications to a dedicated beta-application inbox. Keep `hello@ferchocol.com` for general support/contact; it should not be the primary beta application method.
3. Copy the endpoint supplied by Formspree. It will look like:

   `https://formspree.io/f/abcdefgh`

4. In `storyframe/index.html`, find:

   `https://formspree.io/f/YOUR_FORM_ID`

5. Replace it with the real endpoint.
6. Keep the included `_gotcha` honeypot field and enable Formspree's available spam filtering and CAPTCHA/reCAPTCHA protection for the form.
7. Verify any dedicated notification destination before publishing.
8. Submit one test application after deployment and confirm that it appears in Formspree and, if enabled, reaches the dedicated notification destination.

Do not publish the page while `YOUR_FORM_ID` remains in the form action.

## Main-site integration

On the existing StoryFrame product card in the root `index.html`, change the StoryFrame CTA from the current email link to:

```html
<a href="/storyframe/">Preview &amp; join the beta →</a>
```

Preserve the existing card classes and surrounding markup.

## No installer

These files contain no installer filename, storage URL, download button, or automatic download. Selected testers can receive installation instructions privately after acceptance.

## Pre-publication review

- Replace the Formspree placeholder endpoint.
- Confirm `hello@ferchocol.com` (support/contact) and `privacy@ferchocol.com` (privacy requests) are monitored.
- Confirm the Formspree application dashboard or dedicated beta-application notification inbox is monitored.
- Enable Formspree spam filtering and CAPTCHA/reCAPTCHA where available; retain the `_gotcha` honeypot.
- Confirm the form warns applicants not to submit sensitive personal information.
- Review the beta privacy language, retention practice, and Formspree configuration for accuracy.
- Confirm the stated StoryFrame behavior is still current: local media processing, no account, no advertising, no behavioral tracking, and no intentional analytics or telemetry.
- If beta builds collect crash reports or telemetry, revise the privacy notice before publishing.
- Consider having final privacy language reviewed by qualified counsel for the jurisdictions where beta applicants may reside.

## Test checklist

1. Commit the new files and the StoryFrame product-card link.
2. Suggested commit message: `Add StoryFrame preview and Windows beta signup`
3. Wait for GitHub Pages deployment to finish.
4. Open `/storyframe/` on desktop and mobile.
5. Test the mobile Menu button and all navigation links.
6. Submit the form once with test data.
7. Confirm required-field validation and spam protection work and the application appears in Formspree.
8. Confirm `/storyframe/privacy/` and both privacy email links work.
9. Confirm there is no public installer link anywhere on the page.
