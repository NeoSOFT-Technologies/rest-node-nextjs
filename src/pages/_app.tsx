import "../client/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Authguard from "../client/components/auth-guard/AuthGuard";
import store from "../client/store";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "../client/components/error-boundary/ErrorBoundary";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Authguard>
          <Component {...pageProps} />
        </Authguard>
      </ErrorBoundary>
    </Provider>
  );
}

export default MyApp;
