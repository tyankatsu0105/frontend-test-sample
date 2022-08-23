import React from "react";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

type Props = {
  readonly className?: React.ComponentProps<"div">["className"];
  readonly errorMessage?: string;
  readonly inputProps: Omit<React.ComponentProps<"input">, "type"> & {
    type: "text" | "number" | "password";
  };
  readonly isError?: boolean;
  readonly label: string;
};

// =========================
// component
// =========================

const Component = (props: Props): JSX.Element => (
  <div
    className={`${styles.container}  ${props.className}`}
    data-disabled={props.inputProps.disabled}
  >
    <label>
      <span className={styles.label}>
        <span>{props.label}</span>
        {props.inputProps.required && (
          <span className={styles.required}>*</span>
        )}
      </span>
      <input
        {...props.inputProps}
        className={styles.input}
        data-is-error={props.isError}
      />
    </label>
    {props.isError && <p className={styles.error}>{props.errorMessage}</p>}
  </div>
);

export const Input = React.memo(Component);
