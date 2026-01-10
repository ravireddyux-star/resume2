"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
    { year: "2019 — Present", role: "Lead UX Designer", company: "Mphasis", client: "HP Inc" },
    { year: "2017 — 2018", role: "UX Consultant", company: "Mphasis", client: "" },
    { year: "2015 — 2017", role: "UX Consultant", company: "Schneider Electric", client: "" },
    { year: "2011 — 2015", role: "Sr. Information Architect", company: "Wipro", client: "Cisco" },
    { year: "2009 — 2010", role: "Sr. Usability Engineer", company: "Cognilytics", client: "" },
    { year: "2008 — 2009", role: "Project Leader", company: "KTwo Technologies", client: "" },
];

const COMPETENCIES = [
    "AI-Driven Design",
    "Enterprise UX",
    "Strategic Consulting",
    "Accessibility (A11y)",
    "Task Success Optimization",
    "ROI-Focused Design",
];

export default function ExperienceTimeline() {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-24 pb-48">
            {/* Timeline */}
            <div className="grid md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-12">
                        Timeline
                    </span>
                    <div className="border-l border-white/10 pl-8 space-y-12">
                        {EXPERIENCE.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-neutral-900 border border-white/20" />
                                <span className="text-xs font-mono text-neutral-500 block mb-2">{item.year}</span>
                                <h4 className="text-xl font-bold text-white">{item.role}</h4>
                                <p className="text-neutral-400">{item.company} {item.client && <span className="text-neutral-600">• {item.client}</span>}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Competencies */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest block mb-12">
                        Core Competencies
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {COMPETENCIES.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 hover:bg-white/10 hover:border-white/20 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
