import React from "react";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

type Props = {
  readonly children: React.ReactNode;
  readonly title: string | undefined;
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
