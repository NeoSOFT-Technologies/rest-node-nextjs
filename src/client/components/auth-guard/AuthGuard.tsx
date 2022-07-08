import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react"
function Authguard({ children }: { children: any }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const userData = useSelector((root: any) => root.login);
  const { data: session } = useSession()
  

  useEffect(() => {

    function authCheck(url: string) {
      // redirect to login page if accessing a private page and not logged in
      const publicPaths = ["/"];
      const path = url.split("?")[0];
      console.log(session,path)
      console.log(authorized,"beforeif")
      if (!userData.data &&!session && !publicPaths.includes(path)) {
        setAuthorized(false);
    console.log(authorized,"if")
        router.push({
          pathname: "/",
          query: { returnUrl: url },
        });
      } else {
        setAuthorized(true);
        console.log(authorized,"else")
      }
    }
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authorized, router, router.asPath, router.events, session, userData.data]);

  return authorized && children;
}

export default Authguard;
