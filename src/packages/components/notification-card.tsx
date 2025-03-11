import { useContext } from "react";
import { MobileTypeContext } from "./mobile";
import { cva } from "class-variance-authority";
import Balancer from "react-wrap-balancer";
import { cn } from "../utils/cn";
import { Gumroad } from "../icons/gumroad";
import { HiOutlineChevronDown } from "react-icons/hi";


const notificationCardVariants = cva("flex items-center space-x-2 text-sm leading-4 font-light relative p-2 m-2 mt-1 shadow-md", {
	variants: {
		variant: {
			iphone: "rounded-xl backdrop-blur-[10px] border-none bg-white/20 text-white",
			android: "rounded-[10px] bg-white/80 text-black card",
		},
	},
});

type NotificationOptionsProps = {
	from?: 'X' | 'Lemon Squeezy' | 'Paypal' | 'Gumroad' | 'New Notification';
	description: string;
	sender: string;
	showSender?: boolean;
	time?: Date;
	timeAgo?: number;
	className?: string;
}


export function NotificationCard({
	from = 'New Notification',
	description,
	timeAgo = 1,
	showSender,
	sender,
	className,
}: NotificationOptionsProps) {
	const { variant } = useContext(MobileTypeContext);

	return (
    <div className={cn(notificationCardVariants({ variant }), className)}>
      <div>
        <Gumroad />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between mb-1">
          <h1 className="font-semibold">{from}</h1>
		  {variant === "iphone" && (<span className="text-xs opacity-80">
			{timeAgo}h ago
		  </span>)}
        </div>
        <p>
          <Balancer ratio={0.43} preferNative={false}>
            {description} <span>{showSender ? sender : <div className="w-44 h-4 bg-black"/>}</span>
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
