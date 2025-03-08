import { DropdownMenu, DropdownMenuArrow, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuItemIndicator, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { cva } from "class-variance-authority";
import { FiChevronDown } from "react-icons/fi"
import { createContext } from "react";


const dropdownTriggerVariants = cva(
    'flex justify-between items-center w-56 px-3 py-1 m-2 rounded-md text-sm font-medium text-white duration-75 cursor-pointer',
    {
      variants: {
        variant: {
          default: 'text-red-500 text-black border-none rounded-md',
          cheers: 'bg-transparent text-white border border-white rounded-lg'
        }
      },
      defaultVariants: {
        variant: 'default'
      }
    }
)

type DropdownProps = {
  variant?: 'default' | 'cheers',
  title: string,
  data: {id: number, label: string}[]
}

const DropdownContext = createContext<Pick<DropdownProps, "variant">>({ variant: 'default' });

export function Dropdown({ variant, title, data }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={dropdownTriggerVariants({ variant })}>
          {title} <FiChevronDown className="inline-block ml-2" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal >
        <DropdownMenuContent className="bg-white text-black w-full px-3 py-2 rounded-md shadow-lg" asChild>
          {
            data.map(({ id, label }) => (
              <DropdownMenuItem key={id} className="flex items-center justify-between">
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
              </DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};