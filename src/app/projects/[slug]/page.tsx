"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import { getProjectBySlug } from "@/lib/projectData";
import { ArrowLeft, Database, Brain, FileText, Zap, Users, Layers, Eye, Search, Check, CheckCircle, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import MockupFrame from "@/components/visuals/MockupFrame";
import BentoGrid from "@/components/visuals/BentoGrid";
import ProcessFlow from "@/components/visuals/ProcessFlow";
import ComparisonTable from "@/components/visuals/ComparisonTable";
import StatComparison from "@/components/visuals/StatComparison";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = getProjectBySlug(params.slug);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    // Dynamic Icon Mapping
    const IconMap: Record<string, React.ReactNode> = {
        Database: <Database size={32} className="text-blue-400" />,
        Brain: <Brain size={32} className="text-purple-400" />,
        FileText: <FileText size={32} className="text-emerald-400" />,
        Layers: <Layers size={32} className="text-orange-400" />,
        Eye: <Eye size={32} className="text-blue-400" />,
        Search: <Search size={32} className="text-emerald-400" />,
        Check: <Check size={20} className="text-green-400" />
    };

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
                    {project.subtitle && (
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light">{project.subtitle}</p>
                    )}
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

            {/* B. The Challenge (Rich or Simple) */}
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

                            {/* Goals & Paint Points */}
                            <div className="space-y-6 pt-4">
                                {project.challengeDetails.painPoints.map((point, i) => (
                                    <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="min-w-[4px] h-[4px] mt-2 rounded-full bg-red-400" />
                                        <p className="text-neutral-300 text-sm">{point}</p>
                                    </div>
                                ))}

                                {project.challengeDetails.goals && (
                                    <div className="pt-6 border-t border-white/10 mt-6">
                                        <p className="text-white text-lg font-bold mb-4 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            Target Outcomes
                                        </p>
                                        {project.challengeDetails.goals.map((goal, i) => (
                                            <div key={i} className="flex gap-3 items-center mb-3">
                                                <CheckCircle size={20} className="text-green-400 shrink-0" />
                                                <span className="text-neutral-100 text-base font-medium">{goal}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8">
                                {project.challenge}
                            </h2>
                            <div className="h-1 w-24 bg-white/20 rounded-full" />
                        </>
                    )}
                </div>

                {/* Floating UI Mockup or Stat Comparison */}
                <div className="sticky top-32 space-y-8">
                    {project.statComparison && (
                        <div className="mb-8">
                            <StatComparison before={project.statComparison.before} after={project.statComparison.after} label={project.statComparison.label} />
                        </div>
                    )}

                    {project.challengeImage ? (
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                            <Image
                                src={project.challengeImage}
                                alt="Challenge Context"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <MockupFrame glowColor={project.visuals?.colorTheme}>
                            <div className="relative w-full h-[400px] bg-neutral-900 rounded-lg overflow-hidden border border-white/10">
                                <Image
                                    src="/images/hp9.jpg"
                                    alt="Legacy Interface Snapshot"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </MockupFrame>
                    )}
                </div>
            </section>

            {/* B.1 Research & Insights (Optional) */}
            {project.research && (
                <section className="w-full bg-neutral-900/30 py-24 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-3xl mb-16">
                            <span className="text-lg font-bold text-white uppercase tracking-widest block mb-6 border-b border-white/20 pb-2 inline-block">
                                Discovery
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.research.heading}</h3>
                            <p className="text-neutral-400 text-lg border-l-2 border-orange-500 pl-6">{project.research.methodology}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {project.research.findings.map((find, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                                    <div className="mb-6">{IconMap[find.icon] || <Search className="text-white" />}</div>
                                    <h4 className="text-xl font-bold text-white mb-3">{find.title}</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{find.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* B.2 Competitive Landscape (Optional) */}
            {project.competitors && (
                <section className="w-full max-w-7xl mx-auto px-6 py-24">
                    <div className="mb-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Competitive Benchmarking</h3>
                        <p className="text-neutral-500">Market analysis reveals critical gaps in accessibility and speed.</p>
                    </div>
                    <ComparisonTable competitors={project.competitors} />
                </section>
            )}

            {/* C. The Solution (Rich or Simple) */}
            <section className="relative w-full py-32 bg-black/40 border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <span className="text-lg font-bold text-white uppercase tracking-widest block mb-6 border-b border-white/20 pb-2 inline-block">
                        02 • The Solution
                    </span>

                    {project.solutionDetails ? (
                        <div className="space-y-16">
                            <div className="max-w-3xl">
                                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                    {project.solutionDetails.heading}
                                </h3>
                                <p className="text-lg text-neutral-400">{project.solutionDetails.description}</p>
                            </div>

                            {/* Modules Grid (Adaptive) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.solutionDetails.modules.map((mod, i) => (
                                    <div key={i} className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors flex flex-col">
                                        <div className="flex items-center gap-4 mb-6">
                                            {mod.icon && (IconMap[mod.icon] || <Zap className="text-yellow-400" />)}
                                            <h4 className="text-xl font-bold text-white">{mod.title}</h4>
                                        </div>

                                        {/* Content: Items List OR Image/Desc */}
                                        <div className="space-y-4 flex-1">
                                            {mod.desc && (
                                                <p className="text-neutral-300 leading-relaxed mb-4">{mod.desc}</p>
                                            )}

                                            {mod.image && (
                                                <div className="w-full aspect-video rounded-lg border border-white/5 overflow-hidden relative bg-neutral-800">
                                                    {mod.image.startsWith("/") ? (
                                                        <Image
                                                            src={mod.image}
                                                            alt={mod.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
                                                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{mod.image}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {mod.items && mod.items.map((item, j) => (
                                                <div key={j} className="text-sm">
                                                    {item.source && <span className="text-white font-medium block mb-1">{item.source}</span>}
                                                    {item.feature && <span className="text-white font-medium block mb-1">{item.feature}</span>}
                                                    <span className="text-neutral-400">{item.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <h3 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                            {project.solution}
                        </h3>
                    )}
                </div>

                {/* Workflow Diagram */}
                {(project.processFlow || project.processFlowImage) && (
                    <div className="max-w-7xl mx-auto px-6 mb-16">
                        {project.processFlowText && (
                            <div className="max-w-3xl mx-auto text-center mb-12">
                                <p className="text-xl text-neutral-300 leading-relaxed font-light">
                                    {project.processFlowText}
                                </p>
                            </div>
                        )}

                        {project.processFlowImage && (
                            <div className="relative w-full max-w-4xl mx-auto aspect-video mb-12 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                                <Image
                                    src={project.processFlowImage}
                                    alt="Process Flow Diagram"
                                    fill
                                    className="object-contain p-8"
                                />
                            </div>
                        )}

                        {project.processFlow && <ProcessFlow steps={project.processFlow} />}
                    </div>
                )}

                {/* Accessibility Suite (New) */}
                {project.accessibility && (
                    <div className="max-w-7xl mx-auto px-6 mb-16 border-t border-white/10 pt-16">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Zap className="text-yellow-400" fill="currentColor" />
                            {project.accessibility.heading}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {project.accessibility.features.map((feat, i) => (
                                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3">
                                    <CheckCircle size={20} className="text-green-400 shrink-0" />
                                    <span className="text-sm text-neutral-200">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                {project.visuals?.gallery && project.visuals.gallery.length > 0 && (
                    <div className="mt-24">
                        <ParallaxGallery slides={project.visuals.gallery} />
                    </div>
                )}
            </section>

            {/* C.1 Collaboration */}
            {project.collaboration && (
                <section className="w-full max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">{project.collaboration.heading}</h3>
                            <p className="text-neutral-400 text-lg mb-8">{project.collaboration.text}</p>
                            <ul className="space-y-4">
                                {project.collaboration.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-neutral-300">
                                        <Users className="shrink-0 text-blue-400" size={20} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-[300px] bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative">
                            {project.collaboration.image ? (
                                <Image
                                    src={project.collaboration.image}
                                    alt={project.collaboration.heading}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-white/20 font-mono text-xs uppercase tracking-widest">Collaboration Visualization</span>
                            )}
                        </div>
                    </div>
                </section>
            )}

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

            {/* E. Conclusion */}
            {project.conclusion && (
                <section className="w-full bg-white/5 py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <p className="text-2xl md:text-3xl text-white font-serif italic mb-12">
                            &quot;{project.conclusion.callout}&quot;
                        </p>
                        <p className="text-neutral-400">
                            {project.conclusion.text}
                        </p>
                    </div>
                </section>
            )}


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

                            {/* Overlay Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-white font-bold text-lg">{slide.title}</h4>
                                <p className="text-white/60 text-sm">{slide.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* View All Button */}
                    <button
                        onClick={() => setShowGallery(true)}
                        className="w-[200px] flex items-center justify-center text-white/50 hover:text-white font-mono text-sm uppercase tracking-widest border border-white/5 hover:border-white/20 rounded-xl transition-colors bg-white/5 hover:bg-white/10"
                    >
                        View All Screens
                    </button>
                </motion.div>
            </div>

            {/* Full Screen Gallery Modal */}
            <AnimatePresence>
                {showGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl overflow-y-auto p-4 md:p-12"
                    >
                        {/* Close Button */}
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
