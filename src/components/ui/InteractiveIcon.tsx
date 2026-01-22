"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";

interface InteractiveIconProps {
    icon: React.ReactNode;
    label: string; // Used for aria-label or tooltip if needed
    value: string; // The text to display (e.g. email, phone, linkedin handle)
    href?: string; // If provided, the text will be a link
    isEmail?: boolean; // If true, enables copy functionality and obfuscation logic
}

export default function InteractiveIcon({ icon, label, value, href, isEmail = false }: InteractiveIconProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // State to track if content should be shown
    const isOpen = isHovered || isClicked;

    const handleCopy = async (e: React.MouseEvent) => {
        if (!isEmail) return;
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
        if (href) {
            return (
                <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-white hover:text-neutral-300 transition-colors"
                >
                    {children}
                    {href.startsWith("http") && <ArrowUpRight size={18} className="opacity-50" />}
                </a>
            );
        }
        return <div className="flex items-center gap-3 text-white">{children}</div>;
    };

    return (
        <div
            className="flex flex-col items-center md:items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
            aria-label={label}
        >
            <div className="relative flex items-center p-4 bg-white/5 border border-white/10 rounded-full cursor-pointer hover:bg-white/10 hover:border-white/20 transition-colors">
                <div className="text-white">
                    {icon}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ width: 0, opacity: 0, paddingLeft: 0 }}
                            animate={{ width: "auto", opacity: 1, paddingLeft: 16 }}
                            exit={{ width: 0, opacity: 0, paddingLeft: 0 }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            <div className="flex items-center gap-4 pr-4">
                                <ContentWrapper>
                                    <span className="text-lg md:text-xl font-medium tracking-tight">
                                        {value}
                                    </span>
                                </ContentWrapper>

                                {isEmail && (
                                    <button
                                        onClick={handleCopy}
                                        className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
                                        title="Copy to clipboard"
                                    >
                                        {isCopied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Hint (Optional, removed to reduce clutter as per request to remove text) */}
        </div>
    );
}
