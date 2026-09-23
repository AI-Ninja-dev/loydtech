# Connect Loydtech enquiries to HubSpot Free

The site's discovery-call and quote form can submit directly to a HubSpot form through the browser-supported Forms Submission API. No private token is used. Until configured, the site keeps its existing email-draft flow.

1. In HubSpot, create and publish a form called **Loydtech website enquiries**. Add these contact properties to the form, using their standard internal names: `email` (required), `firstname`, `lastname`, `company`, and `message`. The site combines sector, interest, project scale, next step and the visitor's own text in `message`. Do not add other required fields to the HubSpot form unless the site is updated to send them.
2. Set the form's data-processing consent to match the site's checkbox: “I agree to Loydtech processing my information to respond to this enquiry.” Do not enable marketing email consent from this checkbox; it is for responding to the enquiry only.
3. In HubSpot, choose **Get embed code** for that form. Copy its portal/account ID and form GUID. Set `portalId` and `formGuid` in `src/hubspot.js`. These public identifiers may be committed; never commit an access token or private-app secret.
4. Add `ai-ninja-dev.github.io` to HubSpot's site domains / tracking settings so site form submissions are not marked as spam. Add the website's custom domain too if it is used later.
5. Publish the site, make one clearly labelled test enquiry, and verify the submission appears in HubSpot with the name, email, company and full project details. Then remove the test contact if desired.

The original email-download option remains available. If the HubSpot service rejects a submission, the form retains the typed values and shows a retry/contact message.
