import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'


interface EmailIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const EmailIcon = forwardRef<SVGSVGElement, EmailIconProps>(({ className, ...props }, ref) => {
    return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                className={cn('w-5', className)}
                {...props}
            >
                <desc>{"Mail Send Envelope Streamline Icon: https://streamlinehq.com"}</desc>
                <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
                    <path
                        id="Intersect"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1.032 10.537a2.092 2.092 0 0 0 1.852 1.814c1.329 0.14 2.705 0.286 4.116 0.286 1.41 0 2.787 -0.147 4.116 -0.286a2.09 2.09 0 0 0 1.852 -1.814c0.142 -1.144 0.282 -2.326 0.282 -3.537 0 -1.21 -0.14 -2.393 -0.282 -3.537a2.092 2.092 0 0 0 -1.852 -1.815C9.787 1.51 8.41 1.364 7 1.364c-1.41 0 -2.787 0.147 -4.116 0.286a2.09 2.09 0 0 0 -1.852 1.814C0.89 4.607 0.75 5.79 0.75 7s0.14 2.393 0.282 3.537Z"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector 15"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1.06 3.204 4.702 3.708a2 2 0 0 0 2.476 0l4.702 -3.708"
                        strokeWidth={1}
                    />
                </g>
            </svg>
    )
})

EmailIcon.displayName = 'EmailIcon'

export default EmailIcon
