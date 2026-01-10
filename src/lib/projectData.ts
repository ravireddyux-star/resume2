export interface Project {
    slug: string;
    title: string;
    role: string;
    challenge: string;
    solution: string;
    features: string[];
    impact: {
        metric: string;
        label: string;
    }[];
    category: string;
    visuals: {
        colorTheme: string; // Hex for glows/accents
        heroMeshParams: string; // CSS gradient string
        gallery: { title: string; desc: string }[]; // Placeholders for gallery items
    };
}

export const PROJECTS: Project[] = [
    {
        slug: "ai-unified-ux",
        title: "AI-Powered Unified UX",
        role: "Strategy & Architecture",
        challenge: "Fragmented requirements scattered across multiple platforms led to slow design workflows.",
        solution: "Implemented Intelligent Automation to transform fragmented inputs into streamlined design workflows.",
        features: ["Automated Requirements Analysis", "Human-AI Collaboration", "Streamlined Workflows"],
        impact: [
            { metric: "88%", label: "Task Success Rate" },
            { metric: "48%", label: "Faster Completion" },
            { metric: "100%", label: "Adoption" }
        ],
        category: "AI UX",
        visuals: {
            colorTheme: "#3b82f6", // Blue
            heroMeshParams: "from-blue-900/40 via-background to-background",
            gallery: [
                { title: "Workflow Diagram", desc: "Automated routing logic" },
                { title: "Dashboard UI", desc: "Real-time analytics view" },
                { title: "Prompt Interface", desc: "Natural language input" }
            ]
        }
    },
    {
        slug: "hp-printer-ux",
        title: "HP Printer Control Panel",
        role: "Lead UX Designer",
        challenge: "Legacy interface was complex and difficult to navigate for non-technical users.",
        solution: "Redesigned the entire control panel experience with a focus on simplicity and context.",
        features: ["Adaptive Touch Interface", "Contextual Smart Prompts", "Personalized Shortcuts"],
        impact: [
            { metric: "$3M+", label: "Cost Savings" },
            { metric: "88%", label: "Task Success Rate" },
            { metric: "48%", label: "Faster Task Completion" },
        ],
        category: "Enterprise",
        visuals: {
            colorTheme: "#f97316", // Orange
            heroMeshParams: "from-orange-900/40 via-background to-background",
            gallery: [
                { title: "Smart Home Screen", desc: "Context-aware tiles" },
                { title: "One-Tap Shortcuts", desc: "Personalized actions" },
                { title: "Accessibility Mode", desc: "High contrast UI" }
            ]
        }
    },
    {
        slug: "smart-prompts",
        title: "Smart Prompts",
        role: "UX Researcher",
        challenge: "Users struggled to find the right commands.",
        solution: "Implemented AI-driven suggestions.",
        features: ["Predictive Text", "Contextual Help"],
        impact: [{ metric: "92%", label: "Satisfaction" }],
        category: "ROI",
        visuals: {
            colorTheme: "#10b981", // Emerald
            heroMeshParams: "from-emerald-900/40 via-background to-background",
            gallery: []
        }
    },
    {
        slug: "schneider-electric-ux",
        title: "Schneider Electric UX",
        role: "UX Consultant",
        challenge: "Complex industrial systems.",
        solution: "Simplified dashboard for operators.",
        features: ["Real-time Monitoring", "Mobile Access"],
        impact: [{ metric: "30%", label: "Efficiency Boost" }],
        category: "Enterprise",
        visuals: {
            colorTheme: "#06b6d4", // Cyan
            heroMeshParams: "from-cyan-900/40 via-background to-background",
            gallery: []
        }
    },
    {
        slug: "creativity-ai",
        title: "Creativity + AI",
        role: "Thought Leader",
        challenge: "Defining the future of design.",
        solution: "Exploring generative AI tools.",
        features: ["Generative Art", "Prompt Engineering"],
        impact: [{ metric: "10k+", label: "Views" }],
        category: "AI UX",
        visuals: {
            colorTheme: "#8b5cf6", // Violet
            heroMeshParams: "from-violet-900/40 via-background to-background",
            gallery: []
        }
    }
];

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string) {
    const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    return PROJECTS[nextIndex];
}
