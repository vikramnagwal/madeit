
import { getDateNow, dateAgo } from "../utils/time";
import { Dropdown } from "./dropdown/dropdown-menu";

const date = [
    { id: 1, label: getDateNow()},
    { id: 2, label: dateAgo(1)},
    { id: 3, label: dateAgo(2) }
]

type DatePickerProps = {
    variant?: "default" | "cheers" | "white";
    getDate?: (date: string) => void;
    selectedDate?: string;
}

export function DatePicker({ variant, getDate }: DatePickerProps) {
    return (
        <Dropdown data={date} variant={variant} onSelected={getDate} />
    )
}