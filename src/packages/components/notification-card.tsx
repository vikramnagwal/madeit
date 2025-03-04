import { useContext } from "react";
import { MobileTypeContext } from "./mobile";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const notificationCardVariants = cva("flex flex-col relative p-2 shadow-md", {
	variants: {
		variant: {
			iphone: "rounded-[10.5mm] backdrop-blur-[10px] bg-white/20",
			android: "rounded-[5.5mm] bg-white/10",
		},
	},
});

interface NotificationCardProps {
	title: string;
	description: string;
	date?: Date;
	sender?: string;
	className?: string;
}

export function NotificationCard({
	title,
	description,
	date,
	sender,
	className,
}: NotificationCardProps) {
	const { variant } = useContext(MobileTypeContext);

	return (
		<div className={cn(notificationCardVariants({ variant }), className)}>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>{date?.toDateString()}</p>
			<p>{sender}</p>
		</div>
	);
}
