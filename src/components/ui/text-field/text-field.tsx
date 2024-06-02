import {
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react";

import { clsx } from "clsx";

import { Typography } from "../typography";

import s from "./text-field.module.scss";
import { Search } from "@/assets/icons";

export type TextFieldProps = {
  onValueChange?: (value: string) => void;
  containerProps?: ComponentProps<"div">;
  labelProps?: ComponentProps<"label">;
  errorMessage?: string;
  label?: string;
  isSearch?: boolean;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type,
      containerProps,
      labelProps,
      label,
      isSearch,
      onChange,
      onValueChange,
      ...restProps
    },
    ref
  ) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onValueChange?.(e.target.value);
    };

    const classNames = {
      root: clsx(s.root, containerProps?.className),
      fieldContainer: clsx(s.fieldContainer),
      field: clsx(s.field, !!errorMessage && s.error, className),
      label: clsx(s.label, labelProps?.className),
      error: clsx(s.error),
    };

    return (
      <div className={classNames.root}>
        {label && (
          <Typography variant="body2" as="label" className={classNames.label}>
            {label}
          </Typography>
        )}
        <div className={classNames.fieldContainer}>
          <input
            className={classNames.field}
            placeholder={placeholder}
            ref={ref}
            type={type}
            onChange={handleChange}
            {...restProps}
          />
          {isSearch && (
            <button
              className={s.search}
              type={'button'}
              onClick={() => console.log('search')}
            >
              <Search />
            </button>
          )}
        </div>

        <Typography variant="error" className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    );
  }
);

TextField.displayName = "TextField";
