"use client";
import { motion, useAnimate } from "motion/react";

const LogoutIcon = () => {
    const [scope, animate] = useAnimate();

    const hoverAnimation = async () => {
        // Arrow exits
        await animate(
            ".logout-arrow, .logout-arrow-bottom",
            {
                x: [0, 6, 0],
            },
            {
                duration: 0.3,
                ease: "easeInOut",
            }
        );

        // Door reacts slightly
        animate(
            ".logout-door",
            {
                x: [0, -2, 0],
            },
            {
                duration: 0.25,
                ease: "easeOut",
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
                {/* Door frame */}
                <motion.path
                    className="logout-door"
                    style={{ transformOrigin: "50% 50%" }}
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                />

                {/* Arrow line */}
                <motion.path
                    className="logout-arrow"
                    d="M9 12h12"
                />

                {/* Arrow head */}
                <motion.path
                    className="logout-arrow-bottom"
                    d="M18 15l3 -3l-3 -3"
                />
            </svg>
        </motion.div>
    );
};

export default LogoutIcon;
