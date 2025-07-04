"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface AnimatedThumbnailProps {
  src: string;
  alt: string;
  title: string;
}

export function AnimatedThumbnail({ src, alt, title }: AnimatedThumbnailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div
      ref={ref}
      className="mb-8"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(80px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        className="w-full border border-white/30"
        quality={90}
        priority
      />
    </div>
  );
}
