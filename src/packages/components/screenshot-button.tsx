'use client';

export default function Screenshot() {
  
    async function captureMedia() {
        const media = await navigator.mediaDevices.getDisplayMedia()
        console.log(media)
    }

  return (
    <div className="mx-auto">
      <button className="px-3 py-1 bg-orange-400 text-white" onClick={captureMedia}>Download Now</button>
    </div>
  );
}
