import React from "react";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

type Props = {
  readonly className?: React.ComponentProps<"div">["className"];
  readonly renderBody: () => React.ReactNode;
  readonly renderHead: (props: {
    styles: { heading: typeof styles.heading };
  }) => React.ReactNode;
};

// =========================
// component
// =========================

const Component = (props: Props): JSX.Element => (
  <div className={`${styles.wrap} ${props.className}`}>
    <div className={styles.head}>
      {props.renderHead({ styles: { heading: styles.heading } })}
    </div>
    <div className={styles.body}>{props.renderBody()}</div>
  </div>
);

export const Card = React.memo(Component);
