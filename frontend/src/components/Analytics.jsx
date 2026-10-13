import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../services/analytics";

const Analytics = () => {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    trackPageView({ pathname, search, hash, key });
  }, [pathname, search, hash, key]);

  return null;
};

export default Analytics;
