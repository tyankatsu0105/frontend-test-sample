import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

// =============================================================
// Layout
// =============================================================

export type NextPageWithLayout<
  Props = Record<PropertyKey, unknown>,
  InitialProps = Props
> = NextPage<Props, InitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export const getLayout = (callback: (page: ReactElement) => JSX.Element) =>
  callback;
