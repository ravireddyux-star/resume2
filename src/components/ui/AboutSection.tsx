"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-6">
                    The Manifesto
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-heading mb-8 leading-tight">
                    The Intersection of <br />
                    <span className="text-white">Intelligence & Design.</span>
                </h2>
                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                    I am a Lead Product Designer & UX Strategist with 16+ years of experience crafting customer-focused, innovative, and AI-driven design solutions. I specialize in driving AI-powered UX strategies that align with business goals and have proven success in leading multi-million dollar product design projects.
                </p>
            </motion.div>
        </section>
    );
}
