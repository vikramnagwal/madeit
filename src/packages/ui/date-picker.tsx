import { dateNow, timeAgo } from "../utils/time";
import { Dropdown } from "./dropdown/dropdown-menu";

const date = [
    { id: 1, label: "Today", children: dateNow() },
    { id: 2, label: "Yesterday", children: timeAgo(1) }
]

type DatePickerProps = {
    variant?: "default" | "cheers" | "white";

}

export function DatePicker({ variant }: DatePickerProps) {
    return (
        <Dropdown title="Today" data={date} variant={variant} />
    )
}