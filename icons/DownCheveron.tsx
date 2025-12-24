"use client";
import { motion, useAnimate } from "motion/react";

const DownChevron = () => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".chevron-down",
      {
        y: [0, 6, 0],
      },
      {
        duration: 0.8,
        ease: "easeInOut",
      },
    );
  };

  return (
    <motion.div
      ref={scope}
      onHoverStart={hoverAnimation}
      className="inline-flex cursor-pointer items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chevron-down"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 9l6 6l6 -6" />
      </svg>
    </motion.div>
  );
};

export default DownChevron;
