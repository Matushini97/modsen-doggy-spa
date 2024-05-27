import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./button.module.scss";
import clsx from "clsx";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: "primary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = "primary",
    fullWidth,
    className,
    as: Component = "button",
    ...rest
  } = props;
  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    />
  );
};
