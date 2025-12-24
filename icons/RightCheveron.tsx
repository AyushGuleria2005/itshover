"use client";
import { motion, useAnimate } from "motion/react";

const RightChevron = () => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".chevron",
      { x: [0, 6, 0] },
      {
        duration: 0.8,
        ease: "easeInOut",
      },
    );
  };

  return (
    <motion.div
      ref={scope}
      className="flex w-8 items-center justify-center"
      onHoverStart={hoverAnimation}
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
        className="chevron cursor-pointer"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </motion.div>
  );
};

export default RightChevron;
