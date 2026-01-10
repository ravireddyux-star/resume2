"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import { useRef } from "react";
import { getProjectBySlug } from "@/lib/projectData";
import { ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import MockupFrame from "@/components/visuals/MockupFrame";
import BentoGrid from "@/components/visuals/BentoGrid";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    if (!project) {
        notFound();
    }

    // Scroll Progress for Parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroY = useTransform(scrollYProgress, [0, 0.1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <main ref={containerRef} className="min-h-screen bg-background relative selection:bg-white/20 overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
                <button
                    onClick={() => router.back()}
                    className="group flex items-center gap-3 text-white font-medium hover:opacity-70 transition-opacity"
                >
                    <div className="p-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="tracking-widest text-xs uppercase">Back</span>
                </button>
            </nav>

            {/* A. Cinematic Hero */}
            <header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4">
                {/* Dynamic Mesh Gradient from Data */}
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${project.visuals?.heroMeshParams || "from-neutral-800/30"} opacity-60`} />

                {/* Grain overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="z-10 text-center max-w-6xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-400 uppercase tracking-widest backdrop-blur-md">
                            {project.role}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                            {project.category}
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
                        {project.title}
                    </h1>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </header>

            {/* B. The Challenge (Split Screen Scrollytelling) */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                    <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-6">
                        01 • The Challenge
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8">
                        {project.challenge}
                    </h2>
                    <div className="h-1 w-24 bg-white/20 rounded-full" />
                </div>

                {/* Floating UI Mockup */}
                <div className="relative">
                    <MockupFrame glowColor={project.visuals?.colorTheme}>
                        <div className="w-full h-[400px] bg-gradient-to-br from-neutral-800 to-neutral-900 flex flex-col p-6 gap-4">
                            {/* Abstract UI representation */}
                            <div className="flex gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-white/10" />
                                <div className="flex-1 space-y-2">
                                    <div className="w-1/3 h-3 bg-white/10 rounded" />
                                    <div className="w-1/4 h-3 bg-white/5 rounded" />
                                </div>
                            </div>
                            <div className="flex-1 rounded-lg border-2 border-dashed border-white/5 flex items-center justify-center text-neutral-600 font-mono text-xs text-center p-8">
                                LEGACY INTERFACE SNAPSHOT
                            </div>
                        </div>
                    </MockupFrame>
                </div>
            </section>

            {/* C. The Solution (Parallax Gallery) */}
            <section className="relative w-full py-32 bg-black/40 border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-4">
                            02 • The Solution
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                            {project.solution}
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                {project.visuals?.gallery && project.visuals.gallery.length > 0 && (
                    <ParallaxGallery slides={project.visuals.gallery} />
                )}
            </section>

            {/* D. Impact (Bento Grid) */}
            <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48">
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-12 text-center">
                    03 • The Impact
                </span>
                <BentoGrid items={project.impact} accentColor={project.visuals?.colorTheme} />
            </section>

            {/* Next Project CTA */}
            <section className="w-full py-40 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none" />
                <span className="text-neutral-500 text-sm mb-8 uppercase tracking-widest relative z-10">Next Case Study</span>
                <div className="relative z-10 scale-125">
                    <MagneticButton />
                </div>
            </section>

        </main>
    );
}

// Internal Component: Parallax Gallery Strip
function ParallaxGallery({ slides }: { slides: { title: string, desc: string }[] }) {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    if (!slides.length) return null;

    return (
        <div ref={scrollRef} className="w-full relative">
            <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 w-max">
                {slides.map((slide, i) => (
                    <div key={i} className="relative w-[300px] md:w-[500px] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 group">
                        <div className="absolute inset-0 bg-neutral-800/50 animate-pulse" /> {/* Placeholder Image */}

                        {/* Overlay Content */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white font-bold text-lg">{slide.title}</h4>
                            <p className="text-white/60 text-sm">{slide.desc}</p>
                        </div>
                    </div>
                ))}
                {/* Duplicate for length/feeling if needed, or mostly just let the 3 slide. */}
                {/* Add a generic end card */}
                <div className="w-[200px] flex items-center justify-center text-white/20 font-mono text-sm uppercase tracking-widest border border-white/5 rounded-xl">
                    View All Screens
                </div>
            </motion.div>
        </div>
    );
}
