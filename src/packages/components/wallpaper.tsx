'use client'; 

import Image from "next/image"
import { useRef, useState } from "react"
import wallpapers from '../data/wallpaper.json'
import path from "path";

interface WallpaperProps {
  pickedWallpaper: (path: string) => void
}

export function Wallpaper({ pickedWallpaper }: WallpaperProps) {

    const wallpaperRef = useRef<HTMLImageElement>(null)

    function handleWallpaperChange(path: string) {
        pickedWallpaper(path)
    }

    return (
      <div className="flex items-center spce-x-2">
        {wallpapers.map(({ id, path, title }) => (
            <Image
              key={id}
              ref={wallpaperRef}
              src={path}
              alt={title}
              width={100}
              height={100}
              className="w-24 h-24 object-cover overflow-hidden m-1 rounded-md cursor-pointer"
              onClick={() => handleWallpaperChange(path)}
            />
        ))}
      </div>
    );
}