import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./dropdown-menu";

const dropdownContentVariant = cva(
  "p-2 m-2 w-48 md:w-56 shadow-md duration-75",
  {
    variants: {
      variant: {
        default: "backdrop-blur-xl bg-white/10 rounded-lg overflow-hidden",
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
    options: { id: number, label: string, children?: React.ReactNode }[];
    onSelect: (label: string) => void;
}> & VariantProps<typeof dropdownContentVariant>;

export function DropdownContent({ options, onSelect }: DropdownContentProps) {
  const { variant } = useContext(DropdownContext);
    
    function handleSelect(label: string) {
        onSelect(label);
    }
    return (
      <DropdownMenuContent
        className={dropdownContentVariant({ variant })}
      >
        {options.map(({ id, label, children }) => (
          <DropdownMenuItem
            key={id}
            className="p-1 m-1 border-none outline-none focus:outline-none hover:backdrop-blur-md duration-75 rounded-md flex justify-between"
            onClick={() => handleSelect(label)}
          >
            {label} <span className="opacity-60">{children}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    );
}