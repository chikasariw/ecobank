import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 text-eb-primary-green-100 font-bold hover:from-eb-primary-green-700 hover:to-eb-primary-green-600 rounded-3xl",
        secondary:
          "bg-gradient-to-r from-eb-primary-yellow-600 to-eb-primary-yellow-400 text-eb-primary-green-700 font-bold hover:from-eb-primary-yellow-700 hover:to-eb-primary-yellow-600 rounded-3xl",
        primarycustom:
          "bg-eb-primary-green-100 text-eb-primary-green-800 font-bold hover:eb-primary-yellow-700 rounded-3xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-3xl",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "bg-eb-primary-gray-100 text-eb-primary-gray-500 hover:bg-eb-primary-gray-300 rounded-3xl",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10",
        sm: "h-8 rounded-3xl px-3 text-xs",
        lg: "h-10 rounded-3xl px-8",
        icon: "h-9 w-9",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
