import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import LoadingIcon from "../icons/loading";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 text-eb-primary-green-100 font-bold hover:from-eb-primary-green-700 hover:to-eb-primary-green-600 rounded-3xl px-3",
        secondary:
          "bg-gradient-to-r from-eb-primary-yellow-600 to-eb-primary-yellow-400 text-eb-primary-green-700 font-bold hover:from-eb-primary-yellow-700 hover:to-eb-primary-yellow-600 rounded-3xl px-3",
        primarycustom:
          "bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 text-eb-primary-green-100 font-bold hover:from-eb-primary-green-700 hover:to-eb-primary-green-600 rounded-3xl",
        secondarycustom: 
          "bg-gradient-to-r from-eb-primary-yellow-600 to-eb-primary-yellow-400 text-eb-primary-green-800 font-bold hover:from-eb-primary-yellow-700 hover:to-eb-primary-yellow-600 rounded-3xl",
        default:
          "bg-eb-primary-green-100 text-eb-primary-green-800 font-bold hover:bg-eb-primary-green-200 rounded-3xl px-3",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/70 rounded-3xl px-3",
        prominent:
          "bg-eb-primary-gray-200 text-eb-primary-green-800 hover:bg-eb-primary-gray-300 rounded-3xl px-3",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-3xl",
        ghost: "bg-eb-primary-gray-200 text-eb-primary-gray-500 hover:bg-eb-primary-gray-300 rounded-3xl px-3",
        backdrop: "bg-white/10 hover:bg-white/20 items-center justify-center rounded-3xl px-5",
        link: "text-eb-primary-green-800",
      },
      size: {
        default: "h-10",
        sm: "h-8 rounded-xl px-2 text-xs",
        lg: "h-10 rounded-3xl px-8",
        icon: "h-9 w-9",
        full: "w-full"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled || loading}
      >
        {loading ? <>
          <span className="mr-2 ">
            <LoadingIcon />
          </span>
          Loading...
        </> : props.children}
      </Comp>
    )
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
