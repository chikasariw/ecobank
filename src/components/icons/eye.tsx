import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface EyeIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const EyeIcon = forwardRef<SVGSVGElement, EyeIconProps>(({ className, ...props }, ref) => {
    return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn('w-5',className)}
                {...props}
            >
                <desc>{"Eye Streamline Icon: https://streamlinehq.com"}</desc>
                <path
                    d="M9.648 12C9.648 13.8106 11.608 14.9422 13.176 14.0369C13.9037 13.6167 14.352 12.8403 14.352 12C14.352 10.1894 12.392 9.0578 10.824 9.9631C10.0963 10.3833 9.648 11.1597 9.648 12"
                    strokeWidth={2}
                />
                <path
                    d="M22.584 12C19.7616 16.704 16.2336 19.056 12 19.056C7.7664 19.056 4.2384 16.704 1.416 12C4.2384 7.296 7.7664 4.944 12 4.944C16.2336 4.944 19.7616 7.296 22.584 12"
                    strokeWidth={2}
                />
            </svg>
    )
})

EyeIcon.displayName = 'EyeIcon'

export default EyeIcon
