import { SVGProps } from "react";

export function IconCheck(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            {...props}
        >
            <path
                fill="none"
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                d="M216 72L104 184 48 128"
            ></path>
        </svg>
    );
}