"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StatComparisonProps {
    before: string;
    after: string;
    label: string;
}

export default function StatComparison({ before, after, label }: StatComparisonProps) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-4">{label}</span>
            <div className="flex items-center gap-6">
                <div className="text-neutral-500 font-bold text-2xl strike-through decoration-red-500/50 line-through decoration-2">
                    {before}
                </div>
                <ArrowRight className="text-neutral-600" size={20} />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white font-bold text-4xl text-shadow-glow"
                >
                    {after}
                </motion.div>
            </div>
        </div>
    );
}
