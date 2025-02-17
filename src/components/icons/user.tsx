import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const UserIcon = forwardRef<SVGSVGElement, UserIconProps>(({ className, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
            id="User-Circle-Single--Streamline-Flex"
            className={cn('w-5', className)}
            {...props}
        >
            <desc>{"User Circle Single Streamline Icon: https://streamlinehq.com"}</desc>
            <g id="user-circle-single--circle-geometric-human-person-single-user">
                <path id="Intersect" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.7045 12.0345c-0.2065 -0.7775 -0.653 -1.4723 -1.27879 -1.9838 -0.68453 -0.55951 -1.54144 -0.86515 -2.42553 -0.86515 -0.88409 0 -1.74099 0.30564 -2.42552 0.86515 -0.62578 0.5115 -1.07231 1.2063 -1.27876 1.9838" strokeWidth={1} />
                <path id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 13.5c4.16 0 6.5 -2.34 6.5 -6.5S11.16 0.5 7 0.5 0.5 2.84 0.5 7s2.34 6.5 6.5 6.5Z" strokeWidth={1} />
                <path id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.99902 7.58008c1.4 0 2.1875 -0.7875 2.1875 -2.1875s-0.7875 -2.1875 -2.1875 -2.1875 -2.1875 0.7875 -2.1875 2.1875 0.7875 2.1875 2.1875 2.1875Z" strokeWidth={1} />
            </g>
        </svg>
    )
})

UserIcon.displayName = 'UserIcon'

export default UserIcon
