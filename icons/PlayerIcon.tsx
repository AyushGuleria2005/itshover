"use client";
import { motion, useAnimate } from "motion/react";

const PlayerIcon = () => {
  const [scope, animate] = useAnimate();

  const playAnimation = async () => {
    await animate(
      ".play-icon",
      {
        scale: [1, 1.2, 0.95, 1],
        x: [0, 4, 0],
      },
      {
        duration: 0.3,
        ease: "easeOut",
      },
    );
  };

  return (
    <motion.div
      ref={scope}
      onTap={playAnimation}
      onHoverStart={playAnimation}
      className="inline-flex cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="play-icon"
        style={{ transformOrigin: "50% 50%" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
      </svg>
    </motion.div>
  );
};

export default PlayerIcon;
