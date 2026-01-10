"use client";

import { motion } from "framer-motion";

interface MockupFrameProps {
    children?: React.ReactNode;
    glowColor?: string;
    className?: string; // Allow extra classes for positioning
}

export default function MockupFrame({ children, glowColor = "#ffffff", className = "" }: MockupFrameProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm overflow-hidden group ${className}`}
            style={{
                boxShadow: `0 0 50px -20px ${glowColor}30` // Use hex with opacity
            }}
        >
            {/* Glossy Reflection Gradient at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

            {/* Inner Content Container */}
            <div className="relative z-10 w-full h-full">
                {children || <div className="w-full h-64 bg-neutral-800/20 animate-pulse flex items-center justify-center text-neutral-600 font-mono text-xs">UI MOCKUP PLACEHOLDER</div>}
            </div>

            {/* Hover Glow Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(circle at center, ${glowColor}15 0%, transparent 70%)`
                }}
            />
        </motion.div>
    );
}
