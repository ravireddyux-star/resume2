"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    meta: string;
    slug: string;
    image?: string;
    isDimmed: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    delay: number;
}

export default function ProjectCard({ title, meta, slug, image, isDimmed, onHoverStart, onHoverEnd, delay }: ProjectCardProps) {
    const isExternal = slug.startsWith("http");
    const linkHref = isExternal ? slug : `/projects/${slug}`;

    return (
        <Link href={linkHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
            <motion.div
                className={`relative break-inside-avoid mb-6 rounded-2xl bg-neutral-900/40 border border-white/5 p-8 overflow-hidden cursor-pointer transition-all duration-500 group ${isDimmed ? "opacity-60 blur-[1px] scale-95" : "opacity-100 scale-100 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"}`}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                    opacity: isDimmed ? 0.6 : 1,
                    y: 0,
                    filter: isDimmed ? "blur(1px)" : "blur(0px)"
                }}
                transition={{ duration: 0.5, delay: delay * 0.1 }}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 border border-white/10 px-2 py-1 rounded-full">{meta}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-heading transition-colors">{title}</h3>
                    {/* Abstract visual placeholder or Image */}
                    <div className="mt-4 h-32 w-full rounded-lg bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden relative">
                        {image ? (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-transparent opacity-50 block" />
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
