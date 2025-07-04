"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function BackgroundVideo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Image
        src="/img/fallback-image.webp"
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      />
    );
  }

  return (
    <video
      className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      poster="/img/fallback-image.webp"
      suppressHydrationWarning
    >
      <source src="/video/bg-video.mp4" type="video/mp4" />
      <Image
        src="/img/fallback-image.webp"
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />
    </video>
  );
}
