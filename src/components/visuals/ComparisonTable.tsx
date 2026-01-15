"use client";

import { motion } from "framer-motion";

interface Competitor {
    name: string;
    ui: string;
    nav: string;
    access: string;
}

interface ComparisonTableProps {
    competitors: Competitor[];
}

export default function ComparisonTable({ competitors }: ComparisonTableProps) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="min-w-[600px] bg-neutral-900/40 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 p-6 border-b border-white/10 bg-white/5 font-mono text-xs uppercase tracking-widest text-neutral-400">
                    <div>Brand</div>
                    <div>UI/Aesthetics</div>
                    <div>Navigation</div>
                    <div>Accessibility</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/5">
                    {competitors.map((comp, i) => {
                        const isHighlight = comp.name.includes("HP (New)");
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`grid grid-cols-4 p-6 items-center text-sm ${isHighlight ? "bg-white/5 shadow-[inset_0_0_20px_rgba(255,165,0,0.1)]" : "hover:bg-white/5 transition-colors"
                                    }`}
                            >
                                <div className={`font-bold ${isHighlight ? "text-orange-400" : "text-white"}`}>
                                    {comp.name}
                                </div>
                                <div className="text-neutral-300">{comp.ui}</div>
                                <div className="text-neutral-300">{comp.nav}</div>
                                <div className="text-neutral-300">{comp.access}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
