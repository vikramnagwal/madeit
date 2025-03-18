import { cn } from "@/packages/utils/cn";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./dropdown-menu";

const dropdownButtonVariants = cva(
  "m-2 flex justify-between items-center font-medium duration-75 w-48 md:w-56 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "backdrop-blur-xl bg-white/20 rounded-md border-none px-2 py-1 focus:outline-none",
        cheers:
          "bg-transparent text-white border border-white rounded-lg px-3 py-2",
        white:
          "border border-black rounded-md text-black text-sm hover:bg-[#1E90FF] px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type DropdownButtonProps = PropsWithChildren<{
    title: string;
    className?: string;
}> & VariantProps<typeof dropdownButtonVariants>;

export function DropdownButton({ title, className }: DropdownButtonProps) {
  const { variant } = useContext(DropdownContext);
    return (
      <DropdownMenuTrigger
        className={cn(dropdownButtonVariants({ variant }), className)}
      >
        <span>{title}</span>
        <HiOutlineChevronDown />
      </DropdownMenuTrigger>
    );
}