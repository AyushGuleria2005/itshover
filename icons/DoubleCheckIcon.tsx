"use client";
import { motion, useAnimate } from "motion/react";

const DoubleCheckIcon = () => {
    const [scope, animate] = useAnimate();

    const hoverAnimation = async () => {
        // Add your animations here
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
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
            >
                {/* First check */}
                <motion.path
                    className="check-first"
                    style={{ transformOrigin: "19px 25px" }}
                    d="M3 26.4L11.8846 39L35 11"
                />

                {/* Second check */}
                <motion.path
                    className="check-second"
                    style={{ transformOrigin: "33px 25px" }}
                    d="M45 11L21.8847 39L20.2098 36.6248"
                />
            </svg>
        </motion.div>
    );
};

export default DoubleCheckIcon;
