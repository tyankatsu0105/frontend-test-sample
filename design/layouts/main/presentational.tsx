import Link from "next/link";
import React from "react";

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
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a>Top</a>
        </Link>
      </div>

      <ul className={styles.navigation}>
        <li>
          <Link href="/post">
            <a>Post</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/tyankatsu0105/frontend-test-sample"
            target="_blank"
          >
            <a>GitHub</a>
          </Link>
        </li>
      </ul>
    </header>

    <main className={styles.main}>{props.children}</main>
  </div>
);

export const Main = React.memo(Component);
