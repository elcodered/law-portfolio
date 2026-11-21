import type { Project } from '@/types/portfolio';

export const profile = {
    name: 'John Lawrence Cambalon',
    location: 'Butuan City, Philippines',
    email: '',
    github: '',
    linkedin: '',
    resume: '',
    updated: 'November 2026',
};

export const filters = [
    'All',
    'Government Systems',
    'Web Applications',
    'Mobile Applications',
    'AI & Automation',
    'Data Engineering',
    'GIS',
    'Infrastructure / Fleet Technology',
];

const base = {
    public: true,
    statusConfirmed: false,
    role: 'Contribution details pending confirmation.',
    challenge:
        'Translate operational requirements into a clear, maintainable digital workflow.',
    verification:
        'Project status, implementation scope, and individual contribution require confirmation before external publication.',
    stages: ['Requirements', 'System design', 'Implementation', 'Validation'],
} satisfies Partial<Project>;

export const projects: Project[] = [
    {
        ...base,
        slug: 'butuan-roadwatch',
        solution:
            'An Android citation workflow with offline capability, signature capture, thermal printing, and QR-linked copies, connected with a centralized administrative interface. Beta testing informs the next UAT and training steps.',
        name: 'Butuan RoadWatch',
        short: 'BRMS',
        domain: 'TRAFFIC ENFORCEMENT',
        category: [
            'Government Systems',
            'Mobile Applications',
            'Web Applications',
        ],
        description:
            'Connecting field enforcement and administrative oversight. A mobile-to-web ecosystem for a more systematic approach to traffic management.',
        stack: ['Kotlin', 'Jetpack Compose', 'Web administration'],
        status: 'UAT preparation',
        statusConfirmed: true,
        featured: true,
        visual: 'roadwatch',
        role: 'Development and coordinated user testing; exact ownership scope to be confirmed.',
        challenge:
            'Move citation workflows beyond fragmented paper records while supporting the realities of field enforcement.',
        capabilities: [
            'Offline-capable mobile citation workflows',
            'Signature capture and Bluetooth thermal printing',
            'QR-linked ticket copies',
            'Centralized citation search, records and payment monitoring',
        ],
        verification:
            'Coordinated beta testing involved RTCD encoders, TMD traffic enforcers and a DMS administrator. UAT, training and production steps are being prepared as of November 2026. Not a confirmed production launch.',
        stagesConfirmed: true,
        stages: [
            'Field citation',
            'Record synchronization',
            'Administrative review',
            'Payment monitoring',
        ],
    },
    {
        ...base,
        slug: 'etraces',
        challenge:
            'Make cooperative registration and franchise applications easier to follow while retaining an administrator review workflow.',
        solution:
            'Organize Phase 1 around account verification, requirements upload, application submission, review, and status tracking. Keep special permits, MTOP, and e-complaints in the planned roadmap.',
        name: 'eTRACES',
        short: 'eTRACES',
        domain: 'GOVERNMENT E-SERVICES',
        category: ['Government Systems', 'Web Applications'],
        description:
            'A clearer path from application to approval. Cooperative-centric transportation services, designed around the people who use them.',
        stack: ['Laravel', 'React', 'MySQL'],
        status: 'development',
        featured: true,
        visual: 'workflow',
        capabilities: [
            'Phase 1: registration and account verification',
            'Franchise applications and requirements upload',
            'Application status tracking and administrator review',
            'Planned: special permits, MTOP and e-complaints',
        ],
        stagesConfirmed: true,
        stages: [
            'Register',
            'Submit requirements',
            'Administrator review',
            'Track status',
        ],
    },
    {
        ...base,
        slug: 'bnbtc-fleet-tracking',
        challenge:
            'Connect GPS device reports with useful fleet visibility while accounting for the reporting intervals of the actual equipment.',
        solution:
            'Use a Traccar-based monitoring approach with SinoTrack devices and a Linux VPS. Treat dispatch intervals and headway analytics as proposed enhancements until their implementation is verified.',
        name: 'BNBTC Fleet Tracking',
        short: 'BNBTC',
        domain: 'FLEET TECHNOLOGY',
        category: ['Infrastructure / Fleet Technology', 'Web Applications'],
        description:
            'Making fleet movements visible. GPS-based vehicle monitoring with a foundation for better-informed transport operations.',
        stack: ['SinoTrack', 'Traccar', 'Linux VPS'],
        status: 'development',
        featured: true,
        visual: 'map',
        capabilities: [
            'GPS vehicle monitoring initiative',
            'Route monitoring and operational visibility',
            'Proposed: dispatch frequency and interval analysis',
            'Proposed: commuter-oriented headway analytics',
        ],
        verification:
            'Exact dependencies, implemented capabilities and current status need confirmation. Illustrations use synthetic coordinates; no real telemetry or one-second reporting claim.',
    },
    {
        ...base,
        slug: 'leave-tracking',
        challenge:
            'Bring leave applications, supporting documents, and department-head review into a consistent online workflow.',
        solution:
            'The supplied scope connects a React and Vite interface with a Laravel API and PostgreSQL. The current implementation and lifecycle status still require confirmation.',
        name: 'Leave Tracking Management System',
        short: 'LTMS',
        domain: 'HR DIGITALIZATION',
        category: ['Government Systems', 'Web Applications'],
        description:
            'Online leave applications, supporting documents, department-head monitoring and status tracking.',
        stack: ['React', 'Vite', 'Laravel API', 'PostgreSQL'],
        status: 'development',
        visual: 'workflow',
        capabilities: [
            'Leave application workflow',
            'Supporting document uploads',
            'Department-head monitoring',
            'Status tracking',
        ],
    },
    {
        ...base,
        slug: 'traffic-data-modernization',
        challenge:
            'Normalize multi-year spreadsheet records without losing traceability to the original source or confusing source volume with completed processing.',
        solution:
            'Model violators, citations, violations, vehicles, payments, officers, and sources as related entities. Validation, duplicate detection, imports, search, and audit logging remain scope until implementation is verified.',
        name: 'Traffic Violations Database Modernization',
        short: 'Traffic data',
        domain: 'DATA ENGINEERING',
        category: ['Government Systems', 'Data Engineering'],
        description:
            'A normalization initiative for approximately 158,782 source rows from multi-year traffic records spanning 2021–2026.',
        stack: ['Relational modeling', 'Laravel', 'React'],
        status: 'planning',
        visual: 'data',
        capabilities: [
            'Scope: bulk import and validation',
            'Scope: duplicate detection, search and filters',
            'Scope: audit logging',
            'Entities: violators, citations, violations, vehicles, payments, officers and sources',
        ],
        verification:
            '158,782 describes source data volume, not completed processed records. Implementation of the listed requirements must be verified.',
    },
    {
        ...base,
        slug: 'centralized-queuing',
        name: 'Centralized Queuing System',
        short: 'Queuing',
        domain: 'PUBLIC SERVICE OPERATIONS',
        category: ['Government Systems', 'Web Applications'],
        description:
            'A public-service queuing initiative for frontliner workflows at the Sports Complex facility.',
        stack: ['Workflow design', 'Web interfaces'],
        status: 'development',
        visual: 'workflow',
        capabilities: [
            'Scope: ticket issuance',
            'Scope: queue monitor',
            'Scope: operator dashboard and waiting status',
        ],
    },
    {
        ...base,
        slug: 'e-inspection',
        name: 'E-Inspection Reservation System',
        short: 'E-Inspection',
        domain: 'INSPECTION SCHEDULING',
        category: ['Government Systems', 'Web Applications'],
        description:
            'Planning and architecture for secure online transportation inspection reservations.',
        stack: ['System architecture', 'API security', 'RBAC'],
        status: 'planning',
        statusConfirmed: true,
        visual: 'workflow',
        capabilities: [
            'Planned: bookings and validation',
            'Planned: role-based access',
            'Planned: rate limiting and API security',
            'Planned: operational deployment architecture',
        ],
    },
    ...[
        [
            'certify',
            'CERTiFY',
            'QR-based verification and authenticity workflows.',
            'QR verification',
        ],
        [
            'talino-ai',
            'TALINO.AI',
            'Retrieval-augmented generation and LLM-assisted knowledge workflows.',
            'RAG',
        ],
        [
            'mdtr',
            'MDTR',
            'DOST Caraga project. Detailed description awaits confirmation.',
            'DOST work',
        ],
        [
            'tarasense',
            'TARAsense',
            'DOST Caraga project. Features and specific ownership await confirmation.',
            'DOST work',
        ],
        [
            'cares',
            'CARES',
            'DOST Caraga project. Detailed functionality awaits confirmation.',
            'DOST work',
        ],
        [
            'rrms',
            'RRMS',
            'DOST Caraga project. Detailed functionality awaits confirmation.',
            'DOST work',
        ],
        [
            'nccair',
            'NCCAIR',
            'DOST Caraga project. Detailed functionality awaits confirmation.',
            'DOST work',
        ],
        [
            'ulat-ai',
            'ULAT.AI',
            'AI-related DOST Caraga project. Scope and contribution await confirmation.',
            'AI',
        ],
    ].map(([slug, name, description, technology]): Project => ({
        ...base,
        slug,
        name,
        short: name,
        domain: 'DOST CARAGA · CONTRIBUTED WORK',
        category:
            technology === 'RAG' || technology === 'AI'
                ? ['Government Systems', 'AI & Automation']
                : ['Government Systems', 'Web Applications'],
        description,
        stack: [technology],
        status: 'development',
        visual: technology === 'RAG' || technology === 'AI' ? 'ai' : 'data',
        capabilities: [
            'Specific deliverables and individual contribution pending verification',
        ],
        role: 'Contributed during DOST Caraga engagement; not a claim of sole authorship.',
    })),
    {
        ...base,
        slug: 'gis-route-digitization',
        challenge:
            'Turn color-coded raster routes into geographic data while making georeferencing and accuracy limitations explicit.',
        solution:
            'Combine OpenCV extraction, manual QGIS georeferencing, WGS84 coordinates, and GeoJSON or TopoJSON conversion for web-map overlays. The demonstration uses synthetic routes.',
        name: 'GIS Transport Route Digitization',
        short: 'Route digitization',
        domain: 'GEOSPATIAL WORKFLOWS',
        category: ['GIS', 'Data Engineering'],
        description:
            'From color-coded raster road maps to vector geographic data and usable web-map overlays.',
        stack: ['OpenCV', 'QGIS', 'GeoJSON', 'WGS84', 'React'],
        status: 'prototype',
        visual: 'map',
        capabilities: [
            'Image-based route extraction',
            'Manual georeferencing in QGIS',
            'GeoJSON / TopoJSON conversion',
            'Web-map overlay workflow',
        ],
        verification:
            'Interactive illustration uses sample data only. It is not evidence of finalized geospatial accuracy.',
    },
    {
        ...base,
        slug: 'records-routing',
        name: 'Government Records & Document Routing',
        short: 'Records routing',
        domain: 'OPERATIONAL DIGITALIZATION',
        category: ['Government Systems', 'Data Engineering'],
        description:
            'Process design and configuration for document receipt, metadata, scanning, custody and status monitoring.',
        stack: ['SharePoint', 'Process design', 'Records management'],
        status: 'development',
        visual: 'data',
        role: 'Process digitalization and system configuration; not necessarily custom software development.',
        capabilities: [
            'Document receipt and metadata',
            'Scanning and routing processes',
            'Custody and status monitoring',
        ],
    },
    {
        ...base,
        slug: 'vrems',
        name: 'VREMS',
        short: 'VREMS',
        domain: 'VEHICLE & EQUIPMENT MANAGEMENT',
        category: ['Government Systems', 'Web Applications'],
        description:
            'A concept for coordinating vehicle reservations, trip requests and equipment availability.',
        stack: ['System design', 'Workflow planning'],
        status: 'concept',
        statusConfirmed: true,
        visual: 'workflow',
        capabilities: [
            'Planned: trip requests and availability',
            'Planned: passenger capacity and scheduling',
            'Planned: consolidation and approvals',
        ],
    },
    {
        ...base,
        slug: 'skypro',
        name: 'SkyPro Solutions Inc. Website',
        short: 'SkyPro',
        domain: 'CORPORATE WEB DESIGN',
        category: ['Web Applications', 'Infrastructure / Fleet Technology'],
        description:
            'A premium landing-page concept for corporate identity and fleet management services.',
        stack: ['Web design', 'React'],
        status: 'concept',
        statusConfirmed: true,
        visual: 'map',
        capabilities: [
            'Concept: corporate landing page',
            'Concept: fleet-services presentation',
        ],
        verification: 'Design concept; no public launch is claimed.',
    },
];

export const experiences = [
    {
        period: 'AUG 2026 — PRESENT',
        organization: 'City Government of Butuan',
        title: 'Senior Transportation Regulation Officer II',
        unit: 'CTTMD · Planning and Data Management Division · Data Management Section',
        description:
            'Bringing software, data and operational thinking to transportation services. Supporting development, planning, digital records and practical process improvement.',
    },
    {
        period: 'FEB 2025 — JUL 2026',
        organization: 'DOST Caraga',
        title: 'Project Technical Assistant I (MIS)',
        unit: 'Science, technology & public service',
        description:
            'Contributed to web systems and AI-enabled solutions, with work across technical infrastructure, servers, databases, documentation and deployment support.',
    },
];
export const skills = [
    {
        name: 'Frontend',
        items: [
            'React',
            'TypeScript',
            'JavaScript',
            'HTML & CSS',
            'Tailwind CSS',
            'Vite',
        ],
    },
    {
        name: 'Backend',
        items: [
            'PHP',
            'Laravel',
            'REST API design',
            'Authentication',
            'RBAC',
            'API integration',
        ],
    },
    {
        name: 'Mobile',
        items: [
            'Kotlin',
            'Jetpack Compose',
            'Android',
            'Offline-first workflows',
        ],
    },
    {
        name: 'Data & GIS',
        items: [
            'PostgreSQL',
            'MySQL',
            'SQLite',
            'Normalization',
            'QGIS',
            'OpenCV',
            'GeoJSON',
            'WGS84',
        ],
    },
    {
        name: 'Infrastructure & AI',
        items: [
            'Linux / Ubuntu',
            'Nginx',
            'VPS deployment',
            'Git',
            'Tailscale',
            'Cloudflare Zero Trust',
            'Ollama',
            'RAG architecture',
        ],
    },
    {
        name: 'Beyond the stack',
        items: [
            'Systems analysis',
            'Process automation',
            'Documentation',
            'UAT',
            'Digital literacy',
            'Cross-functional collaboration',
        ],
    },
];
export const highlights = [
    {
        value: '158,782',
        label: 'Source rows. A clearer data future.',
        detail: 'Traffic records identified for modernization, 2021–2026. Source volume, not processed records.',
    },
    {
        value: '02',
        label: 'Training batches. Human impact.',
        detail: 'Traffic-enforcer digital literacy training conducted in August 2026.',
    },
    {
        value: '03',
        label: 'Capabilities. One connected system.',
        detail: 'BRMS: mobile citations, administrative oversight, and centralized records / payment monitoring.',
    },
    {
        value: '04',
        label: 'Disciplines. A systems perspective.',
        detail: 'Software engineering, data systems, infrastructure, and operational digitalization.',
    },
];
