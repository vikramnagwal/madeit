'use client';
import { DataForm } from "@/packages/components/form";
import { Mobile } from "@/packages/components/mobile";
import { NotificationCard } from "@/packages/components/notification-card";
import { Tab } from "@/packages/ui/tab";


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <DataForm
          title="Generate Fake Monthly Recurring Revnue Snapshots"
          description="Share and have fun vi sharing your fak mrr snapshots with your friends"
        />
      </div>
      <Tab
        className="flex-1"
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
                  batteryPercentage: 59,
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
