"use client";

import { motion } from "framer-motion";

interface BentoGridProps {
    items: {
        metric: string;
        label: string;
        desc?: string;
    }[];
    accentColor?: string;
}

export default function BentoGrid({ items, accentColor = "#ffffff" }: BentoGridProps) {
    const gridCols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 w-full`}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="min-h-[220px] h-full relative rounded-2xl bg-neutral-900/40 border border-white/5 p-6 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors"
                >
                    {/* Hover Glow Background */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at top right, ${accentColor}20 0%, transparent 60%)`
                        }}
                    />

                    {/* Description at Top */}
                    <div className="relative z-10">
                        {item.desc && (
                            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed border-l-2 pl-3 line-clamp-3" style={{ borderColor: accentColor }}>
                                {item.desc}
                            </p>
                        )}
                    </div>

                    <div className="relative z-10">
                        <h4
                            className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter"
                            style={{ textShadow: `0 0 30px ${accentColor}40` }}
                        >
                            {item.metric}
                        </h4>
                        <p className="text-neutral-400 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                            {item.label}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
