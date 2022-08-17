// import AbortController from "abort-controller";
// import fgetch, { Headers, Request, Response } from "node-fetch";

// Object.assign(globalThis, {
//   fetch,
//   Headers,
//   Request,
//   Response,
//   AbortController,
// });

import type { AppProps } from "next/app";
import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";

import { wrapper } from "~store/index";

import { Main } from "~design/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default wrapper.withRedux(MyApp);
