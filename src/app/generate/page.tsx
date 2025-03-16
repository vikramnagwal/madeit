"use client";

import { Mobile, MobileOptionsProps } from "@/packages/components/mobile";
import { NotificationCard } from "@/packages/components/notification-card";
import { Tab } from "@/packages/ui/tab";
import wallpapers from "@/packages/data/wallpaper.json";
import carrier from "@/packages/data/carrier.json";
import { useState } from "react";
import { Dropdown } from "@/packages/ui/dropdown/dropdown-menu";


export default function GeneratePage() {

  const [notificationNumber, setNotificationNumber] = useState<number>(0);
  const [networkCarrier, setNetworkCarrier] = useState<MobileOptionsProps["networkCarrier"]>("Airtel");
  const [wallpaper, setWallpaper] = useState(wallpapers[0].path);
  const [amount, setAmount] = useState(10.45);
  const [paidBy, setPaidBy] = useState("johnden@stripe.com");
  const [hideSender, setHideSender] = useState(false);
  const [batteryPercentage, setBatteryPercentage] = useState(80);

  function handleCarrierChange(carrier: string) {
    setNetworkCarrier(carrier as MobileOptionsProps["networkCarrier"]);
  }

  function handleNotificationNumberChange(notificationNumber: number) {
    setNotificationNumber(notificationNumber);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1">
        <div className="mb-4">
          <h1>Generate and share fake Mrr shots</h1>
          <p>Create Realistic mrr screenshot to prank with your friends.</p>
        </div>
        <form action="">
          <div>
            <label htmlFor="network-carrier">Network Carrier</label>
            <Dropdown data={carrier} onSelected={handleCarrierChange} />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="notificatiom">Number of Notifications <span className="opacity-60">( max 4 )</span></label>
            <input className="w-48 outline-none proportional-nums" maxLength={1} max={4} type="number" onChange={(e) => setNotificationNumber(Number(e.target.value))} placeholder="1"/>
          </div>
        </form>
      </div>

      <Tab
        className="flex-1"
        variant="glass"
        options={[
          {
            id: "iphone",
            label: "iPhone",
            children: (
              <Mobile
                variant="iphone"
                notificationNumber={notificationNumber}
                options={{
                  networkCarrier: networkCarrier,
                  wallpaper: wallpaper,
                  batteryPercentage: batteryPercentage,
                }}
              >
                <NotificationCard
                  from={"Paypal"}
                  amount={amount}
                  sender="user@paypal.com"
                />
              </Mobile>
            ),
          },
          {
            id: "android",
            label: "Android",
            children: (
              <Mobile
                variant="android"
                notificationNumber={notificationNumber}
                options={{
                  networkCarrier: networkCarrier,
                }}
              >
                <NotificationCard
                  from={"Paypal"}
                  amount={amount}
                  sender="user@paypal.com"
                />
              </Mobile>
            ),
          },
        ]}
      />
    </div>
  );
}
