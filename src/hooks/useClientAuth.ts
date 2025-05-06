import { getAccessToken } from "@/services/auth/auth.helper";
import { useEffect, useState } from "react";

export const useClientAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const accessToken = getAccessToken();
    setIsAuth(!!accessToken);
  }, []);

  return isAuth;
};
