'use client';

import { Mobile } from "@/components/mobile";
import { NotificationCard } from "@/components/notification-card";
import { Dropdown } from "@/packages/ui/dropdown-menu";
import { Tab } from "@/packages/ui/tab";

const menu = [
  {id: 1, label: "Home"},
  {id: 2, label: "About"},
  {id: 3, label: "Contact"},
  {id: 4, label: "Services"},
  {id: 5, label: "Portfolio"},
]


export default function Home() {
  return (
    <div>
      {/* <Dropdown title="carrier" data={menu} /> */}
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
