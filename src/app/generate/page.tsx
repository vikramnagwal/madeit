"use client";

import { Mobile, MobileOptionsProps } from "@/packages/components/mobile";
import { NotificationCard, NotificationOptionsProps } from "@/packages/components/notification-card";
import { Tab } from "@/packages/ui/tab";
import wallpapers from "@/packages/data/wallpaper.json";
import carrier from "@/packages/data/carrier.json";
import { useState } from "react";
import { Dropdown } from "@/packages/ui/dropdown/dropdown-menu";
import { HiEye } from "react-icons/hi";
import { HiEyeSlash } from "react-icons/hi2";
import { Wallpaper } from "@/packages/components/wallpaper";
import icondata from "@/packages/data/icons.json";
import Balancer from "react-wrap-balancer";
import { getDateNow } from "@/packages/utils/time";


export default function GeneratePage() {

  const [notificationNumber, setNotificationNumber] = useState<number>(1);
  const [networkCarrier, setNetworkCarrier] = useState<MobileOptionsProps["networkCarrier"]>("Airtel");
  const [wallpaper, setWallpaper] = useState(wallpapers[0].path);
  const [amount, setAmount] = useState(10.45);
  const [hideSender, setHideSender] = useState(false);
  const [batteryPercentage, setBatteryPercentage] = useState(80);
  const [sender, setSender] = useState("john@stripe.com");
  const [timeAgo, setTimeAgo] = useState<number>(1);
  const [paidFrom, setPaidFrom] = useState<NotificationOptionsProps["from"]>("Paypal");
  const [date, setDate] = useState<string>(getDateNow());

  function handleCarrierChange(carrier: string) {
    setNetworkCarrier(carrier as MobileOptionsProps["networkCarrier"]);
  }

  function selectedWallpaper(wallpaper: string) {
    setWallpaper(wallpaper);
  }
  
  function handlePaidFromChange(paidBy: string) {
    setPaidFrom(paidBy as NotificationOptionsProps["from"]);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1">
        <div className="font-poppins mb-4">
          <Balancer ratio={1} preferNative={false}>
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Generate and share fake Mrr shots.
            </h1>
            <p className="text-lg leading-6 font-light opacity-70">
              Create Realistic mrr (Monthly reccurring revenue) screenshot to
              prank with your friends.
            </p>
          </Balancer>
        </div>
        <form className="p-2 md:p-4">
          <div className="flex flex-col my-3">
            <label htmlFor="network-carrier">Network Carrier</label>
            <Dropdown data={carrier} onSelected={handleCarrierChange} />
          </div>
          <div className="flex gap-4 items-center space-x-6 my-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="notificatiom">
                Number of Notifications{" "}
                <span className="opacity-60">( max 4 )</span>
              </label>
              <input
                className="p-2 bg-slate-200/20 rounded-md w-24"
                maxLength={1}
                max={4}
                type="number"
                onChange={(e) => setNotificationNumber(Number(e.target.value))}
                placeholder="1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="timeAgo">Time Ago</label>
              <input
                className="p-2 bg-slate-200/20 rounded-md w-24"
                type="number"
                defaultValue={1}
                max={10}
                min={1}
                onChange={(e) => setTimeAgo(Number(e.target?.value))}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-3">
            <label htmlFor="amount">Set Amount</label>
            <input
              className="p-2 bg-slate-200/20 rounded-md w-34"
              type="number"
              placeholder="$10.45"
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-2 my-3">
            <label htmlFor="amount">Battery %</label>
            <input
              className="p-2 bg-slate-200/20 rounded-md w-34"
              type="number"
              placeholder="78%"
              onChange={(e) => {
                if(Number(e.target.value) > 100) {
                  return;
                }
                if (Number(e.target.value) < 38) {
                  setBatteryPercentage(56)
                }
                setBatteryPercentage(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="sender">Paid by</label>
            <div className="flex items-center space-x-2">
              <input
                className="p-2 bg-slate-200/20 rounded-md w-62"
                type="text"
                placeholder="johndoe@stripe.com"
                onChange={(e) => setSender(e.target?.value)}
              />
              <span
                onClick={() => setHideSender(!hideSender)}
                className="p-1 rounded-md bg-slate-200/20 w-10 h-10 flex items-center justify-center"
              >
                {hideSender ? <HiEye /> : <HiEyeSlash />}
              </span>
            </div>
          </div>

          <div>
            <Wallpaper pickedWallpaper={selectedWallpaper} />
          </div>
          <div>
            <label htmlFor="payfrom">Pay From</label>
            <Dropdown data={icondata} onSelected={handlePaidFromChange} />
          </div>
          <div>
            <label htmlFor="date">Pick date</label>
            <Dropdown />
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
                notificationNumber={paidFrom === "X" ? 1 : notificationNumber}
                options={{
                  networkCarrier: networkCarrier,
                  wallpaper: wallpaper,
                  batteryPercentage: batteryPercentage,
                  date: date,
                }}
              >
                <NotificationCard
                  from={paidFrom}
                  amount={amount}
                  sender={sender}
                  timeAgo={timeAgo}
                  showSender={hideSender}
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
                  wallpaper: wallpaper,
                  date: date,
                  batteryPercentage: batteryPercentage,
                }}
              >
                <NotificationCard
                  from={paidFrom}
                  amount={amount}
                  sender="user@paypal.com"
                  timeAgo={timeAgo}
                  showSender={hideSender}
                />
              </Mobile>
            ),
          },
        ]}
      />
    </div>
  );
}
