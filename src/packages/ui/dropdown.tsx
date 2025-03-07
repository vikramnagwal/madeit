import { cva } from "class-variance-authority"

const dropdownVariants = cva(
    "flex flex-col relative w-[300px] h-[600px] bg-cover mx-auto shadow-md overflow-hidden",
    {
        variants: {
            variant: {
                default:  'rounded-md space-y-2 p-2',
                cheers: 'rounded-xl space-y-3 p-2 hover:opacity-90'
            }
        }
    }
)

export function DropdownMenu() {
    return (
        <>
        </>
    )
}