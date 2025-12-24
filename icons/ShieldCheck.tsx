"use client";
import { motion, useAnimate } from "motion/react";

const ShieldCheck = () => {
    const [scope, animate] = useAnimate();

    const hoverAnimation = async () => {
        // Shield soft confirmation pulse
        animate(
            ".shield-body",
            {
                scale: [1, 1.05, 1],
            },
            {
                duration: 0.35,
                ease: "easeOut",
            }
        );

        // Draw checkmark
        await animate(
            ".shield-check",
            {
                pathLength: [0, 1],
                opacity: [0, 1],
            },
            {
                duration: 0.3,
                ease: "easeInOut",
            }
        );
    };

    return (
        <motion.div
            ref={scope}
            onHoverStart={hoverAnimation}
            className="inline-flex cursor-pointer"
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
            >
                {/* Shield body */}
                <motion.path
                    className="shield-body"
                    style={{ transformOrigin: "50% 50%" }}
                    d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"
                />

                {/* Checkmark */}
                <motion.path
                    className="shield-check"
                    initial={{ pathLength: 0, opacity: 0 }}
                    d="M15 19l2 2l4 -4"
                />
            </svg>
        </motion.div>
    );
};

export default ShieldCheck;
