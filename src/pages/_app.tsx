import "../client/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Authguard from "../client/components/auth-guard/AuthGuard";
import store from "../client/store";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "../client/components/error-boundary/ErrorBoundary";
import Header from "../client/components/header/header"
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout( 
    <Provider store={store}>
    <ErrorBoundary>
        <Authguard>
      <Component {...pageProps} />
       </Authguard>
      </ErrorBoundary>
    </Provider>)
  }
  return (
    <>
    <Header />
    <Provider store={store}>
   <ErrorBoundary>
      <Authguard>
      <Component {...pageProps} />
       </Authguard>
      </ErrorBoundary>
    </Provider>
    </>
  );
}

export default MyApp;
