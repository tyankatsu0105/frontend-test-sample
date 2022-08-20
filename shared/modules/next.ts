import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

// =============================================================
// Layout
// =============================================================

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export const getLayout = (callback: (page: ReactElement) => JSX.Element) =>
  callback;
