const configuredBaseUrl =
  import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;

const isLocalApiUrl =
  configuredBaseUrl && /^https?:\/\/(localhost|127(?:\.\d{1,3}){3})(?::|\/|$)/i.test(
    configuredBaseUrl,
  );

if (!import.meta.env.DEV && isLocalApiUrl) {
  console.error(
    "Production API URL points to localhost. Configure VITE_API_BASE_URL for deployment.",
  );
}

export const API_BASE_URL = import.meta.env.DEV
  ? configuredBaseUrl || "http://localhost:5000"
  : configuredBaseUrl && !isLocalApiUrl
    ? configuredBaseUrl.replace(/^http:\/\//i, "https://").replace(/\/+$/, "")
    : window.location.origin;
