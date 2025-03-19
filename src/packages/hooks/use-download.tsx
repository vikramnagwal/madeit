'use client';

import { useCallback } from "react";
import { toPng } from "html-to-image";

export function useDownload() {
  const downloadImage = useCallback(async () => {
    const image = document.getElementById("image");
    const dock = document.getElementById("dock");
    if (!image || !dock) {
      console.error("Image not found");
      return;
    }

    try {
      new Promise((resolve) => setTimeout(resolve, 300));

      dock.style.display = "none";
      const rect = image.getBoundingClientRect();
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(image, {
        height: Math.ceil(rect.height),
        width: Math.ceil(rect.width),
        style: {
          transform: "none",
          overflow: "visible",
          margin: "0",
          padding: image.style.padding || "0",
        },
        quality: 1.0,
        cacheBust: true,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "made-it.png";
      link.click();
    } catch (error) {
      alert("Error generating image");
      console.error("Error generating image:", error);
    } finally {
      dock.style.display = "flex";
    }
  }, []);

  return { downloadImage };
}
