import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, createContext } from "react";
import { cn } from "../utils/cn";

const mobileVariants = cva(
	"flex flex-col relative w-[300px] h-[600px] bg-cover mx-auto shadow-md overflow-hidden",
	{
		variants: {
			variant: {
				iphone: "rounded-[10.5mm] ring ring-8 ring-slate-800",
				android: "rounded-[5.5mm] ring ring-6 ring-slate-300",
			},
		},
		defaultVariants: {
			variant: "iphone",
		},
	},
);

type MobileProps = PropsWithChildren<{
	variant: "iphone" | "android";
	className?: string;
}> &
	VariantProps<typeof mobileVariants>;

export const MobileTypeContext = createContext<Pick<MobileProps, "variant">>({
	variant: "iphone",
});

export function Mobile({
	variant = "iphone",
	className,
	children,
}: MobileProps) {
	return (
		<div className={cn(mobileVariants({ variant }), className)}>
			<img
				src="https://images.unsplash.com/photo-1740927726070-26542d1a9b04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
				alt="image"
				className="w-full h-full object-cover"
			/>
			<MobileTypeContext value={{ variant }}>{children}</MobileTypeContext>
		</div>
	);
}
