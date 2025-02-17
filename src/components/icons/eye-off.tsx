import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface EyeOffIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const EyeOffIcon = forwardRef<SVGSVGElement, EyeOffIconProps>(({ className, ...props }, ref) => {
    return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 -0.5 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn('w-5',className)}
                {...props}
            >
                <desc>{"Eye Off Streamline Icon: https://streamlinehq.com"}</desc>
                <path
                    d="M9.905333333333335 9.9075375C8.678570833333334 11.134683333333333 9.24025 13.229695833333334 10.916470833333333 13.678483333333332C11.69435 13.886729166666669 12.524266666666668 13.664204166666668 13.0936125 13.094666666666667"
                    strokeWidth={2}
                />
                <path
                    d="M16.775529166666665 16.766520833333335C15.194566666666667 17.75561666666667 13.364820833333333 18.274266666666666 11.5 18.262C7.4428 18.262 4.061800000000001 16.008000000000003 1.357 11.5C2.7905708333333337 9.110779166666667 4.4134125 7.354920833333333 6.225620833333333 6.232425M9.448879166666668 4.940879166666667C10.123929166666667 4.804220833333333 10.811150000000001 4.736179166666667 11.5 4.738C15.5572 4.738 18.938200000000002 6.992000000000001 21.643 11.5C20.892433333333333 12.751008333333335 20.088870833333335 13.829516666666667 19.2334625 14.734470833333333"
                    strokeWidth={2}
                />
                <path
                    d="M1.357 1.357L21.643 21.643"
                    strokeWidth={2}
                />
            </svg>
    )
})

EyeOffIcon.displayName = 'EyeOffIcon'

export default EyeOffIcon
