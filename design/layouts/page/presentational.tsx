import React from "react";
import styles from "./presentational.module.scss";
import Link from "next/link";

// =========================
// props
// =========================

type Props = {
  readonly title: string | undefined;
  readonly children: React.ReactNode;
};

// =========================
// component
// =========================

const Component = (props: Props): React.ReactElement => (
  <>
    <h1 className={styles.heading}>{props.title}</h1>

    <div className={styles.contents}>{props.children}</div>
  </>
);

export const Page = React.memo(Component);
