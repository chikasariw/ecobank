"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import EyeOffIcon from "../icons/eye-off";
import EyeIcon from "../icons/eye";

export interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  passwordError?: boolean;
  passwordErrorMessage?: string;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    {
      className,
      icon,
      error,
      errorMessage,
      label,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
      if (props.disabled) return;

      setShowPassword((prevState) => !prevState);
    };

    return (
      <div
        className={cn(
          "relative flex flex-col w-full",
          error ? "text-red-500" : "",
          props.disabled && "text-mk-neutral-400",
          className
        )}
      >
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "block text-sm font-medium text-eb-primary-gray-700",
              error ? "text-red-500":"",
            )}
          >
            {label}
          </label>
        )}
        <div className="mt-2">
          <div
            className={cn(
              "flex items-center rounded-md bg-white pl-3 outline outline-1 outline-eb-primary-gray-400 focus-within:outline-2",
              error ? "outline-red-500" : "focus-within:outline-eb-primary-ygreen-500"
            )}
          >
            {icon && (
              <div className="absolute left-3 z-10">{icon}</div>
            )}
          <input
            type={showPassword ? "text" : "password"}
            className={cn(
              "block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9",
              error && "focus:border-red-500",
              icon && "pl-10"
            )}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "absolute right-3 z-20 cursor-pointer",
            )}
            onClick={handleTogglePassword}
          >
            {
              showPassword ? <EyeIcon /> : <EyeOffIcon />
            }
            </div>
          </div>
        </div>
        {error && (
          <p className="mt-2 text-red-500 text-sm">
            {errorMessage || "Something went wrong!"}
          </p>
        )}
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export { InputPassword };
