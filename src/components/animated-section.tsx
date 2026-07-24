"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  staggerChildren?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  staggerChildren = 0,
  ...props
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      scale: direction === "none" ? 1 : 0.95,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
        delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
