import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, icon, error, errorMessage, label, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative flex flex-col w-full",
          error ? "text-red-500" : "",
          className
        )}
      >
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "mb-2 block text-sm font-medium text-eb-primary-gray-700",
              error ? "text-red-500":"",
            )}
          >
            {label}
          </label>
        )}
        <div>
          <div
            className={cn(
              "flex items-center rounded-md outline outline-1 outline-eb-primary-gray-400 focus-within:outline-2",
              error ? "outline-red-500" : "focus-within:outline-eb-primary-ygreen-500"
            )}
          >
            {icon && (
              <div className="absolute left-3 z-10">{icon}</div>
            )}
            <input
              type={type}
              className={cn(
                "px-3 block text-sm min-w-0 grow py-1.5 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9",
                error && "border-red-500",
                icon && "pl-10"
              )}
              ref={ref}
              {...props}
            />
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

Input.displayName = "Input";

export { Input };