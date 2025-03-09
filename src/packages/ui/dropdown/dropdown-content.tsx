import { cn } from "@/packages/utils/cn";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, useContext } from "react";

const dropdownContentVariant = cva(
  "p-2 m-2 w-48 md:w-56 shadow-md duration-75",
  {
    variants: {
      variant: {
        default: "bg-white text-black rounded-md",
        cheers: "bg-black text-white border border-white rounded-lg",
        white: "bg-transparent text-black border border-black rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type DropdownContentProps = PropsWithChildren<{
    variant?: "default" | "cheers" | "white";
    className?: string;
    options: { id: number, label: string }[];
    onSelect: (label: string) => void;
}> & VariantProps<typeof dropdownContentVariant>;

export function DropdownContent({ variant, className, options, onSelect }: DropdownContentProps) {
    
    function handleSelect(label: string) {
        onSelect(label);
        console.log(`variant: ${variant}`);
        console.log(`Selected: ${label}`);
    }
    return (
      <DropdownMenuContent className={cn(dropdownContentVariant({ variant }), className)}>
        {options.map(({ id, label }) => (
          <DropdownMenuItem key={id} className="p-1 cursor-pointer border-none" onClick={() => handleSelect(label)}>{label}</DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    );
}