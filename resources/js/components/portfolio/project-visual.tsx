import {
    Check,
    CheckCheck,
    FileText,
    LayoutDashboard,
    MapPin,
    Radio,
    Search,
    ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import type { Project } from '@/types/portfolio';

export function SystemVisual() {
    return (
        <div
            className="system-visual"
            role="img"
            aria-label="Abstract system architecture connecting software, data, and people"
        >
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <svg
                className="system-paths"
                viewBox="0 0 560 500"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M80 165H180L280 250L385 150H470M280 250V375H440M280 250L140 355H65"
                    stroke="currentColor"
                    strokeWidth="1"
                />
                <path
                    className="flow-path"
                    d="M80 165H180L280 250L385 150H470M280 250V375H440M280 250L140 355H65"
                    stroke="#a194ff"
                    strokeWidth="2"
                    strokeDasharray="6 100"
                />
            </svg>
            <div className="system-core">
                <div className="core-mark">
                    jc<span>.</span>
                </div>
                <span>BUILT WITH PURPOSE</span>
            </div>
            <div className="system-node node-code">
                <span className="node-icon">&lt;/&gt;</span>
                <div>
                    Software<span>IDEAS INTO SYSTEMS</span>
                </div>
            </div>
            <div className="system-node node-data">
                <span className="node-icon">⌘</span>
                <div>
                    Data<span>CLARITY FROM COMPLEXITY</span>
                </div>
            </div>
            <div className="system-node node-people">
                <ShieldCheck size={22} />
                <div>
                    Public service<span>TECHNOLOGY FOR PEOPLE</span>
                </div>
            </div>
            <span className="visual-coordinate coordinate-top">
                SYSTEMS THINKING / HUMAN IMPACT
            </span>
            <span className="visual-coordinate coordinate-bottom">
                8.9475° N &nbsp; 125.5406° E
            </span>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
        </div>
    );
}

export function ProjectVisual({ project }: { project: Project }) {
    if (project.visual === 'map')
        return (
            <div className="project-visual map-visual">
                <div className="map-grid" />
                <svg viewBox="0 0 600 300" fill="none" aria-hidden="true">
                    <path
                        d="M-20 240L130 190L190 70L310 115L420 20L650 80M40 -10L130 100L320 170L370 310M-10 80L160 140L300 270L630 170M230 -10L230 310M0 210L610 210M440 0L440 310"
                        stroke="#2d4248"
                        strokeWidth="14"
                    />
                    <path
                        d="M-20 240L130 190L190 70L310 115L420 20L650 80M40 -10L130 100L320 170L370 310M-10 80L160 140L300 270L630 170"
                        stroke="#46606a"
                        strokeWidth="1"
                    />
                    <path
                        d="M130 190L190 70L310 115L320 170L440 210"
                        stroke="#68d6bf"
                        strokeWidth="3"
                        strokeDasharray="7 4"
                    />
                    <circle cx="190" cy="70" r="7" fill="#79e1c9" />
                    <circle cx="320" cy="170" r="7" fill="#79e1c9" />
                </svg>
                <div className="map-label">
                    <Radio size={14} /> Route overview <span>DEMO</span>
                </div>
                <div className="map-pin">
                    <MapPin size={17} /> Sample route
                </div>
                <span className="illustration-caption">
                    SYNTHETIC MAP · ILLUSTRATION
                </span>
            </div>
        );
    if (project.visual === 'roadwatch')
        return (
            <div className="project-visual roadwatch-visual">
                <div className="admin-preview">
                    <div className="preview-sidebar">
                        <div className="preview-logo">
                            R<span>W</span>
                        </div>
                        <LayoutDashboard size={14} />
                        <FileText size={14} />
                        <ShieldCheck size={14} />
                    </div>
                    <div className="preview-body">
                        <div className="preview-top">
                            <span>
                                RoadWatch <b>Overview</b>
                            </span>
                            <span className="avatar-mini">JC</span>
                        </div>
                        <p className="preview-title">Enforcement, connected.</p>
                        <div className="preview-stats">
                            <div>
                                <span>Citation records</span>
                                <b>—</b>
                            </div>
                            <div>
                                <span>Payment monitoring</span>
                                <b>—</b>
                            </div>
                            <div>
                                <span>Field operations</span>
                                <b>—</b>
                            </div>
                        </div>
                        <div className="preview-table">
                            <span>
                                Recent citations <Search size={11} />
                            </span>
                            {[
                                'Citation reference',
                                'Violation details',
                                'Record status',
                            ].map((label, i) => (
                                <div key={label}>
                                    <span className="table-mark" />
                                    <span>{label}</span>
                                    <span className={`table-pill pill-${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="phone-preview">
                    <div className="phone-camera" />
                    <div className="phone-header">
                        <ShieldCheck size={16} /> RoadWatch
                    </div>
                    <span className="phone-subtitle">FIELD ENFORCEMENT</span>
                    <b>New citation</b>
                    <div className="phone-field">
                        Violator information
                        <div />
                    </div>
                    <div className="phone-field">
                        Violation details
                        <div />
                    </div>
                    <div className="signature">John D.</div>
                    <div className="phone-submit">
                        <CheckCheck size={12} /> Save citation
                    </div>
                </div>
                <span className="illustration-caption">
                    INTERFACE CONCEPT · NOT A PRODUCT SCREENSHOT
                </span>
            </div>
        );
    if (project.visual === 'data' || project.visual === 'ai')
        return (
            <div className="project-visual data-visual">
                <div className="diagram-card">
                    <span>
                        {project.visual === 'ai'
                            ? 'Knowledge sources'
                            : 'Source records'}
                    </span>
                    <FileText size={25} />
                </div>
                <div className="diagram-line" />
                <div className="diagram-card diagram-center">
                    <span>
                        {project.visual === 'ai'
                            ? 'Retrieval workflow'
                            : 'Structured records'}
                    </span>
                    <div className="data-rows">
                        <i />
                        <i />
                        <i />
                    </div>
                </div>
                <div className="diagram-line" />
                <div className="diagram-card">
                    <span>
                        {project.visual === 'ai'
                            ? 'Contextual answers'
                            : 'Operational insights'}
                    </span>
                    <CheckCheck size={25} />
                </div>
                <span className="illustration-caption">
                    ARCHITECTURAL ILLUSTRATION
                </span>
            </div>
        );
    return (
        <div className="project-visual workflow-visual">
            <div className="workflow-preview">
                <div className="workflow-header">
                    <span className="workflow-brand">
                        {project.short}
                        <span> / SERVICES</span>
                    </span>
                    <span className="avatar-mini">JC</span>
                </div>
                <p>Your next step, made simple.</p>
                <span className="workflow-subtitle">
                    An application journey designed around clarity.
                </span>
                <div className="workflow-steps">
                    {['Account', 'Application', 'Review'].map((step, i) => (
                        <div key={step}>
                            <span className={i < 2 ? 'step-complete' : ''}>
                                {i < 2 ? <Check size={13} /> : '3'}
                            </span>
                            {step}
                        </div>
                    ))}
                </div>
                <div className="workflow-record">
                    <FileText size={19} />
                    <div>
                        Application requirements
                        <span>Documents and verification</span>
                    </div>
                    <span className="review-label">In review</span>
                </div>
            </div>
            <span className="illustration-caption">
                WORKFLOW CONCEPT · NOT A PRODUCT SCREENSHOT
            </span>
        </div>
    );
}

export function GeoDemo() {
    const [amount, setAmount] = useState(50);
    return (
        <div className="geo-demo">
            <h3>From raster to route data</h3>
            <p>
                A conceptual comparison using synthetic routes. This does not
                represent verified geographic accuracy.
            </p>
            <div className="geo-comparison">
                <svg viewBox="0 0 600 220" aria-hidden="true">
                    <defs>
                        <pattern
                            id="geo-grid"
                            width="30"
                            height="30"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M30 0H0V30"
                                stroke="#516168"
                                fill="none"
                                opacity=".25"
                            />
                        </pattern>
                        <clipPath id="geo-reveal">
                            <rect width={(600 * amount) / 100} height="220" />
                        </clipPath>
                    </defs>
                    <rect width="600" height="220" fill="url(#geo-grid)" />
                    <path
                        d="M0 130L90 70L200 110L310 40L410 130L600 80M80 220L200 110L390 200L500 20"
                        fill="none"
                        stroke="#b796c9"
                        strokeWidth="15"
                        opacity=".45"
                    />
                    <g clipPath="url(#geo-reveal)">
                        <path
                            d="M0 130L90 70L200 110L310 40L410 130L600 80M80 220L200 110L390 200L500 20"
                            fill="none"
                            stroke="#74e6c8"
                            strokeWidth="3"
                        />
                        {[
                            [90, 70],
                            [200, 110],
                            [310, 40],
                            [410, 130],
                            [390, 200],
                        ].map(([cx, cy]) => (
                            <circle
                                key={`${cx}-${cy}`}
                                cx={cx}
                                cy={cy}
                                r="5"
                                fill="#74e6c8"
                            />
                        ))}
                    </g>
                </svg>
                <span>Vector overlay</span>
                <span>Raster source</span>
                <div className="geo-divider" style={{ left: `${amount}%` }} />
            </div>
            <label htmlFor="geo-slider">
                Reveal vector overlay · {amount}%
            </label>
            <input
                id="geo-slider"
                type="range"
                min="0"
                max="100"
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
            />
        </div>
    );
}
