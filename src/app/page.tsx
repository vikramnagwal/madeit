'use client';

import { Mobile } from "@/packages/components/mobile";
import { NotificationCard } from "@/packages/components/notification-card";
import { Tab } from "@/packages/ui/tab";


export default function Home() {
  
  return (
    <div>
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
                    "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnN8ZW58MHx8MHx8fDA%3D",
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
                    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
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
