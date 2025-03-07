'use client';

import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import moment from 'moment'; 

const mobileVariants = cva(
  "flex flex-col relative w-[300px] h-[600px] bg-cover mx-auto shadow-md overflow-hidden",
  {
    variants: {
      variant: {
        iphone: "rounded-[10.5mm] ring ring-12 ring-slate-800",
        android: "rounded-[5.5mm] ring ring-8 ring-slate-300",
      },
    },
    defaultVariants: {
      variant: "iphone",
    },
  }
);

type MobileProps = PropsWithChildren<{
  variant: "iphone" | "android";
  notificationNumber?: number;
  options: MobileOptionsProps;
  className?: string;
  children: React.ReactNode;
}> &
  VariantProps<typeof mobileVariants>;

type MobileOptionsProps = {
  networkCarrier?:
    | "Airtel"
    | "Vi"
    | "Jio"
    | "BSNL"
    | "Sprint"
    | "T-Mobile"
    | "Verizon"
    | "AT&T"
    | "TFW"
    | "MetroPCS";
    wallpaper: string;
};

export const MobileTypeContext = createContext<Pick<MobileProps, "variant">>({
  variant: "iphone",
});


export function Mobile({ variant, notificationNumber = 1,options ,className, children }: MobileProps) {

  const notifications = Array.from({ length: notificationNumber}, (_, i) => i);
  const hours = moment().format('h:mm');

  const [time, setTime] = useState(hours);

  return (
    <div className={cn(mobileVariants({ variant }), "relative", className)}>
      <img
        src={options.wallpaper}
        alt="wallpaper"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <span className="absolute top-2 left-6 opacity-80 text-xs z-20">{options.networkCarrier}</span>
      <div className="mx-auto text-white mt-[40px]">
        <span className="text-[50px] leading-loose slashed-zero font-poppins font-[600]">
          {time}
        </span>
      </div>
      {variant === "iphone" ? (
        <div className="flex justify-end items-center px-2 absolute top-2 left-1/2 -translate-x-1/2 bg-black z-20 w-24 h-8 rounded-full">
          <div className="w-4 h-4 rounded-full bg-white/20" />
        </div>
      ) : (
        <div>
          <div className="w-4 h-4 rounded-full bg-black/90 z-20 absolute top-2 left-1/2 -translate-x-1/2" />
        </div>
      )}
      <div className="relative z-10 flex flex-col mt-14">
        <MobileTypeContext.Provider value={{ variant }}>
          {notifications.map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        </MobileTypeContext.Provider>
      </div>
    </div>
  );
}
