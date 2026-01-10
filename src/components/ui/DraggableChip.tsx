"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface DraggableChipProps {
    label: string;
    className?: string;
    initialPos?: { x: number; y: number };
}

export default function DraggableChip({ label, className, initialPos }: DraggableChipProps) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            drag
            dragConstraints={{ left: -500, right: 500, top: -300, bottom: 300 }}
            dragElastic={0.1}
            dragMomentum={true}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            initial={initialPos}
            animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
            }}
            transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
            }}
            className={`absolute px-4 py-2 md:px-6 md:py-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-xs md:text-sm font-medium text-neutral-300 shadow-2xl z-20 select-none ${className}`}
        >
            {label}
        </motion.div>
    );
}
