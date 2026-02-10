"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import { getProjectBySlug } from "@/lib/projectData";
import { ArrowLeft, Zap, X, Smartphone, Wifi } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import MockupFrame from "@/components/visuals/MockupFrame";
import BentoGrid from "@/components/visuals/BentoGrid";

export default function HPSmartAppPage() {
    const project = getProjectBySlug("hp-smart-app");
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
        <main ref={containerRef} className="min-h-screen bg-background relative selection:bg-blue-500/30 overflow-hidden">
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

            {/* A. Cinematic Hero (Custom Portrait Layout) */}
            <header className="relative min-h-[110vh] w-full flex flex-col justify-center items-center overflow-hidden px-4 pt-20">
                {/* Dynamic Mesh Gradient */}
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${project.visuals?.heroMeshParams || "from-blue-900/40 via-background to-background"} opacity-60`} />

                {/* Grain overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="z-10 text-center max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="text-left space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-400 uppercase tracking-widest backdrop-blur-md">
                                {project.role}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                                {project.category}
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-[0.9] tracking-tighter drop-shadow-2xl">
                            {project.title}
                        </h1>
                        {project.subtitle && (
                            <p className="text-xl md:text-2xl text-neutral-400 max-w-xl font-light">{project.subtitle}</p>
                        )}

                        <div className="flex flex-wrap gap-3 pt-4">
                            {project.tags?.map((tag, i) => (
                                <span key={i} className="text-sm text-neutral-500 border border-white/5 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {project.prototypeLink && (
                            <div className="pt-6">
                                <a
                                    href={project.prototypeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
                                >
                                    <span>View Interactive Prototype</span>
                                    <ArrowLeft className="rotate-135" size={16} style={{ transform: "rotate(135deg)" }} />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Portrait Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 1, type: "spring" }}
                        className="order-1 lg:order-2 relative mx-auto w-full max-w-xs"
                    >
                        <MockupFrame glowColor={project.visuals?.colorTheme} className="aspect-[9/19] rounded-[3rem] border-4 border-neutral-800 bg-black">
                            {project.heroImage ? (
                                <Image
                                    src={project.heroImage}
                                    alt="HP Smart App Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                                    <Smartphone size={48} className="text-white/20" />
                                </div>
                            )}
                        </MockupFrame>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    </motion.div>
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

            {/* B. The Challenge */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="relative z-10 space-y-8">
                    <span className="text-lg font-bold text-white uppercase tracking-widest block mb-6 border-b border-white/20 pb-2 inline-block">
                        01 • The Challenge
                    </span>
                    {project.challengeDetails ? (
                        <>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                                {project.challengeDetails.heading}
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                {project.challengeDetails.mainText}
                            </p>

                            <div className="space-y-6 pt-4">
                                {project.challengeDetails.painPoints.map((point, i) => (
                                    <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="min-w-[4px] h-[4px] mt-2 rounded-full bg-red-400" />
                                        <p className="text-neutral-300 text-sm">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8">
                            {project.challenge}
                        </h2>
                    )}
                </div>

                <div className="sticky top-32 space-y-8">
                    <MockupFrame glowColor={project.visuals?.colorTheme}>
                        <div className="relative w-full h-[400px] bg-neutral-900 rounded-lg overflow-hidden border border-white/10">
                            {project.challengeImage ? (
                                <Image
                                    src={project.challengeImage}
                                    alt="Challenge Context"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                                    <span className="text-white/20 font-mono">Challenge Visual</span>
                                </div>
                            )}
                        </div>
                    </MockupFrame>
                </div>
            </section>

            {/* C. The Solution */}
            <section className="relative w-full py-32 bg-black/40 border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <span className="text-lg font-bold text-white uppercase tracking-widest block mb-6 border-b border-white/20 pb-2 inline-block">
                        02 • The Solution
                    </span>

                    {project.solutionDetails ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 space-y-8">
                                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {project.solutionDetails.heading}
                                </h3>
                                <p className="text-lg text-neutral-400">{project.solutionDetails.description}</p>

                                <div className="space-y-6">
                                    {project.solutionDetails.modules.map((mod, i) => (
                                        <div key={i} className="bg-neutral-900/50 border border-white/10 p-6 rounded-xl hover:border-blue-500/30 transition-colors">
                                            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                                {i === 0 && <Wifi className="text-blue-400" />}
                                                {i === 1 && <Smartphone className="text-green-400" />}
                                                {i === 2 && <Zap className="text-yellow-400" />}
                                                {mod.title}
                                            </h4>
                                            <p className="text-neutral-400 text-sm">{mod.desc}</p>
                                            {mod.image && !mod.image.includes("mockup") && (
                                                <div className="mt-4 relative h-32 w-full rounded-lg overflow-hidden border border-white/5">
                                                    <Image src={mod.image} alt={mod.title} fill className="object-cover" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Portrait Solution Mockup */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                <MockupFrame glowColor={project.visuals?.colorTheme} className="w-full max-w-sm aspect-[9/19] rounded-[2.5rem] border-[6px] border-neutral-900 bg-black">
                                    <div className="relative w-full h-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                                        {project.visuals?.gallery?.[2]?.image ? (
                                            <Image
                                                src={project.visuals.gallery[2].image}
                                                alt="Solution Interface"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="text-center p-4">
                                                <Smartphone className="inline-block mb-2 text-white/20" size={48} />
                                                <p className="text-xs text-white/30 lowercase font-mono">Live Preview Engine</p>
                                            </div>
                                        )}

                                        {/* Overlay UI Elements */}
                                        <div className="absolute top-12 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-mono border border-green-500/30 backdrop-blur-md">
                                            SYNC: ACTIVE
                                        </div>
                                    </div>
                                </MockupFrame>
                            </div>
                        </div>
                    ) : (
                        <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                            {project.solution}
                        </h3>
                    )}
                </div>

                {/* Parallax Gallery */}
                {project.visuals?.gallery && project.visuals.gallery.length > 0 && (
                    <div className="mt-24">
                        <ParallaxGallery slides={project.visuals.gallery} />
                    </div>
                )}
            </section>

            {/* D. Impact (Bento Grid) */}
            <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48">
                <span className="text-lg font-bold text-white uppercase tracking-widest block mb-12 text-center">
                    <span className="border-b border-white/20 pb-2 inline-block">03 • The Impact</span>
                </span>

                {project.impactDetails && (
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.impactDetails.heading}</h3>
                    </div>
                )}

                <BentoGrid items={project.impact} accentColor={project.visuals?.colorTheme} />

                {project.impactDetails && (
                    <p className="text-center text-neutral-500 mt-16 max-w-2xl mx-auto border-t border-white/5 pt-8">
                        {project.impactDetails.footer}
                    </p>
                )}
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

// Reuse ParallaxGallery (Same as [slug]/page.tsx)
function ParallaxGallery({ slides }: { slides: { title: string, desc: string, image?: string }[] }) {
    const scrollRef = useRef(null);
    const [showGallery, setShowGallery] = useState(false);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    if (!slides.length) return null;

    return (
        <>
            <div ref={scrollRef} className="w-full relative">
                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-24 w-max">
                    {slides.slice(0, 4).map((slide, i) => (
                        <div key={i} className="relative w-[300px] md:w-[500px] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 group cursor-pointer" onClick={() => setShowGallery(true)}>
                            {slide.image ? (
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-neutral-800/50 animate-pulse" />
                            )}

                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-white font-bold text-lg">{slide.title}</h4>
                                <p className="text-white/60 text-sm">{slide.desc}</p>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => setShowGallery(true)}
                        className="w-[200px] flex items-center justify-center text-white/50 hover:text-white font-mono text-sm uppercase tracking-widest border border-white/5 hover:border-white/20 rounded-xl transition-colors bg-white/5 hover:bg-white/10"
                    >
                        View All Screens
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {showGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl overflow-y-auto p-4 md:p-12"
                    >
                        <button
                            onClick={() => setShowGallery(false)}
                            className="fixed top-8 right-8 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="text-white" size={24} />
                        </button>

                        <div className="max-w-7xl mx-auto space-y-12">
                            <div className="text-center">
                                <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest mb-4 block">Project Gallery</span>
                                <h2 className="text-3xl font-bold text-white">All Screens</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {slides.map((slide, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900 group"
                                    >
                                        {slide.image && (
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <p className="text-white font-medium">{slide.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
