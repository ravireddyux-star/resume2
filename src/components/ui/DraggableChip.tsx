"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface DraggableChipProps {
    label: string;
    className?: string;
    initialPos?: { x: number; y: number };
    constraintsRef: React.RefObject<HTMLDivElement>;
}

export default function DraggableChip({ label, className, initialPos, constraintsRef }: DraggableChipProps) {
    const ref = useRef(null);
    const [randomValues, setRandomValues] = useState({
        x: [0, 20, -20, 0],
        y: [0, -30, 10, 0],
        duration: 15,
        delay: 0
    });

    useEffect(() => {
        setRandomValues({
            x: [0, Math.random() * 30 - 15, Math.random() * -30 + 15, 0],
            y: [0, Math.random() * -40 + 10, Math.random() * 20 - 10, 0],
            duration: 10 + Math.random() * 10,
            delay: Math.random() * 5
        });
    }, []);

    return (
        <motion.div
            ref={ref}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.8}
            dragMomentum={true}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            initial={initialPos}
            animate={{
                x: randomValues.x,
                y: randomValues.y
            }}
            transition={{
                x: { duration: randomValues.duration, repeat: Infinity, ease: "easeInOut", delay: randomValues.delay },
                y: { duration: randomValues.duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: randomValues.delay }
            }}
            className={`absolute px-5 py-3 md:px-7 md:py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm md:text-base font-medium text-neutral-300 shadow-2xl z-20 select-none ${className}`}
        >
            {label}
        </motion.div>
    );
}
