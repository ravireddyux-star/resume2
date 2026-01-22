"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Home, Briefcase, User, Mail } from "lucide-react";

export default function Dock() {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex h-16 items-end gap-4 rounded-2xl border border-white/10 bg-black/50 px-4 pb-3 backdrop-blur-md z-50"
        >
            <DockIcon mouseX={mouseX} href="/home" icon={<Home size={20} />} label="Home" />
            <DockIcon mouseX={mouseX} href="/projects" icon={<Briefcase size={20} />} label="Work" />
            <DockIcon mouseX={mouseX} href="/about" icon={<User size={20} />} label="About" />
            <DockIcon mouseX={mouseX} href="/contact" icon={<Mail size={20} />} label="Contact" />
        </motion.div>
    );
}

function DockIcon({ mouseX, href, icon, label }: { mouseX: MotionValue<number>, href: string, icon: React.ReactNode, label: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height: width }}
                className="aspect-square rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors relative group"
            >
                {icon}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 border border-neutral-800 pointer-events-none whitespace-nowrap">
                    {label}
                </span>
            </motion.div>
        </Link>
    );
}
