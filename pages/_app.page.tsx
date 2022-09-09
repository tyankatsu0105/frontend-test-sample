import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import type { Next } from "~shared/modules";
import { wrapper } from "~store/index";

import { useAuth } from "./_app.facade";

type AppPropsWithLayout = AppProps & {
  Component: Next.NextPageWithLayout;
};

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useAuth();

  const getLayout = Component.getLayout ?? ((page) => page);

  const App = () => <Component {...pageProps} />;

  return getLayout(<App />);
}

export default wrapper.withRedux(MyApp);
