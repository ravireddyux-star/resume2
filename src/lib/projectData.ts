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
    processFlowImage?: string; // For the "How It Works" diagram
    processFlowText?: string; // Intro text for the process flow
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
    heroImage: "/images/app1.jpg",
    tags: ["Mobile App", "Real-Time Sync", "WYSIWYG"],
    prototypeLink: "https://twine-dark-88416982.figma.site",

    // SECTION 1: THE CHALLENGE
    challenge: "Printing was often a source of frustration, marked by inefficiencies and a lack of control.",
    challengeImage: "/images/app2.jpg",
    challengeDetails: {
        heading: "The 'Blind Print' Anxiety",
        mainText: "Before the HP Smart App, printing was often a source of frustration, marked by inefficiencies and a lack of control. Users couldn't visualize documents before printing, leading to unexpected layouts and errors.",
        painPoints: [
            "No Real-time Preview: Users couldn't visualize documents before printing.",
            "Wasted Resources: Misprints resulted in significant waste of paper and ink.",
            "Device Synchronization Issues: Lack of unified status updates caused confusion.",
            "Lost Productivity: Cumbersome workflows hindered efficiency."
        ]
    },

    // SECTION 2: THE SOLUTION
    solution: "An intelligent system enabling real-time synchronization between mobile devices and printers.",
    solutionDetails: {
        heading: "Intelligent Preview Synchronization",
        description: "HP engineered a groundbreaking solution to eliminate printing frustrations by enabling real-time synchronization between mobile devices and printers. This intelligent system bridges the gap between your phone and your printer, delivering a truly seamless experience.",
        modules: [
            {
                title: "Live Document Preview",
                desc: "Visualize exact document layouts, colors, and margins on your mobile device before printing.",
                image: "/images/app3.jpg"
            },
            {
                title: "Instant Device Status",
                desc: "Receive real-time updates on printer status, ink levels, and job progress across all connected devices.",
                image: "/images/app4.jpg"
            },
            {
                title: "On-the-Go Editing",
                desc: "Utilize built-in tools to crop, rotate, resize, and adjust print settings directly from the app.",
                image: "/images/app2.jpg"
            },
            {
                title: "Cloud-Based Sync",
                desc: "Leverage cloud technology for secure, synchronized access to your documents and printer.",
                image: "/images/app1.jpg"
            }
        ]
    },

    // SECTION 3: WORKFLOW (User Experience)
    processFlow: [
        { step: 1, title: "Open App", desc: "Access your printing hub." },
        { step: 2, title: "Select Document", desc: "Choose files from cloud or device." },
        { step: 3, title: "Real-Time Preview", desc: "Visualize your print before executing." },
        { step: 4, title: "Edit & Adjust", desc: "Fine-tune settings on the fly." },
        { step: 5, title: "Confirm & Print", desc: "Seamlessly send to your HP printer." }
    ],

    // SECTION 4: CHALLENGES OVERCOME (Mapped to Research)
    research: {
        heading: "Engineering Excellence",
        methodology: "HP's journey to a seamless printing experience was marked by overcoming significant technical hurdles through innovative engineering and strategic development.",
        findings: [
            { icon: "Zap", title: "Real-Time Latency", desc: "Optimized data protocols to ensure near-instantaneous synchronization." },
            { icon: "Layers", title: "Cross-Platform", desc: "Unified backend API for consistent experience across iOS and Android." },
            { icon: "Lock", title: "Security", desc: "End-to-end encryption and multi-factor authentication." },
            { icon: "Cpu", title: "Firmware", desc: "Custom modular firmware for advanced remote control." },
            { icon: "Wifi", title: "Network Reliability", desc: "Intelligent error handling for challenging network environments." }
        ]
    },

    // SECTION 5: IMPACT
    impact: [
        { value: "40%", label: "Paper Waste", desc: "Significant reduction in misprints and resource consumption.", metric: "40%" },
        { value: "60%", label: "Job Completion", desc: "Faster print job execution, saving valuable time.", metric: "60%" },
        { value: "85%", label: "User Satisfaction", desc: "Notable increase in user happiness due to seamless printing.", metric: "85%" },
        { value: "50%", label: "Support Tickets", desc: "Reduction in technical inquiries related to printing issues.", metric: "50%" }
    ],
    impactDetails: {
        heading: "Transforming the Experience",
        footer: "These outcomes translate directly into improved productivity, reduced operational costs, and a more eco-friendly printing ecosystem."
    },

    // SECTION 6: FUTURE VISION (Mapped to Conclusion)
    conclusion: {
        text: "HP is dedicated to pioneering the future of printing, constantly evolving to meet and anticipate the dynamic needs of users.",
        callout: "Our roadmap includes AI-powered optimization, voice-controlled printing, and augmented reality previews."
    },

    category: "Mobile Experience",
    visuals: {
        colorTheme: "#0096D6", // HP Blue
        heroMeshParams: "from-blue-600/40 via-background to-background",
        gallery: [
            { title: "Smart Home Dashboard", desc: "Main control center for all devices", image: "/images/app1.jpg" },
            { title: "Document Scan & Edit", desc: "Advanced mobile scanning features", image: "/images/app2.jpg" },
            { title: "Live Print Preview", desc: "Real-time WYSIWYG rendering", image: "/images/app3.jpg" },
            { title: "Print Status & Queue", desc: "Job tracking and management", image: "/images/app4.jpg" }
        ]
    },
    features: ["Real-Time Sync", "WYSIWYG", "Smart Alerts", "Cloud Sync", "On-the-Go Editing"]
};

// ------------------------------------------------------------------
// NEW CASE STUDY: AI-POWERED MOBILE PRINTING ASSISTANT
// ------------------------------------------------------------------
export const aiMobilePrinting: Project = {
    id: "ai-mobile-printing",
    slug: "ai-mobile-printing",
    title: "AI-Powered Mobile Printing Assistant",
    subtitle: "Print Smarter, Anywhere — Effortless Mobile-to-Printer AI Integration",
    role: "Product Designer",
    category: "Mobile AI",
    tags: ["AI Integration", "Mobile Printing", "Workflow Automation"],
    heroImage: "/images/aimobile1.jpg",
    prototypeLink: "https://hope-ankle-30121497.figma.site/",

    // SECTION 1: THE CHALLENGE
    challenge: "Traditional printing workflows are plagued by setup complexity and errors.",
    challengeImage: "/images/aimobile2.jpg",
    challengeDetails: {
        heading: "The Printing Pain Points We All Know",
        mainText: "Complex setups, frequent errors, and remote access limitations create significant barriers to productivity.",
        painPoints: [
            "Complex Setup Frustration: Driver installations and network configs waste time.",
            "Frequent Print Errors: Misalignments and jams lead to costly mistakes.",
            "Remote Access Limitations: diverse apps and connections kill convenience."
        ],
        goals: [
            "Eliminate setup friction.",
            "Reduce print errors significantly.",
            "Enable seamless remote printing."
        ]
    },

    // SECTION 2: THE SOLUTION
    solution: "An intelligent AI agent that bridges mobile devices and printers seamlessly.",
    solutionDetails: {
        heading: "Enter the AI-Powered Mobile Printing Assistant",
        description: "Our AI agent creates a seamless connection, eliminating compatibility barriers and optimizing every print job.",
        modules: [
            {
                title: "Intelligent Bridge Technology",
                desc: "Seamless connection between mobile and printer, eliminating compatibility issues.",
                image: "/images/aimobile3.jpg"
            },
            {
                title: "Zero-Hassle Setup",
                desc: "No drivers, no config—instant connection that works every time.",
                image: "/images/aimobile4.jpg"
            },
            {
                title: "Smart Output Optimization",
                desc: "AI adjusts layouts and removes waste for optimal quality automatically.",
                image: "/images/aimobile5.jpg"
            },
            {
                title: "Always-On Availability",
                desc: "24/7 operation handles jobs whenever inspiration strikes.",
                image: "/images/aimobile6.jpg"
            }
        ]
    },

    // SECTION 3: HOW IT WORKS (Pinwheel)
    processFlowText: "The mobile app transmits print jobs through our AI layer to your PC, which manages the connected smart printer. AI analyzes documents, optimizes layouts, and provides real-time updates.",
    processFlowImage: "/images/aimobile7.jpg",
    processFlow: [
        { step: 1, title: "Mobile App Sends Job", desc: "User initiates print from any location." },
        { step: 2, title: "AI Optimizes Document", desc: "Layouts cleaned and resources saved." },
        { step: 3, title: "PC Manages Printer", desc: "Secure local handling of the print queue." },
        { step: 4, title: "Smart Printer Prints", desc: "High-quality output with zero errors." }
    ],

    // SECTION 4: AI INTELLIGENCE (Research/Features)
    research: {
        heading: "AI Features Driving Smarter Printing",
        methodology: "Leveraging machine learning for content analysis and predictive maintenance.",
        findings: [
            { icon: "FileText", title: "Automatic Formatting", desc: "Removes ads, trims pages, and reformats for professional output." },
            { icon: "Layers", title: "Resource Conservation", desc: "Reduces paper waste by up to 40% only printing essential content." },
            { icon: "Brain", title: "Document Editing", desc: "Rewrite, summarize, and adjust fonts directly within the app." },
            { icon: "Zap", title: "Predictive Troubleshooting", desc: "Detects jams and ink issues before they cause downtime." }
        ]
    },

    // SECTION 5: COLLABORATION (Supported Devices)
    collaboration: {
        heading: "Supported Devices & Integration",
        text: "Universal compatibility with 9,000+ printers and seamless cloud integration.",
        points: [
            "Universal Printer Compatibility: HP, Canon, Epson, Brother, Samsung, etc.",
            "Cloud Service Integration: Google Drive, Dropbox, iCloud.",
            "Cross-Platform Mobile Support: iOS and Android native apps.",
            "Enterprise-Grade Security: Encrypted local Wi-Fi connections."
        ],
        image: "/images/aimobile8.jpg"
    },

    // SECTION 6: IMPACT
    impact: [
        { metric: "Fast", label: "Setup Time Saved", desc: "Dramatically faster setup compared to traditional methods." },
        { metric: "40%", label: "Paper Waste Reduced", desc: "AI-driven layout optimization eliminates unnecessary pages." },
        { metric: "94%", label: "Accuracy Rate", desc: "Unprecedented scale and accuracy in print specifications." },
        { metric: "24/7", label: "Availability", desc: "Continuous AI assistance ensures no bottlenecks." }
    ],
    impactDetails: {
        heading: "Real-World Impact: Efficiency & Convenience",
        footer: "Empowering small businesses and remote workers providing freedom to print on-demand without IT support."
    },

    // SECTION 7: CONCLUSION
    conclusion: {
        text: "The future of mobile printing is AI-driven, making printing effortless, sustainable, and accessible everywhere.",
        callout: "Join thousands of professionals who have already transformed their printing experience with intelligent automation that just works."
    },

    visuals: {
        colorTheme: "#ef4444", // Red/Pink from screenshots
        heroMeshParams: "from-red-600/40 via-background to-background",
        gallery: []
    },
    features: ["Intelligent Bridge", "Zero-Hassle Setup", "Smart Output", "Always-On Availability"]
};

export const PROJECTS: Project[] = [
    hpSmartApp,
    aiMobilePrinting,
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
