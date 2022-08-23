import Link from "next/link";
import React from "react";

import { Header } from "~design/recipes";

import styles from "./presentational.module.scss";
// =========================
// props
// =========================

type Props = {
  children: React.ReactNode;
};

// =========================
// component
// =========================

const Component = (props: Props): React.ReactElement => (
  <div className={styles.container}>
    <Header />

    <main className={styles.main}>{props.children}</main>
  </div>
);

export const Main = React.memo(Component);
