import "../client/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Authguard from "../client/components/auth-guard/AuthGuard";
import store from "../client/store";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "../client/components/error-boundary/ErrorBoundary";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import Header from "../client/components/header/Header";
import "../client/i18n/config";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
console.log(Authguard)

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={pageProps.session}  >
        <Provider store={store}>
          <ErrorBoundary>
            <Authguard>
              <Component {...pageProps} />
            </Authguard>
          </ErrorBoundary>
        </Provider>
      </SessionProvider>
    );
  }
  return (
    <>
   
      <SessionProvider session={pageProps.session} >
        <Provider store={store}>
          <ErrorBoundary>
          <Header />
            <Authguard>
              <Component {...pageProps} />
            </Authguard>
          </ErrorBoundary>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
