import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownButton } from "./dropdown-button";
import { DropdownContent } from "./dropdown-content";


type DropdownProps = {
  variant?: 'default' | 'cheers' | 'white',
  title: string,
  data: { id: number, label: string, children?: React.ReactNode }[]
}


export function Dropdown({ variant, title, data }: DropdownProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="gap-3 align-center px-4">
      <DropdownMenu>
        <DropdownButton title={selected? selected : title} variant={variant} />
        <DropdownContent options={data} onSelect={setSelected} variant={variant} />
      </DropdownMenu>
    </div>
  );
};