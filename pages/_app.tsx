import type { AppProps } from "next/app";
import "the-new-css-reset/css/reset.css";
import "../styles/globals.css";
import "../styles/style1.css";
import "../styles/style2.css";
import "../styles/style3.css";
import "../styles/style4.css";
import "../styles/style5.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
