import { Dropdown } from "../ui/dropdown/dropdown-menu";
import carrier from '@/packages/data/carrier.json';
import { getDateNow, timeAgo } from "../utils/time";
import { Wallpaper } from "./wallpaper";


const date = [
    { id: 1, label: getDateNow(), children: "Today"},
    { id: 2, label: timeAgo(1), children: "yesterday" },
    { id: 3, label: timeAgo(2) },
]

interface MobileFormProps {
    title: string;
    description: string;
}

export function MobileForm({ title, description }: MobileFormProps) {
    function handledata(data: any) {
        console.log(data);
    }
    return (
      <main>
        <div className="flex flex-col font-poppins items-start p-2">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p className="text-xl font-thin opacity-80 leading-6">
            {description}
          </p>
        </div>
        <form action="">
          <div className="flex flex-col gap-2 p-2">
           <Dropdown title="Pick Network Provider" data={carrier}/>
           <Dropdown title="Pick Date" data={date}/>
          </div>
          <div>
            <Wallpaper pickedWallpaper={handledata}/>
          </div>
        </form>
      </main>
    );
}