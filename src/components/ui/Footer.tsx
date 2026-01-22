"use client";

export default function Footer() {
    return (
        <footer className="relative z-10 w-full py-12 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 items-start text-sm">

                {/* Brand / Links Column 1 */}
                <div className="md:col-span-1 space-y-8">
                    <span className="text-xl font-bold tracking-tighter text-white block">Ravi Munireddy.</span>
                    <nav className="flex flex-col space-y-3 text-neutral-400">
                        <a href="/home" className="hover:text-white transition-colors">Home</a>
                        <a href="/projects" className="hover:text-white transition-colors">Work</a>
                        <a href="/about" className="hover:text-white transition-colors">About</a>
                        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                    </nav>
                </div>

                {/* Socials / Contact */}
                <div className="md:col-span-1 space-y-8">
                    <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest block">Connect</span>
                    <nav className="flex flex-col space-y-3 text-neutral-400">
                        <a href="https://www.linkedin.com/in/ravimunireddy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="mailto:ravireddy.ux@gmail.com" className="hover:text-white transition-colors">Email</a>
                    </nav>
                </div>

                {/* Large Text / Quote Area */}
                <div className="md:col-span-2 flex flex-col justify-between h-full space-y-8">
                    <div className="border-l border-white/10 pl-6">
                        <p className="text-neutral-500 font-light max-w-sm">
                            Crafting intelligent, user-centric digital experiences that drive business success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Giant Text */}
            <div className="border-t border-white/5 pt-12">
                <h1 className="text-[12vw] leading-none font-black text-center text-neutral-900 select-none tracking-tighter mix-blend-difference pointer-events-none">
                    DESIGN
                </h1>
            </div>
        </footer>
    );
}
