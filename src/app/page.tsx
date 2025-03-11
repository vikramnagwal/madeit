"use client";

import { Mobile, MobileOptionsProps } from "@/packages/components/mobile";
import { NotificationCard } from "@/packages/components/notification-card";
import { Tab } from "@/packages/ui/tab";
import { useState, useCallback } from "react";
import { getDateNow } from "@/packages/utils/time";
import { Dropdown } from "@/packages/ui/dropdown/dropdown-menu";
import carriers from "@/packages/data/carrier.json";
import { DatePicker } from "@/packages/ui/date-picker";
import { Wallpaper } from "@/packages/components/wallpaper";
import wallpapers from "@/packages/data/wallpaper.json";
import icons from "@/packages/data/icons.json";
import { Icons } from "@/packages/ui/icons";
import Screenshot from "@/packages/components/screenshot";

// Define more specific types
type NetworkCarrier = MobileOptionsProps["networkCarrier"];

export default function Home() {
  // State management
  const [date, setDate] = useState(getDateNow());
  const [carrier, setCarrier] = useState<NetworkCarrier>("Airtel");
  const [wallpaper, setWallpaper] = useState(wallpapers[0].path);
  const [notificationNumber, setNotificationNumber] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState(icons[0].label);

  // Memoized handlers to prevent unnecessary rerenders
  const handleWallpaperChange = useCallback((path: string) => {
    setWallpaper(path);
  }, []);

  const handleNotificationNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value >= 1 && value <= 4) {
        setNotificationNumber(value);
      }
    },
    []
  );

  const handleCarrierChange = useCallback((label: string) => {
    setCarrier(label as NetworkCarrier);
  }, []);

  const handleIconChange = useCallback((label: string) => {
    setSelectedIcon(label);
  }, []);

  // Common notification props
  const notificationProps = {
    description: "You have received 100$ from",
    sender: "user@123.pypl.com",
    time: new Date(),
    timeAgo: 2,
    showSender: false,
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Controls Panel */}
      <div className="bg-gray-100/10 backdrop-blur-md rounded-lg p-4 w-full md:w-1/2">
        <h1 className="text-xl font-bold mb-4">Phone Preview Settings</h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Network Provider</h2>
            <Dropdown
              variant="default"
              title="Network Providers"
              onSelected={handleCarrierChange}
              data={carriers}
              value={carrier}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Date & Time</h2>
            <DatePicker getDate={setDate} selectedDate={date} />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Wallpaper</h2>
            <Wallpaper
              pickedWallpaper={handleWallpaperChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="notifications" className="font-medium">
              Notification Count
            </label>
            <input
              type="number"
              min={1}
              max={4}
              placeholder={String(notificationNumber)}
              name="notification"
              onChange={handleNotificationNumberChange}
              className="bg-white/20 backdrop-blur-xl px-2 py-1 w-48 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-medium">Icon Style</h2>
            <Dropdown
              title="Select Icon"
              data={icons}
              value={selectedIcon}
              onSelected={handleIconChange}
            />
          </div>
        </form>
        <Screenshot />
      </div>

      {/* Phone Preview Tabs */}
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
                  networkCarrier: carrier,
                  date: date,
                  wallpaper: wallpaper,
                }}
              >
                <NotificationCard from={'Paypal'} {...notificationProps} />
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
                  networkCarrier: carrier,
                  date: date,
                  wallpaper: wallpaper,
                }}
              >
                <NotificationCard from={'Paypal'} {...notificationProps} />
              </Mobile>
            ),
          },
        ]}
      />
    </div>
  );
}
