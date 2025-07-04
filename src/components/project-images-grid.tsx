"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface Frame {
  src: string;
  alt: string;
}

interface ProjectImagesGridProps {
  frames: Frame[];
}

export function ProjectImagesGrid({ frames }: ProjectImagesGridProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {frames.map((frame, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "0px" });

        return (
          <div
            key={index}
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(80px)",
              transition: `all 0.8s ease-out ${index * 0.1}s`,
            }}
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              width={1200}
              height={900}
              className="w-full border border-white/[0.26] block"
              quality={90}
              loading={index < 2 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        );
      })}
    </div>
  );
}
