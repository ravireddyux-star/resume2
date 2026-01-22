"use client";

import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react"; // Changed Share2 to Linkedin specific if available, or just generic
import InteractiveIcon from "@/components/ui/InteractiveIcon";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-0 flex flex-col justify-between">
            <section className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-20 md:mb-0 flex-grow">
                {/* Visual / Text Column */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xl md:text-2xl font-mono text-neutral-600 uppercase tracking-widest block mb-8">
                        Contact
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-heading leading-[0.9] tracking-tighter mb-12">
                        Let&apos;s <br />
                        <span className="text-white">Collaborate.</span>
                    </h1>
                </motion.div>

                {/* Details Column */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 md:pt-4 flex flex-col items-start"
                >
                    {/* Email */}
                    <InteractiveIcon
                        icon={<Mail size={32} />}
                        label="Email"
                        value="ravireddy.ux@gmail.com"
                        isEmail={true}
                    />

                    {/* Phone */}
                    <InteractiveIcon
                        icon={<Phone size={32} />}
                        label="Phone"
                        value="9845204549"
                        href="tel:9845204549"
                    />

                    {/* Socials / LinkedIn */}
                    <InteractiveIcon
                        icon={<Linkedin size={32} />}
                        label="LinkedIn"
                        value="ravimunireddy"
                        href="https://www.linkedin.com/in/ravimunireddy/"
                    />
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
