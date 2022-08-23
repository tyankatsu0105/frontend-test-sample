// import AbortController from "abort-controller";
// import fgetch, { Headers, Request, Response } from "node-fetch";

// Object.assign(globalThis, {
//   fetch,
//   Headers,
//   Request,
//   Response,
//   AbortController,
// });

import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import type { Next } from "~shared/modules";
import { wrapper } from "~store/index";

import { useInitialize } from "./_app.facade";

type AppPropsWithLayout = AppProps & {
  Component: Next.NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useInitialize();

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
