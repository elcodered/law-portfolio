export type ProjectStatus =
    | 'concept'
    | 'planning'
    | 'development'
    | 'prototype'
    | 'beta testing'
    | 'UAT preparation'
    | 'deployed'
    | 'completed';
export type Project = {
    slug: string;
    name: string;
    short: string;
    domain: string;
    category: string[];
    description: string;
    stack: string[];
    status: ProjectStatus;
    statusConfirmed: boolean;
    public: boolean;
    featured?: boolean;
    visual: 'roadwatch' | 'workflow' | 'map' | 'data' | 'ai';
    role: string;
    challenge: string;
    solution?: string;
    capabilities: string[];
    verification: string;
    stages: string[];
    stagesConfirmed?: boolean;
};
