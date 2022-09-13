import React from "react";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

type Props = React.ComponentProps<"div"> & {
  readonly errorMessage?: string;
  readonly inputProps: Omit<React.ComponentProps<"input">, "type"> & {
    type: "text" | "number" | "password";
  } & {
    readonly testid?: string;
  };
  readonly isError?: boolean;
  readonly label: string;
  readonly required?: boolean;
};

// =========================
// component
// =========================

const Component = (props: Props): JSX.Element => {
  const {
    className,
    errorMessage,
    inputProps,
    isError,
    label,
    required,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      className={`${styles.container}  ${className}`}
      data-disabled={inputProps.disabled}
    >
      <label>
        <span className={styles.label}>
          <span>{label}</span>
          {required && <span className={styles.required}>*</span>}
        </span>
        <input
          {...inputProps}
          className={styles.input}
          data-is-error={isError}
          data-testid={inputProps.testid}
        />
      </label>
      {isError && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export const Input = React.memo(Component);
