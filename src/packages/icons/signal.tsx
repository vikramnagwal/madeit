import { SVGProps } from "react";

export function Signal(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        fill="#ffffff"
        width="26"
        height="26"
        viewBox="-7 -7 30 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        className="jam jam-signal"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M0 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"></path>
          <path d="M5 7a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z"></path>
          <path d="M10 3a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"></path>
          <path d="M15 1a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1z" opacity="60"></path>
        </g>
      </svg>
    );
}