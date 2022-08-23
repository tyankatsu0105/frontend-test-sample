import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import { isLoggedInSelector, nameSelector } from "~store/application/user";

import { useLogout } from "./facade";
import styles from "./presentational.module.scss";

// =========================
// props
// =========================

// =========================
// component
// =========================

const Component = (): React.ReactElement => {
  const name = useSelector(nameSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const { handleLogout } = useLogout();

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a>Top</a>
        </Link>
      </div>

      <ul className={styles.navigation}>
        <li className={`${styles.navigationItem} ${styles.navigationItemName}`}>
          Hello, {name || "Guest"}!
        </li>

        <li className={styles.navigationItem}>
          <Link href="/post">
            <a>Post</a>
          </Link>
        </li>

        {!isLoggedIn && (
          <li className={styles.navigationItem}>
            <Link href="/login">
              <a>Sign in</a>
            </Link>
          </li>
        )}

        {!isLoggedIn && (
          <li className={styles.navigationItem}>
            <Link href="/register">
              <a>Sign up</a>
            </Link>
          </li>
        )}

        {isLoggedIn && (
          <li className={styles.navigationItem}>
            <button onClick={handleLogout}>Log out</button>
          </li>
        )}

        <li className={styles.navigationItem}>
          <Link
            href="https://github.com/tyankatsu0105/frontend-test-sample"
            target="_blank"
          >
            <a>GitHub</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export const Header = React.memo(Component);
