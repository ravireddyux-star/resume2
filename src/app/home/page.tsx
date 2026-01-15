"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import DraggableChip from "@/components/ui/DraggableChip";
import MagneticButton from "@/components/ui/MagneticButton";
import AboutSection from "@/components/ui/AboutSection";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import Footer from "@/components/ui/Footer";

export default function Home() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const containerRef = useRef(null);

    function handleMouseMove(e: React.MouseEvent) {
        const { clientX, clientY } = e;
        // We assume window is available since this is client component only active on mount
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX - innerWidth / 2);
        mouseY.set(clientY - innerHeight / 2);
    }

    // Parallax and Skew effects for the hero text
    const x = useTransform(mouseX, [-500, 500], [-15, 15]);
    const y = useTransform(mouseY, [-500, 500], [-15, 15]);
    const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
    const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

    const physics = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, physics);
    const springY = useSpring(y, physics);
    const springRotateX = useSpring(rotateX, physics);
    const springRotateY = useSpring(rotateY, physics);

    return (
        <main
            className="relative min-h-screen w-full bg-background overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-background to-background pointer-events-none z-0" />

            {/* Hero Section */}
            <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Hero Text */}
                <motion.div
                    style={{ x: springX, y: springY, rotateX: springRotateX, rotateY: springRotateY }}
                    className="z-10 text-center flex flex-col items-center perspective-1000"
                >
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-heading select-none pointer-events-none drop-shadow-2xl">
                        RAVI <br /> MUNIREDDY
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-lg tracking-tight font-light">
                        UX Strategist. 16+ Years. Driving AI-Powered Design.
                    </p>
                </motion.div>

                {/* Draggable Chips (The Chaos) */}
                <DraggableChip constraintsRef={containerRef} label="16 Yrs Exp" className="top-[15%] left-[8%] md:left-[15%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="AI Strategy" className="top-[20%] right-[8%] md:right-[20%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="HP Inc" className="bottom-[30%] left-[5%] md:left-[20%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="Cisco" className="bottom-[25%] right-[5%] md:right-[15%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="UX Lead" className="top-[45%] left-[80%] md:left-[75%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="$3M ROI" className="bottom-[40%] left-[10%] md:left-[30%]" initialPos={{ x: 0, y: 0 }} />
                {/* New Chips */}
                <DraggableChip constraintsRef={containerRef} label="Figma" className="top-[10%] left-[40%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="Design Systems" className="bottom-[15%] right-[30%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="Prototyping" className="top-[60%] right-[10%]" initialPos={{ x: 0, y: 0 }} />
                <DraggableChip constraintsRef={containerRef} label="Leadership" className="top-[30%] left-[5%]" initialPos={{ x: 0, y: 0 }} />

                {/* Magnetic CTA */}
                <div className="absolute bottom-24 md:bottom-24 z-30">
                    <MagneticButton />
                </div>
            </section>

            {/* Content Sections */}
            <div className="relative z-10 bg-background">
                <AboutSection />
                <ExperienceTimeline />
            </div>

            <Footer />
        </main>
    );
}
