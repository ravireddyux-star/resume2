"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
    items: {
        metric: string;
        label: string;
    }[];
    accentColor?: string;
}

export default function BentoGrid({ items, accentColor = "#ffffff" }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="aspect-square relative rounded-2xl bg-neutral-900/40 border border-white/5 p-8 flex flex-col justify-end overflow-hidden group hover:border-white/10 transition-colors"
                >
                    {/* Hover Glow Background */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at top right, ${accentColor}20 0%, transparent 60%)`
                        }}
                    />

                    <h4
                        className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter relative z-10"
                        style={{ textShadow: `0 0 30px ${accentColor}40` }}
                    >
                        {item.metric}
                    </h4>
                    <p className="text-neutral-400 font-mono text-xs uppercase tracking-widest relative z-10">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
