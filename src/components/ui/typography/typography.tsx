import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { clsx } from "clsx";

import s from "./typography.module.scss";

export interface TextProps<T extends ElementType> {
  as?: T;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "logo1"
    | "logo2"
    | "subheading1"
    | "subheading2"
    | "body1"
    | "body2"
    | "body3";
  children?: ReactNode;
  className?: string;
}

export function Typography<T extends ElementType = "p">({
  as,
  className,
  variant = "body1",
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const classNames = clsx(s.text, s[variant], className);
  const Component = as || "p";

  return <Component className={classNames} {...restProps} />;
}
