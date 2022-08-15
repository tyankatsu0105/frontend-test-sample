import React from "react";
import styles from "./presentational.module.scss";
import Link from "next/link";

// =========================
// props
// =========================

type Props = {
  readonly renderHead: (props: {
    styles: { heading: typeof styles.heading };
  }) => React.ReactNode;
  readonly renderBody: () => React.ReactNode;
  readonly className?: React.ComponentProps<"div">["className"];
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
