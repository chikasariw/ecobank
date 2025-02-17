import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface LockIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
}

const LockIcon = forwardRef<SVGSVGElement, LockIconProps>(({ className, ...props }, ref) => {
    return (
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                className={cn('w-5', className)}
            {...props}
            >
                <desc>{"Padlock Square 1 Streamline Icon: https://streamlinehq.com"}</desc>
                <g id="padlock-square-1--combination-combo-lock-locked-padlock-secure-security-shield-keyhole">
                    <path
                        id="Intersect"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1.88743 10.6062c0.16263 1.4347 1.37585 2.5533 2.81882 2.6045 0.73196 0.026 1.48354 0.0394 2.29359 0.0394 0.81004 0 1.56163 -0.0134 2.29359 -0.0394 1.44297 -0.0512 2.65617 -1.1698 2.81877 -2.6045 0.0567 -0.5001 0.096 -1.00815 0.096 -1.52279 0 -0.51463 -0.0393 -1.0227 -0.096 -1.52276 -0.1626 -1.43469 -1.3758 -2.5533 -2.81877 -2.6045 -0.73196 -0.02598 -1.48355 -0.0394 -2.29359 -0.0394 -0.81005 0 -1.56163 0.01342 -2.29359 0.0394 -1.44297 0.0512 -2.65619 1.16981 -2.81882 2.6045 -0.05668 0.50006 -0.09593 1.00813 -0.09593 1.52276 0 0.51464 0.03925 1.02269 0.09593 1.52279Z"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.91683 4.91667v-1.25c0 -0.77355 -0.30729 -1.51542 -0.85427 -2.0624C8.51558 1.05729 7.77371 0.75 7.00016 0.75c-0.77355 0 -1.51541 0.30729 -2.06239 0.85427 -0.54698 0.54698 -0.85427 1.28885 -0.85427 2.0624v1.25"
                        strokeWidth={1}
                    />
                    <path
                        id="Vector_2"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m7 8.5 0 0.99994"
                        strokeWidth={1}
                    />
                </g>
            </svg>
    )
})

LockIcon.displayName = 'LockIcon'

export default LockIcon
