import { SVGProps } from "react";

export function IconUser(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            {...props}
        >
            <circle
                cx="128"
                cy="96"
                r="64"
                fill="none"
                stroke="inherit"
                strokeMiterlimit="10"
                strokeWidth="16"
            ></circle>
            <path
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                d="M31 216a112 112 0 01194 0"
            ></path>
        </svg>
    );
}