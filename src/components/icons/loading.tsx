import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface LoadingIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const LoadingIcon = forwardRef<SVGSVGElement, LoadingIconProps>(({ className, ...props }, ref) => {
    return (
        <div className={cn('w-5 h-5 flex-none animate-spin', className)}>
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                id="Timer-Zero--Streamline-Flex"
                className={cn(className)}
                {...props}
            >
                <desc>{"Timer Zero Streamline Icon: https://streamlinehq.com"}</desc>
                <g id="timer-zero--whole-midnight-hour-clock-time">
                    <path
                        id="Vector"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.346 7H0.95"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.705 3.705 -0.987 -0.987"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.705 10.295 -0.987 0.986"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.654 7h1.396"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.295 10.295 0.986 0.986"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 11.654v1.396"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_7"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.295 3.705 0.986 -0.987"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 2.346V0.95"
                        strokeWidth={1}
                    />
                </g>
            </svg>
        </div>
    )
})

LoadingIcon.displayName = 'LoadingIcon'

export default LoadingIcon
