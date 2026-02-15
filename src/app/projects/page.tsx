"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    meta: string;
    category: string;
    slug: string;
    image?: string;
    size?: "normal" | "tall";
}

const PROJECTS: Project[] = [
    { id: 1, title: "AI-Powered Unified UX", meta: "Strategy", category: "AI UX", slug: "ai-unified-ux", image: "/images/ai3.jpg" },
    { id: 2, title: "HP Control Panel", meta: "$3M+ Savings", category: "Enterprise", slug: "hp-printer-ux", image: "/images/hp8.jpg" },
    { id: 3, title: "HP Smart App: Real-Time Sync", meta: "Zero Print Waste", category: "Mobile Experience", slug: "hp-smart-app", image: "/images/hp8.jpg" },
    { id: 4, title: "AI Remote Printing", meta: "Mobile App", category: "AI UX", slug: "https://hope-ankle-30121497.figma.site/" },
    { id: 5, title: "AI-Powered Mobile Printing Assistant", meta: "Mobile AI", category: "AI UX", slug: "ai-mobile-printing", image: "/images/aimobile1.jpg" },
];

const FILTERS = ["All", "AI UX", "ROI", "Enterprise"];

export default function ProjectsPage() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = PROJECTS.filter(
        (p) => activeFilter === "All" || p.category === activeFilter
    );

    return (
        <main className="min-h-screen w-full bg-background px-4 pt-32 pb-32">
            {/* Header & Filters */}
            <div className="flex flex-col items-center mb-16 gap-8">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-heading tracking-tight"
                >
                    THE ARCHIVE
                </motion.h1>

                <div className="flex flex-wrap gap-2 justify-center">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        meta={project.meta}
                        slug={project.slug}
                        delay={index}
                        isDimmed={hoveredId !== null && hoveredId !== project.id}
                        onHoverStart={() => setHoveredId(project.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        image={project.image}
                        size={project.size}
                    />
                ))}
            </div>
        </main>
    );
}
