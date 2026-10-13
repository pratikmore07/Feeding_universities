# Meta Pixel, GA4, and GTM setup

The website loads Google Tag Manager and the Meta Pixel in the browser. After a
lead has been saved to both Google Sheets and email, the backend sends a GA4
Measurement Protocol `generate_lead` event and a Meta Conversions API `Lead`
event. The browser and server Meta events share an event ID for deduplication.
No contact details are sent to GA4; Meta receives SHA-256 hashed email/phone
along with the available browser and request matching signals.

## 1. Add your IDs and secrets

Add these values to the existing `frontend/.env` (use
`frontend/.env.example` as a reference) and set:

- `VITE_GTM_ID`: your GTM container ID (for example, `GTM-ABC1234`).
- `VITE_META_PIXEL_ID`: your Meta Pixel ID.

Add these values to the existing `backend/.env` (use
`backend/.env.example` as a reference; do not replace the existing mail and
Google Sheets settings) and set:

- `GA4_MEASUREMENT_ID`: the GA4 web stream Measurement ID (`G-...`).
- `GA4_API_SECRET`: create this in GA4 under **Admin > Data streams > your web
  stream > Measurement Protocol API secrets**.
- `META_PIXEL_ID`: the same Pixel ID used by the frontend.
- `META_ACCESS_TOKEN`: the Pixel's Conversions API access token from Meta Events
  Manager.

Keep the GA4 API secret and Meta access token only in the backend environment;
never add them to a `VITE_` variable or commit a real `.env` file. Restart the
backend and rebuild/restart the frontend after changing environment values.
Analytics is disabled when its corresponding backend credentials are absent.

## 2. Configure GTM for GA4

In the GTM container:

1. Add a **Google tag** with your GA4 Measurement ID. Fire it on **Initialization
   - All Pages**, and set `send_page_view` to `false` so route changes are not
   counted twice.
2. Add a **Google Analytics: GA4 Event** tag with event name `page_view`.
   Trigger it on a **Custom Event** named `page_view`; map `page_location`,
   `page_path`, and `page_title` to Data Layer Variables with those names.
3. Publish the container. The site pushes a `page_view` event on initial load
   and every React route change.

The site also pushes `lead_submission_success` into the data layer after each
successful form submission. The backend sends the GA4 `generate_lead` event;
do not also send a GA4 `generate_lead` tag from GTM for
`lead_submission_success`, or the conversion will be counted twice.

The Meta Pixel is loaded directly by the site from `VITE_META_PIXEL_ID`, so do
not add a second Meta Pixel base tag in GTM. The site sends browser `PageView`
and `Lead` events; the backend sends the matching server `Lead`.

## 3. Prepare the lead sheets

The backend appends the following attribution columns after the existing
headers. Add these headers in the indicated order before collecting test leads:

- **Leads** (after column V): `utmTerm`, `utmContent`, `utmId`,
  `utmSourcePlatform`, `utmCreativeFormat`, `utmMarketingTactic`, `gclid`,
  `gbraid`, `wbraid`, `fbclid`, `fbp`, `fbc`, `clientId`, `eventId`.
- **Meta** (after column Y): the same 14 headers in the same order.
- **Brochure Leads** (after column Q): the same 14 headers, followed by
  `sourcePage`, `pageTitle`.

The original `utmSource`, `utmMedium`, `utmCampaign`, and `referrer` columns are
retained. All lead forms preserve attribution when visitors navigate between
pages before submitting.

## 4. Verify the integration

1. Start the frontend and backend, then open the site with a test URL such as
   `http://localhost:5173/?utm_source=qa&utm_medium=test&utm_campaign=analytics-check&utm_term=sample-term&utm_content=sample-ad`.
2. Use **GTM Preview** to connect to the site. Confirm the `page_view` custom
   event fires once for each route and that its page variables are populated.
   In browser DevTools **Network**, confirm requests to `gtm.js` and
   `fbevents.js` load.
3. Submit each form with test data. Confirm it succeeds, then check the relevant
   Google Sheet and lead email for the UTM values, page/referrer, click IDs when
   available, and event ID.
4. In **GA4 Realtime**, confirm page views and `generate_lead`. To inspect
   backend events in **DebugView**, temporarily set `GA4_DEBUG_MODE=true` in the
   backend environment and restart it; turn it off after testing.
5. In **Meta Events Manager**, confirm browser `PageView`/`Lead` events and
   server `Lead` events. Use the same event ID to confirm browser/server
   deduplication. For server events in **Test Events**, temporarily set
   `META_TEST_EVENT_CODE` to the code shown there, restart the backend, submit a
   test lead, and remove the code afterward.
6. Check backend logs for GA4 or Conversions API delivery errors. Analytics
   outages are logged but do not prevent a lead from being submitted.

Use a consent banner and only load marketing tags/send matching identifiers when
the visitor's consent and applicable privacy requirements allow it. Test
submissions create real sheet rows and send real lead emails unless you use
separate test resources.
