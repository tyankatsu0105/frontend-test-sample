import type { AppProps } from "next/app";
import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";

import { Provider } from "react-redux";
import { createStore } from "~store/index";

const store = createStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
