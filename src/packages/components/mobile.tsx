'use client';

import React, { useEffect } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, createContext, useState } from "react";
import { cn } from "../utils/cn";
import { IoBatteryHalfOutline, IoLockClosed } from "react-icons/io5"
import { PiCellSignalFull } from "react-icons/pi";
import { MdBattery80 } from "react-icons/md";
import moment from "moment"; 
import { Signal } from "@/packages/icons/signal";
import { getDateNow, getTimeNow } from "../utils/time";
import { Wallpaper } from "./wallpaper";


const mobileVariants = cva(
  "flex flex-col relative w-[300px] h-[600px] bg-cover mx-auto shadow-md overflow-hidden",
  {
    variants: {
      variant: {
        iphone: "rounded-[10.5mm] ring ring-12 ring-slate-800",
        android: "rounded-[5.5mm] ring ring-8 ring-slate-600",
      },
    },
    defaultVariants: {
      variant: "iphone",
    },
  }
);

export type MobileOptionsProps = {
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
  hideSender?: boolean;
  batteryPercentage?: number;
  date?: string;
  wallpaper?: string;
};

type MobileProps = PropsWithChildren<{
  variant: "iphone" | "android";
  notificationNumber?: number;
  options: MobileOptionsProps;
  className?: string;
  children: React.ReactNode;
}> &
  VariantProps<typeof mobileVariants>;

export const MobileTypeContext = createContext<Pick<MobileProps, "variant">>({
  variant: "iphone",
});


export function Mobile({ variant, notificationNumber = 1, options, className, children }: MobileProps) {

  const notifications = Array.from({ length: notificationNumber}, (_, i) => i);
  const hours = moment().format('h:mm');

  const [time, setTime] = useState(hours);

  return (
    <div className={cn(mobileVariants({ variant }), "relative", className)}>
      <img
        src={options.wallpaper ? options.wallpaper : '/one.webp'}
        alt="wallpaper"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* mobile navbar */}
      <div className="flex items-center justify-between px-4 py-1 absolute top-2 left-1/2 -translate-x-1/2 w-full">
        <p className="text-xs font-thin">{options.networkCarrier}</p>
        <div className="flex items-center space-x-2">
          {variant === "iphone" ? (
            <>
              <Signal />
              <IoBatteryHalfOutline className="text-2xl" />
            </>
          ) : (
            <>
              <PiCellSignalFull className="text-lg mx-0" />
              <PiCellSignalFull className="text-lg mx-1" />
              <span className="flex items-center">
                <p className="text-xs">{options.batteryPercentage ?? 78}%</p>
                <MdBattery80 color="white" fill="white" className="text-xl text-white mx-0 mb-1" />
              </span>
            </>
          )}
        </div>
      </div>
      <div className="mx-auto text-white mt-[40px]">
        {variant === "iphone" ? (
          <span className="text-[50px] leading-loose slashed-zero font-poppins font-[600]">
            {time}
          </span>
        ) : (
          <div className="mt-12 text-6xl w-full flex flex-col text-center font-light">
            <p className="text-start mx-auto">{time}</p>
            <span className="text-base">{options.date}</span>
          </div>
        )}
      </div>

      {variant === "iphone" ? (
        <div className="flex justify-between items-center px-2 absolute top-2 left-1/2 -translate-x-1/2 bg-black z-20 w-24 h-8 rounded-full">
          <IoLockClosed />
          <div className="w-4 h-4 rounded-full bg-white/20" />
        </div>
      ) : (
        <div>
          <div className="w-4 h-4 rounded-full bg-black/90 z-20 absolute top-2 left-1/2 -translate-x-1/2" />
        </div>
      )}
      <div className="relative z-10 flex flex-col mt-10">
        <MobileTypeContext.Provider value={{ variant }}>
          {notifications.map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        </MobileTypeContext.Provider>
      </div>
    </div>
  );
}
