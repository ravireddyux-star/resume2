"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailGuardProps {
    user: string;
    domain: string;
    className?: string;
}

export default function EmailGuard({ user, domain, className = "" }: EmailGuardProps) {
    const [isCopied, setIsCopied] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const email = `${user}@${domain}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email", err);
        }
    };

    return (
        <div className={`flex flex-col items-start gap-4 ${className}`}>
            <div className="relative group">
                <button
                    onClick={() => setIsRevealed(true)}
                    className="text-3xl md:text-5xl font-bold text-white hover:text-neutral-300 transition-colors text-left"
                >
                    {isRevealed ? (
                        <span className="select-all">{email}</span>
                    ) : (
                        <div className="flex items-center gap-1">
                            <span>{user}</span>
                            <span className="text-neutral-600">@</span>
                            <span>{domain}</span>
                            <span className="ml-4 text-xs font-mono text-neutral-600 uppercase tracking-widest border border-neutral-800 rounded px-2 py-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                Click to Reveal
                            </span>
                        </div>
                    )}
                </button>
            </div>

            <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-widest"
            >
                <AnimatePresence mode="wait">
                    {isCopied ? (
                        <motion.span
                            key="check"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-emerald-500"
                        >
                            <Check size={14} /> Copied
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <Copy size={14} /> Copy Email Address
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
