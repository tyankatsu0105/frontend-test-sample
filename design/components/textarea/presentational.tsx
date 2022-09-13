import React from "react";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

type Props = {
  readonly className?: React.ComponentProps<"div">["className"];
  readonly errorMessage?: string;
  readonly isError?: boolean;
  readonly label: string;
  readonly required?: boolean;
  readonly textareaProps: React.ComponentProps<"textarea"> & {
    testid?: string;
  };
};

// =========================
// component
// =========================

const Component = (props: Props): JSX.Element => (
  <div
    className={`${styles.container}  ${props.className}`}
    data-disabled={props.textareaProps.disabled}
  >
    <label>
      <span className={styles.label}>
        <span>{props.label}</span>
        {props.required && <span className={styles.required}>*</span>}
      </span>
      <textarea
        {...props.textareaProps}
        className={styles.input}
        data-is-error={props.isError}
        data-testid={props.textareaProps.testid}
      />
    </label>
    {props.isError && (
      <p
        className={styles.error}
        data-testid={`errorMessage-${props.textareaProps.testid}`}
      >
        {props.errorMessage}
      </p>
    )}
  </div>
);

export const Textarea = React.memo(Component);
