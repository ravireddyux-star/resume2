"use client";

import AboutSection from "@/components/ui/AboutSection";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <AboutSection showSummary={true} />
            <Footer />
        </main>
    );
}
