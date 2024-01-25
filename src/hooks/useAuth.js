import { useEffect, useRef } from "react";
import { useState } from "react";
import Keycloak from "keycloak-js";
const envVars = import.meta.env;

export default function useAuth() {
  const isRendered = useRef(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isRendered.current) return;

    isRendered.current = true;

    const client = new Keycloak({
      url: envVars.VITE_KEYCLOAK_URL,
      realm: envVars.VITE_KEYCLOAK_REALM,
      clientId: envVars.VITE_KEYCLOAK_CLIENT,
    });

    client
      .init({
        onLoad: "login-required",
      })
      .then((res) => setIsLoggedIn(res));
  }, []);

  return isLoggedIn;
}
