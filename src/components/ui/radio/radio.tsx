import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import s from "./radio.module.scss";
import { Typography } from "../typography";

export type RadioProps = {
  id: string;
  label?: string;
} & ComponentPropsWithoutRef<"input">;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <div className={s.root}>
        <label className={s.label}>
          <input
            {...rest}
            type={"radio"}
            id={id}
            ref={ref}
            className={s.input}
          />
          <span className={s.check}></span>
        </label>
        <Typography className={s.labelText} variant="body3">
          {label}
        </Typography>

        <label htmlFor={id}></label>
      </div>
    );
  }
);

Radio.displayName = "Radio";
