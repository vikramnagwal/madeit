import { SVGProps } from "react";


export function Gumroad(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        fill="none"
        viewBox="0 0 256 256"
        id="gumroad"
        {...props}
      >
        <rect width="224" height="224" x="16" y="16" fill="#EEE" rx="70"></rect>
        <path
          fill="#FF90E8"
          d="M128.001 194.666C164.82 194.666 194.667 164.819 194.667 128C194.667 91.1807 164.82 61.333 128.001 61.333C91.1817 61.333 61.334 91.1807 61.334 128C61.334 164.819 91.1817 194.666 128.001 194.666Z"
        ></path>
        <path
          fill="#000"
          d="M122.213 161.6C102.685 161.6 91.1973 145.936 91.1973 126.452C91.1973 106.205 103.834 89.7773 127.957 89.7773C152.846 89.7773 161.27 106.587 161.653 116.137H143.656C143.274 110.789 138.679 102.766 127.574 102.766C115.704 102.766 108.045 113.081 108.045 125.688C108.045 138.295 115.704 148.61 127.574 148.61C138.296 148.61 142.891 140.206 144.805 131.801H127.574V124.925H163.731V160.072H147.868V137.914C146.719 145.936 141.742 161.6 122.213 161.6Z"
        ></path>
      </svg>
    );
}