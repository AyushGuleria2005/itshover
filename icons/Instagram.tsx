"use client";
import { motion, useAnimate } from "motion/react";

const Instagram = () => {
    const [scope, animate] = useAnimate();

    const hoverAnimation = async () => {
        // Camera body
        animate(
            ".ig-body",
            { scale: [1, 1.05, 1] },
            { duration: 0.3, ease: "easeOut" },
        );

        // Lens focus pop
        await animate(
            ".ig-lens",
            { scale: [1, 1.2, 1] },
            { duration: 0.25, ease: "easeOut" },
        );

        // Dot blink
        animate(
            ".ig-dot",
            { opacity: [1, 0, 1] },
            { duration: 0.2, ease: "easeInOut" },
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
                {/* Camera body */}
                <motion.path
                    className="ig-body"
                    style={{ transformOrigin: "50% 50%" }}
                    d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                />

                {/* Lens */}
                <motion.path
                    className="ig-lens"
                    style={{ transformOrigin: "50% 50%" }}
                    d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                />

                {/* Flash dot */}
                <motion.path className="ig-dot" d="M16.5 7.5v.01" />
            </svg>
        </motion.div>
    );
};

export default Instagram;
