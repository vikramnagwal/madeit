import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownButton } from "./dropdown-button";
import { DropdownContent } from "./dropdown-content";


type DropdownProps = {
  variant?: 'default' | 'cheers' | 'white',
  title: string,
}

const menu = [
  { id: 1, label: "Airtel" },
  { id: 2, label: "Vi" },
  { id: 3, label: "Jio" },
  { id: 4, label: "Sprint" },
  { id: 5, label: "T-Mobile" },
  { id: 6, label: "Verizon" },
  { id: 7, label: "AT&T" },
  { id: 8, label: "TFW" },
  { id: 9, label: "MetroPCS" },
];


export function Dropdown({ variant, title }: DropdownProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="gap-3 align-center px-4">
      <DropdownMenu>
        <DropdownButton title={selected? selected : title} variant={variant} />
        <DropdownContent options={menu} onSelect={setSelected} variant={variant} />
      </DropdownMenu>
    </div>
  );
};