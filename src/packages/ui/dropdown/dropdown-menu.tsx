import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownButton } from "./dropdown-button";
import { DropdownContent } from "./dropdown-content";
import { createContext } from "react";


type DropdownProps = {
  variant?: 'default' | 'cheers' | 'white',
  title: string,
  data: { id: number, label: string, children?: React.ReactNode }[]
  onSelected?: (label: string) => void
  value?: string
}

export const DropdownContext = createContext<Pick<DropdownProps, "variant">>({ variant: 'default' })

export function Dropdown({ variant, title, data, value, onSelected }: DropdownProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    onSelected && onSelected(label)
  }
  return (
    <div className="gap-3 align-center px-4">
      <DropdownContext.Provider value={{ variant }}>
        <DropdownMenu>
          <DropdownButton
            title={selected ? selected : title}
          />
          <DropdownContent
            options={data}
            onSelect={handleSelect}
          />
        </DropdownMenu>
      </DropdownContext.Provider>
    </div>
  );
};