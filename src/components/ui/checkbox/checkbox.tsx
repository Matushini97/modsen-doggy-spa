import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { TextFieldProps } from "../text-field";
import s from "./checkbox.module.scss";
import { Typography } from "../typography";

export type CheckboxProps = {
  id: string;
  label?: string;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.root),
      input: clsx(s.input),
    };
    return (
      <div className={classNames.root}>
        <Typography className={s.labelText} variant="body3">
          {label}
        </Typography>
        <input
          {...rest}
          type={"radio"}
          id={id}
          ref={ref}
          className={classNames.input}
        />
        <label htmlFor={id}></label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
