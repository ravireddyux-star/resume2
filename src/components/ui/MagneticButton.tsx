"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function MagneticButton() {
    const router = useRouter();
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    function handleMouseMove(e: React.MouseEvent) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set((clientX - center.x) * 0.3); // Magnetic strength
        y.set((clientY - center.y) * 0.3);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    function handleClick() {
        // Zoom effect could be added here or via page transition
        router.push("/projects");
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ x: mouseX, y: mouseY }}
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg tracking-tight overflow-hidden hover:scale-105 transition-transform"
        >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 mix-blend-difference">
                VIEW WORK
            </span>
            <div className="absolute inset-0 bg-neutral-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </motion.button>
    );
}
