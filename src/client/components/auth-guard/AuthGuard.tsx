import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Authguard({ children }: { children: any }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const userData = useSelector((root: any) => root.login);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/profile"];
    const path = url.split("?")[0];
    if (!userData.data && publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: url },
      });
    } else {
      setAuthorized(true);
    }
  }

  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [userData]);

  return authorized && children;
}

export default Authguard;
