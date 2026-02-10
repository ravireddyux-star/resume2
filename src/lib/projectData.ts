export interface Project {
    id?: string;
    slug: string;
    title: string;
    subtitle?: string;
    role: string;
    tags?: string[];
    heroImage?: string;
    challenge: string;
    challengeImage?: string; // Image next to challenge text
    challengeDetails?: {
        heading: string;
        mainText: string;
        painPoints: string[];
        goals?: string[];
    };
    research?: {
        heading: string;
        methodology: string;
        findings: { icon: string; title: string; desc: string }[];
    };
    competitors?: { name: string; ui: string; nav: string; access: string }[];
    solution: string;
    solutionDetails?: {
        heading: string;
        description: string;
        modules: {
            title: string;
            desc?: string; // For text based modules
            image?: string; // For visual modules
            icon?: string; // For AI modules
            items?: { source?: string; feature?: string; desc: string }[];
        }[];
    };
    processFlow?: { step: number; title: string; desc: string }[];
    accessibility?: {
        heading: string;
        features: string[];
    };
    statComparison?: { before: string; after: string; label: string };
    collaboration?: {
        heading: string;
        text: string;
        points: string[];
        image?: string;
    };
    features: string[];
    impact: {
        metric: string;
        label: string;
        desc?: string;
        value?: string; // For HP compat
    }[];
    impactDetails?: {
        heading: string;
        // ...
        footer: string;
    };
    conclusion?: { text: string; callout: string };
    category: string;
    prototypeLink?: string; // Link to external prototype (Figma, etc.)
    visuals: {
        colorTheme: string; // Hex for glows/accents
        heroMeshParams: string; // CSS gradient string
        gallery: { title: string; desc: string; image: string }[]; // Placeholders for gallery items
    };
}

export const hpSmartApp: Project = {
    id: "hp-smart-app",
    slug: "hp-smart-app",
    title: "HP Smart App",
    subtitle: "Real-Time Print Preview Synchronization",
    role: "Lead Mobile UX",
    heroImage: "/images/hp-smart-hero.jpg",
    tags: ["Mobile App", "Real-Time Sync", "WYSIWYG"],
    prototypeLink: "https://twine-dark-88416982.figma.site",

    // SECTION 1: THE CHALLENGE
    challenge: "Mobile printing often suffers from the 'Gap of Uncertainty'—users hit print without knowing if the output will match their screen.",
    challengeImage: "/images/hp-smart-home.jpg", // Using one of the gallery images as challenge image since specific one wasn't provided
    challengeDetails: {
        heading: "The 'Blind Print' Anxiety",
        mainText: "Mobile printing often suffers from the 'Gap of Uncertainty'—users hit print without knowing if the output will match their screen. Layout shifts, paper size mismatches, and color rendering issues led to wasted paper and user frustration.",
        painPoints: [
            "Preview Latency: Static previews didn't reflect printer settings.",
            "Wasted Resources: 1 in 5 prints were discarded due to layout errors.",
            "Trust Gap: Users preferred desktop printing due to mobile inaccuracy."
        ]
    },

    // SECTION 2: THE SOLUTION
    solution: "A WebSocket-based real-time rendering engine that updates the mobile preview instantly as physical printer settings change.",
    solutionDetails: {
        heading: "True-to-Life Synchronization",
        description: "A WebSocket-based real-time rendering engine that updates the mobile preview instantly as physical printer settings change.",
        modules: [
            {
                title: "Live Render Engine",
                desc: "Instant visual feedback when changing paper size, borders, or color mode.",
                image: "live-render-mockup"
            },
            {
                title: "Paper-to-Screen Match",
                desc: "1:1 scale accuracy ensuring 'What You See Is Literally What You Get'.",
                image: "scale-match-mockup"
            },
            {
                title: "Smart Alerts",
                desc: "Proactive warnings for low resolution or incompatible media types.",
                image: "alert-ui-mockup"
            }
        ]
    },

    // SECTION 4: IMPACT
    impact: [
        { value: "18%", label: "Less Waste", desc: "Reduction in discarded paper due to accurate previews.", metric: "18%" },
        { value: "2.5x", label: "Mobile Usage", desc: "Increase in print jobs initiated from mobile devices.", metric: "2.5x" },
        { value: "4.8★", label: "App Store", desc: "Rating increased due to reliability improvements.", metric: "4.8★" }
    ],
    impactDetails: {
        heading: "Tangible Results",
        footer: "Delivering confidence in every print."
    },

    category: "Mobile Experience",
    visuals: {
        colorTheme: "#0096D6", // HP Blue
        heroMeshParams: "from-blue-600/40 via-background to-background",
        gallery: [
            { title: "Home Dashboard", desc: "Main interface", image: "/images/hp-smart-home.jpg" },
            { title: "Edit Flow", desc: "Editing options", image: "/images/hp-smart-edit.jpg" },
            { title: "Print Preview", desc: "Real-time preview", image: "/images/hp-smart-preview.jpg" }
        ]
    },
    features: ["Real-Time Sync", "WYSIWYG", "Smart Alerts"]
};

export const PROJECTS: Project[] = [
    hpSmartApp,
    {
        id: "ai-unified-ux", // Added ID as per prompt though interface doesn't enforce it, strictly speaking slug is unique id.
        slug: "ai-unified-ux",
        title: "AI-Powered Unified UX Design",
        subtitle: "Requirements Analysis: A Case Study",
        role: "Strategy & Architecture",
        heroImage: "/images/ai-hero-network.jpg",
        tags: ["AI Strategy", "Automation", "Workflow Optimization"],

        // SECTION 1: THE CHALLENGE
        challenge: "Fragmented requirements led to slow workflows.", // Short summary for cards
        challengeImage: "/images/ai1.jpg",
        challengeDetails: {
            heading: "The Fragmented Landscape",
            mainText: "Requirements are scattered across multiple platforms—Jira tickets, email threads, spreadsheets, and Confluence pages—creating a fragmented landscape that slows teams down.",
            painPoints: [
                "Manual consolidation causes costly delays and introduces errors.",
                "Miscommunication between stakeholders leads to significant rework.",
                "UX teams struggle to maintain a single source of truth.",
                "Designers spend more time gathering data than designing."
            ]
        },

        // SECTION 2: THE SOLUTION
        solution: "Implemented Intelligent Automation to transform fragmented inputs into streamlined design workflows.",
        solutionDetails: {
            heading: "Intelligent Processing Layer",
            description: "AI agents automatically parse and extract requirements from diverse sources, eliminating manual data collection.",
            modules: [
                {
                    title: "Data Extraction",
                    icon: "Database",
                    items: [
                        { source: "Jira Issues", desc: "Extracts user stories, acceptance criteria, and technical specifications." },
                        { source: "Email Threads", desc: "Captures stakeholder feedback, changes, and critical decisions." },
                        { source: "Spreadsheets", desc: "Processes structured data including feature lists and priority matrices." },
                        { source: "Confluence", desc: "Aggregates documentation and research findings into unified insights." }
                    ]
                },
                {
                    title: "Smart Analysis (NLP)",
                    icon: "Brain",
                    items: [
                        { feature: "Conflict Resolution", desc: "Identifies contradictions, detects duplicates, and structures data logically." },
                        { feature: "Continuous Learning", desc: "Improves accuracy over time through designer feedback." }
                    ]
                },
                {
                    title: "The Unified Document",
                    icon: "FileText",
                    items: [
                        { feature: "Single Source", desc: "Comprehensive Design Brief with complete context." },
                        { feature: "Full Traceability", desc: "Maintains links back to original sources for transparency." }
                    ]
                }
            ]
        },

        // SECTION 3: WORKFLOW DIAGRAM
        processFlow: [
            { step: 1, title: "Input Sources", desc: "Jira, Email, Excel, Confluence" },
            { step: 2, title: "AI Processing", desc: "Extraction & Intelligent Analysis" },
            { step: 3, title: "Unified Document", desc: "Structured Requirements Output" },
            { step: 4, title: "Designer Review", desc: "Refinement & Iteration" }
        ],

        // SECTION 4: HUMAN + AI COLLABORATION
        collaboration: {
            heading: "Strategic Partnership",
            text: "Designers work alongside AI to refine requirements, shifting focus from data gathering to high-value creative problem solving.",
            points: [
                "Intelligent Review: Designer evaluates AI insights with domain expertise.",
                "Strategic Focus: Time redirected to user research and innovation.",
                "Gap Analysis: AI surfaces inconsistencies for rapid resolution."
            ],
            image: "/images/ai4.jpg"
        },

        features: ["Automated Requirements Analysis", "Human-AI Collaboration", "Streamlined Workflows"],

        // SECTION 5: IMPACT & METRICS
        impact: [
            { metric: "40%", label: "Time Savings", desc: "Reduction in hours spent consolidating requirements." },
            { metric: "60%", label: "Fewer Revisions", desc: "Improved accuracy leads to significant decrease in rework cycles." },
            { metric: "100%", label: "Single Source", desc: "Team alignment achieved through unified documentation." }
        ],
        impactDetails: {
            heading: "Benefits Realized",
            footer: "Scalable Solution: Adapts seamlessly to evolving project needs and growing teams without performance degradation."
        },

        // SECTION 6: CONCLUSION
        conclusion: {
            text: "The future of design lies in intelligent collaboration—where AI handles complexity and humans drive vision.",
            callout: "Designers reclaim time for creativity, user research, and strategic thinking instead of data wrangling."
        },

        category: "AI UX",
        visuals: {
            colorTheme: "#3b82f6", // Blue
            heroMeshParams: "from-blue-900/40 via-background to-background",
            gallery: []
        }
    },
    {
        id: "hp-printer-ux",
        slug: "hp-printer-ux",
        title: "HP Printer Control Panel",
        subtitle: "Reimagining the Enterprise Printing Experience",
        role: "Lead UX Designer",
        heroImage: "/images/hp-hero-panel.jpg",
        tags: ["Enterprise UX", "Accessibility", "Hardware Interface"],

        // SECTION 1: THE CHALLENGE
        challenge: "Legacy interface created barriers.",
        challengeDetails: {
            heading: "Friction in the Legacy Interface",
            mainText: "The legacy control panel created significant barriers for users, leading to low task completion rates and poor adoption of advanced features.",
            painPoints: [
                "Poor discoverability: Advanced features hidden in deep menus (<15% discovery).",
                "Inconsistent navigation: Users abandon tasks when menus exceed 3 levels.",
                "Accessibility barriers: 46% of users over 55 struggled with small touch targets.",
                "Low efficiency: Average time-on-task was a sluggish 78 seconds."
            ],
            goals: [
                "Streamline core workflows.",
                "Increase feature adoption by 40%.",
                "Elevate HP's premium positioning."
            ]
        },

        // SECTION 2: RESEARCH & INSIGHTS
        research: {
            heading: "Data-Driven Discovery",
            methodology: "Usability testing with 45 users, contextual inquiry in 12 global offices, and competitive benchmarking.",
            findings: [
                { icon: "Layers", title: "Navigation Depth", desc: "Users abandon tasks when menus exceed 3 levels deep. Flat architecture is critical." },
                { icon: "Eye", title: "Visual Clarity", desc: "46% of older users struggle with low contrast text and small targets." },
                { icon: "Search", title: "Feature Blindness", desc: "Advanced features hidden in settings saw <15% discovery rates." }
            ]
        },

        // SECTION 3: COMPETITORS
        competitors: [
            { name: "Canon", ui: "Good responsiveness, dated visuals", nav: "4-5 levels deep", access: "Limited options" },
            { name: "Epson", ui: "Modern design, slow performance", nav: "3-4 levels deep", access: "Voice only" },
            { name: "HP (New)", ui: "Fluid, Premium Aesthetic", nav: "1-2 levels (Flat)", access: "WCAG AA Full Suite" }
        ],

        statComparison: {
            before: "78s",
            after: "40s",
            label: "Time on Task"
        },

        // SECTION 4: SOLUTION
        solution: "A transformative interface that adapts to the user.",
        solutionDetails: {
            heading: "The Intelligent Control Panel",
            description: "A transformative interface that adapts to the user, combining simplified navigation with AI-driven assistance.",
            modules: [
                {
                    title: "Simplified Dashboard",
                    desc: "Customizable home screen with large icons, reducing navigation depth to 1-2 taps for all core tasks.",
                    image: "/images/hp1.jpg"
                },
                {
                    title: "Contextual Smart Prompts",
                    desc: "AI-driven suggestions appear precisely when needed (e.g., 'Toner low, order now?'), clearing clutter.",
                    image: "/images/hp4.jpg"
                },
                {
                    title: "Adaptive Accessibility",
                    desc: "Dynamically adjusts touch targets (44px+) and contrast ratios based on user preferences.",
                    image: "/images/hp3.jpg"
                },
                {
                    title: "Workflow Shortcuts",
                    desc: "Users can save complex sequences (e.g., 'Scan to Email John') as one-tap homepage buttons.",
                    image: "/images/hp2.jpg"
                }
            ]
        },

        // SECTION 5: ACCESSIBILITY
        accessibility: {
            heading: "Designed for Everyone",
            features: [
                "WCAG AA Compliance (4.5:1 Contrast)",
                "Adaptive Text Scaling (up to 200%)",
                "Voice Guidance & Audio Cues",
                "High Contrast Mode (One-tap activation)"
            ]
        },

        features: ["Adaptive Touch Interface", "Contextual Smart Prompts", "Personalized Shortcuts"],

        // SECTION 6: IMPACT
        impact: [
            { metric: "88%", label: "Task Success", desc: "Surpassed 85% target (up from 62%).", value: "88%" },
            { metric: "40s", label: "Time on Task", desc: "Reduced by 48.7% (Beat 45s target).", value: "40s" },
            { metric: "$3M+", label: "Cost Savings", desc: "Driven by 25% reduction in support tickets.", value: "$3M+" },
            { metric: "4.5/5", label: "User Satisfaction", desc: "Significant jump from 3.1 baseline.", value: "4.5/5" }
        ],
        impactDetails: {
            heading: "Business & User Impact",
            footer: "Significantly improved user satisfaction and efficiency."
        },

        category: "Enterprise",
        visuals: {
            colorTheme: "#f97316", // Orange
            heroMeshParams: "from-orange-900/40 via-background to-background",
            gallery: [
                { title: "Dashboard", desc: "Main interface", image: "/images/hp1.jpg" },
                { title: "Smart Prompts", desc: "Contextual help", image: "/images/hp4.jpg" },
                { title: "Accessibility", desc: "High contrast mode", image: "/images/hp3.jpg" },
                { title: "Shortcuts", desc: "One-tap actions", image: "/images/hp2.jpg" },
                { title: "Scan Settings", desc: "Advanced options", image: "/images/hp5.jpg" },
                { title: "User Profile", desc: "Personal settings", image: "/images/hp6.jpg" },
                { title: "Maintenance", desc: "Status reports", image: "/images/hp7.jpg" }
            ]
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
