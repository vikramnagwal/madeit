import { Gumroad } from "../icons/gumroad";
import { LemonSqueezy } from "../icons/lemon-squeezy";
import { Stripe } from "../icons/stripe";
import { X } from "../icons/twitter";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

const allIcons = [
    { id: 1, icon: <Gumroad />, title: "Gumroad" },
    { id: 2, icon: <X />, title: "Twitter" },
    { id: 3, icon: <LemonSqueezy />, title: "Lemon Squeezy" },
    { id: 4, icon: <Stripe />, title: "Stripe" },
]

type IconProps = {
    selectedIcon: (icon: string) => void;
}

export function Icons({ selectedIcon }: IconProps) {
    return (
      <div className="flex items-center space-x-2">
        {allIcons.map((icon) => (
          <div key={icon.id} className="rounded-lg cursor-pointer">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild onClick={() => selectedIcon(icon.title)}>{icon.icon}</TooltipTrigger>
                <TooltipContent className="bg-white/20 backdrop-blur-lg p-2 rounded-lg mb-1">
                    {icon.title}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    );
}