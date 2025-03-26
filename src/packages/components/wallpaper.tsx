'use client'; 

import Image from "next/image"
import wallpapers from '../data/wallpaper.json'

interface WallpaperProps {
  pickedWallpaper: (path: string) => void
}

export function Wallpaper({ pickedWallpaper }: WallpaperProps) {

    function handleWallpaperChange(path: string) {
        pickedWallpaper(path)
    }

    return (
      <div className=" grid grid-cols-3 gap-1 justify-items-center max-w-[500px]">
        {wallpapers.map(({ id, path, title }) => (
          <Image
            key={id}
            src={path}
            alt={title}
            width={100}
            height={100}
            className="w-20 h-26 object-cover overflow-hidden m-1 rounded-md cursor-pointer"
            onClick={() => handleWallpaperChange(path)}
          />
        ))}
      </div>
    );
}