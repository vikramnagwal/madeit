import { useContext } from "react";
import { MobileTypeContext } from "./mobile";
import { cva } from "class-variance-authority";
import Balancer from "react-wrap-balancer";
import { cn } from "../utils/cn";
import { HiOutlineChevronDown } from "react-icons/hi";
import { LemonSqueezy, Gumroad, X, Stripe, Paypal } from "../icons/index";
import { IoNotificationsCircle } from "react-icons/io5";



const notificationCardVariants = cva("flex items-center space-x-1 text-sm leading-4 font-light relative p-2 m-2 mt-1", {
	variants: {
		variant: {
			iphone: "rounded-xl backdrop-blur-[10px] border-none bg-white/30 text-white",
			android: "rounded-[10px] bg-white/80 text-black card",
		},
	},
});

export type NotificationOptionsProps = {
	from?: 'X' | 'Stripe' | 'Lemon Squeezy' | 'Paypal' | 'Gumroad' | 'New Notification';
	sender: string;
	showSender?: boolean;
	amount: number;
	time?: Date;
	timeAgo?: number;
	className?: string;
}

const notificationIcons = [
	{ name: "X", icon: <X /> , title: "You got paid!", description: "has been deposited into your account"},
	{ name: "Stripe", icon: <Stripe />, title: "Stripe" },
	{ name: "Lemon Squeezy", icon: <LemonSqueezy />, title: "You made a sale!" },
	{ name: "Paypal", icon: <Paypal />, title: "Paypal" },
	{ name: "Gumroad", icon: <Gumroad />, title: "Gumroad" },
	{ name: "New Notification", icon: <IoNotificationsCircle />, title: "New Notification" },
]

export function NotificationCard({
	from = 'New Notification',
	timeAgo = 1,
	showSender,
	amount,
	sender,
	className,
}: NotificationOptionsProps) {

	const { variant } = useContext(MobileTypeContext);

	return (
    <div className={cn(notificationCardVariants({ variant }), className)}>
      <div className="z-30">
        {notificationIcons.find((icon) => icon.name === from)?.icon}
      </div>
      <div className="flex flex-col w-full">
        <div
          className={cn(
            `flex items-center mb-1`,
            variant === "iphone" && "justify-between"
          )}
        >
          <h1 className="font-poppins text-[14px] font-[400]">
            {notificationIcons.find((icon) => icon.name === from)?.title}
          </h1>
          <span className="text-xs opacity-80 mx-2">{timeAgo}h ago</span>
        </div>
        <p className="font-poppins text-[13px]">
          <Balancer ratio={0.18} preferNative={false}>
            {from === "X" ? (
              <>
                ${amount ? amount.toFixed(2) : "9.57"}{" "}
                {
                  notificationIcons.find((icon) => icon.name === from)
                    ?.description
                }{" "}
              </>
            ) : (
              <>
                you recieved a payment of ${amount ? amount.toFixed(2) : "9.57"}{" "}
                from{" "}
                <span>
                  {showSender ? (
                    <span>{sender}</span>
                  ) : (
                    <span className="inline-block w-32 h-4 bg-black backdrop-blur-lg z-30 align-middle" />
                  )}
                </span>
              </>
            )}
          </Balancer>
        </p>

        {variant === "android" && (
          <div>
            <HiOutlineChevronDown className="absolute right-3 top-3 opacity-80" />
          </div>
        )}
      </div>
    </div>
  );
}
