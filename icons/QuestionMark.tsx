"use client";
import { motion, useAnimate } from "motion/react";

const QuestionMark = () => {
  const [scope, animate] = useAnimate();

  const hoverAnimation = async () => {
    await animate(
      ".question-mark",
      { pathLength: [0, 1] },
      { duration: 0.4, ease: "easeInOut" },
    );

    await animate(
      ".question-mark-dot",
      {
        pathLength: [0, 1],
        y: [0, -3, 0],
      },
      { duration: 0.3, ease: "easeOut" },
    );

    animate(
      ".question-group",
      { scale: [1, 1.05, 1] },
      { duration: 0.2, ease: "easeOut" },
    );
  };

  return (
    <motion.div ref={scope} onHoverStart={hoverAnimation}>
      <motion.svg
        className="question-group cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          className="question-mark"
          d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"
        />
        <path className="question-mark-dot" d="M12 19l0 .01" />
      </motion.svg>
    </motion.div>
  );
};

export default QuestionMark;
