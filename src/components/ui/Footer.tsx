"use client";

export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-white/5 bg-black">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-neutral-500 text-sm">Ravi Munireddy © 2024</span>
                <a href="mailto:ravi@example.com" className="text-xl font-bold text-white hover:text-neutral-300 transition-colors">
                    Let&apos;s Talk
                </a>
            </div>
        </footer>
    );
}
