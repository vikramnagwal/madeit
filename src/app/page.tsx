'use client';

import { Mobile } from "@/packages/components/mobile";
import { NotificationCard } from "@/packages/components/notification-card";
import { Wallpaper } from "@/packages/components/wallpaper";
import { Tab } from "@/packages/ui/tab";

export default function Home() {
  return (
    <div>
      <Wallpaper />
      <Tab
        variant="ghost"
        options={[
          {
            id: "iphone",
            label: "Iphone",
            children: (
              <Mobile
                variant="iphone"
                notificationNumber={2}
                options={{
                  networkCarrier: "Airtel",
                  wallpaper:
                    "https://i.pinimg.com/474x/17/b7/72/17b772d08701170c2af723db64daebcb.jpg",
                }}
                children={
                  <NotificationCard
                    from="Paypal"
                    description="you have recieved 100$ from"
                    sender="user@123.pypl.com"
                    time={new Date()}
                    timeAgo={2}
                  />
                }
              />
            ),
          },
          {
            id: "android",
            label: "Android",
            children: (
              <Mobile
                variant="android"
                options={{
                  networkCarrier: "AT&T",
                  batteryPercentage:59,
                  wallpaper:
                    "https://i.pinimg.com/474x/c8/a6/c5/c8a6c53699473ef22ba8d89c7f13465d.jpg",
                }}
                children={
                  <NotificationCard
                    description="you have recieved 100$ from"
                    sender="user@123.pypl.com"
                  />
                }
              />
            ),
          },
        ]}
      />
    </div>
  );
}
