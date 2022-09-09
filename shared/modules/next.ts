import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

// =============================================================
// Layout
// =============================================================
export type GetLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<
  Props = Record<PropertyKey, unknown>,
  InitialProps = Props
> = NextPage<Props, InitialProps> & {
  getLayout?: GetLayout;
};
export const getLayout = (callback: (page: ReactElement) => JSX.Element) =>
  callback;
