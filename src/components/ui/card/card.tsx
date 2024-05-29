import { ComponentPropsWithoutRef, ElementType } from "react";

import { clsx } from "clsx";

import s from "./card.module.scss";

export type CardProps<T extends ElementType = "div"> = {
  as?: T;
  isBorder?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Card = <T extends ElementType = "div">(props: CardProps<T>) => {
  const { className, as: Component = "div", isBorder = true, ...restProps } = props;

  const classNames = {
    root: clsx(isBorder && s.root, className),
  };

  return <Component className={classNames.root} {...restProps} />;
};
