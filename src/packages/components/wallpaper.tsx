'use client'; 

import Image from "next/image"
import { useRef, useState } from "react"
import wallpapers from '../data/wallpaper.json'


export function Wallpaper() {

    const [selectedWallpaper, setSelectedWallpaper] = useState(() => {
        const savedWallpaper = localStorage.getItem('wallpaper')
        if(savedWallpaper) {
            return savedWallpaper
        }
       return wallpapers[0].path
    })

    const wallpaperRef = useRef<HTMLImageElement>(null)

    function handleWallpaperChange(path: string) {
        setSelectedWallpaper(path)
        if (selectedWallpaper && wallpapers.some(({ path }) => path === selectedWallpaper)) {
            localStorage.setItem('wallpaper', selectedWallpaper)
        }
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