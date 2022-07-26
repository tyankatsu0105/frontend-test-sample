import React from "react";

import { PolymorphicComponent } from "~shared/modules";

import styles from "./presentational.module.scss";

// =========================
// props
// =========================

const defaultElement = "button";

type FeatureProps = {
  readonly testid?: string;
  readonly variant: "box" | "outline";
};

type Props<T extends React.ElementType = typeof defaultElement> =
  PolymorphicComponent.PolymorphicPropsWithRef<FeatureProps, T>;

// =========================
// component
// =========================

const Component = <T extends React.ElementType = typeof defaultElement>(
  props: Props<T>
): JSX.Element => {
  const { as, className, testid, variant, ...restProps } = props;
  const Element = as || defaultElement;

  return (
    <Element
      {...restProps}
      className={`${className} ${styles.element}`}
      data-testid={testid}
      data-variant={variant}
    />
  );
};

export const Button: PolymorphicComponent.PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof defaultElement
> = React.memo(Component);
