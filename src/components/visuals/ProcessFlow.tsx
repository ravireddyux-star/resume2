"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessFlowProps {
    steps: {
        step: number;
        title: string;
        desc: string;
    }[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
    return (
        <div className="w-full py-12 overflow-x-auto">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-max md:min-w-0 gap-8 md:gap-4 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-4 relative z-10 group">
                        {/* Step Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-neutral-900/80 border border-white/10 backdrop-blur-md rounded-xl p-6 w-[240px] flex flex-col items-center text-center shadow-lg group-hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <span className="w-14 h-14 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center text-xl font-bold text-white mb-4 shadow-inner">
                                {step.step}
                            </span>
                            <h4 className="text-white font-bold mb-2">{step.title}</h4>
                            <p className="text-neutral-400 text-xs leading-relaxed">{step.desc}</p>
                        </motion.div>

                        {/* Arrow (except last) */}
                        {i < steps.length - 1 && (
                            <div className="hidden md:flex text-white/20">
                                <ArrowRight size={24} />
                            </div>
                        )}
                        {/* Arrow (Mobile - Vertical) */}
                        {i < steps.length - 1 && (
                            <div className="flex md:hidden text-white/20 rotate-90 my-2">
                                <ArrowRight size={24} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
