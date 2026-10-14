# Hostinger deployment : HTTPS and performance
## Frontend

1. Point the domain to the Hostinger website and enable its SSL certificate in
   hPanel before testing the HTTPS redirect.
2. Build the frontend with `npm run build` in `frontend` and upload the
   **contents** of `frontend/dist` to the domain's document root (commonly
   `public_html`). The build includes `public/.htaccess`, which redirects HTTP
   and `www` traffic to `https://feedinguniversities.com`, serves the React
   Router fallback, applies security/cache headers, and enables gzip where
   supported.
3. If the canonical domain differs, update the redirect host in
   `frontend/public/.htaccess`, `VITE_SITE_URL` in the production build
   environment, and the absolute URLs in the sitemap and HTML structured data
   before rebuilding.
4. Copy `frontend/.env.example` to `frontend/.env` for local production-build
   testing. In the Hostinger build environment, configure `VITE_API_BASE_URL`
   to the backend's HTTPS origin unless Hostinger is configured to proxy `/api`
   to the frontend domain. Rebuild after changing frontend environment
   variables; Vite embeds them in the static files. Do not deploy with the
   example's empty API URL unless the same-origin `/api` proxy is working.
5. Keep university PDF brochures in `frontend/public/Brochure/`. Add or
   update each university's available program choices in
   `frontend/src/data/universityBrochures.js`; the file names and letter case
   must match exactly. Rebuild and upload the resulting `dist/Brochure/`
   directory with the rest of `dist`.

## Node.js backend

1. Deploy the `backend` directory as a Hostinger Node.js application and use
   `npm start` as the start command.
2. Set `NODE_ENV=production`, `TRUST_PROXY_HOPS=1`, and `FRONTEND_URL` to the
   exact HTTPS frontend origin. `TRUST_PROXY_HOPS` must match the number of
   trusted Hostinger reverse proxies in front of the app; do not increase it
   without confirming the proxy topology.
3. Add the remaining application secrets from `backend/.env.example` through
   Hostinger's environment-variable settings. Do not upload `.env` files or
   expose backend secrets in frontend `VITE_*` variables. The local
   `backend/.env` is now ignored by Git; rotate any active credentials that
   were present in its previously tracked version before deployment.
4. Confirm the backend is reachable only through its HTTPS endpoint and that
   its certificate is valid. The API emits HSTS when Hostinger forwards the
   secure scheme to Node.

## After deployment

- Check that HTTP and `www` requests redirect to the canonical HTTPS domain.
- Confirm `/robots.txt`, `/sitemap.xml`, and direct nested-page refreshes work.
- Run PageSpeed Insights on the deployed home and universities pages on mobile
  and desktop. Field Core Web Vitals are measured after real users visit the
  deployed site; a local build cannot guarantee a passing CrUX score.
