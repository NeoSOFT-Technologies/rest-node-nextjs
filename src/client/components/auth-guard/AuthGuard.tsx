import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"

function Authguard({ children }: { children: any }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { status } = useSession()

  function authCheck(url: string) {
    const publicPaths = ["/", "/register"];
    const path = url.split("?")[0];

    if (status == "unauthenticated" && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/",
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
  }, []);

  return authorized && children;
}

export default Authguard;
