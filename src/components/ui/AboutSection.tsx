"use client";

import { motion } from "framer-motion";

interface AboutSectionProps {
    showSummary?: boolean;
}

export default function AboutSection({ showSummary = true }: AboutSectionProps) {
    return (
        <section className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-xl md:text-2xl font-mono text-neutral-500 uppercase tracking-widest block mb-8">
                    The Manifesto
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-heading mb-10 leading-tight">
                    The Intersection of <br />
                    <span className="text-white">Intelligence & Design.</span>
                </h2>
                <p className="text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-14 max-w-3xl">
                    Talented user-experience design strategist with proven know-how to combine creative and usability viewpoints resulting in world-class digital products. My ability to ensure stakeholder buy-in and track record of successfully managing, leading & mentoring high-performance User Experience team with an extensive background in both Lean UX and Agile methodology.
                </p>

                {showSummary && (
                    <div className="space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Summary: As a UX Manager</h3>
                        <ul className="space-y-3 text-sm md:text-base text-neutral-400 font-light list-disc pl-6 leading-relaxed">
                            <li>Lead a team of mid-senior designers across several products; lead creative and holistic thinking across diverse product releases and platforms.</li>
                            <li>Oversee all UX commitments including ongoing feature work, new product design and application overhauls.</li>
                            <li>Oversee the day-to-day activities of the UX design team including managing deliverables and ensuring that stakeholders are kept informed on project deliverables, processes and progress.</li>
                            <li>Coach and mentor UX Designers, onboard new hires and encourage a supportive and balanced remote work environment.</li>
                            <li>Assist with strategic UX initiatives and prioritize on company initiatives.</li>
                            <li>Build cross-functional relationships with different areas of the business, particularly with Engineering, Product, Support and Customer Success.</li>
                            <li>Work with the UX Director to implement the team vision and roadmap.</li>
                            <li>Analyze metrics and make data-driven decisions to realign and reprioritize tasks and projects.</li>
                            <li>Act as a team leader and collaborate with cross-functional peers.</li>
                            <li>Manage training, career advancement and development of UX Designers.</li>
                            <li>Commission or run customer discovery, research, and testing on behalf of the product or portfolio area.</li>
                            <li>Actively participate in recruiting/hiring process by developing judgment for evaluation of talent; provide feedback for shape of overall team.</li>
                        </ul>
                    </div>
                )}
            </motion.div>
        </section>
    );
}
