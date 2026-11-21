import { Link } from '@inertiajs/react';
import {
    Braces,
    Check,
    Code2,
    Database,
    FileCheck2,
    Github,
    GraduationCap,
    Layers3,
    Linkedin,
    Mail,
    MapPin,
    Music2,
    Search,
    Server,
    ShieldCheck,
    Users,
    X,
} from 'lucide-react';
import { useState } from 'react';
import {
    PageMeta,
    PortfolioLayout,
    Reveal,
    SectionHeading,
    Tags,
} from '@/components/portfolio/shared';
import {
    ProjectVisual,
    SystemVisual,
} from '@/components/portfolio/project-visual';
import {
    experiences,
    filters,
    highlights,
    profile,
    projects,
    skills,
} from '@/data/portfolio';

const principles = [
    {
        icon: Users,
        title: 'Start with the people.',
        description:
            'Understand the actual workflow, the constraints, and the people who will rely on the system.',
    },
    {
        icon: Layers3,
        title: 'Design the whole system.',
        description:
            'Connect interfaces, data, infrastructure, and operations. Make the pieces work well together.',
    },
    {
        icon: ShieldCheck,
        title: 'Build for the everyday.',
        description:
            'Prioritize clarity, maintainability, secure access, and practical behavior in real environments.',
    },
];

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    const [query, setQuery] = useState('');
    const [skill, setSkill] = useState('Frontend');
    const visibleProjects = projects.filter(
        (project) =>
            project.public &&
            (filter === 'All' || project.category.includes(filter)) &&
            `${project.name} ${project.description} ${project.stack.join(' ')}`
                .toLowerCase()
                .includes(query.toLowerCase()),
    );
    const currentSkill =
        skills.find((category) => category.name === skill) ?? skills[0];
    return (
        <PortfolioLayout>
            <PageMeta
                title="Full-stack developer & systems thinker"
                description="John Lawrence Cambalon — full-stack developer, IT professional, and government digital transformation practitioner in Butuan City, Philippines."
            />
            <section id="home" className="hero container">
                <div className="hero-copy">
                    <Reveal>
                        <p className="hero-kicker">
                            <span /> SOFTWARE. SYSTEMS. PUBLIC SERVICE.
                        </p>
                        <p className="hero-greeting">Hi, I’m John Lawrence.</p>
                        <h1>
                            I build digital
                            <br />
                            systems that
                            <br />
                            <span>make a difference.</span>
                        </h1>
                        <p className="hero-description">
                            A full-stack developer and IT professional turning
                            complex workflows into practical software, connected
                            information, and better public services.
                        </p>
                        <div className="hero-actions">
                            <a
                                className="button button-primary"
                                href="#projects"
                            >
                                Explore my work
                            </a>
                            <a className="button button-quiet" href="#contact">
                                Let’s connect
                            </a>
                        </div>
                        <div className="hero-location">
                            <MapPin size={15} />
                            <span>{profile.location}</span>
                            <span className="location-divider" />
                            <span>Built with purpose.</span>
                        </div>
                    </Reveal>
                </div>
                <SystemVisual />
                <div className="hero-bottom">
                    <span>ENGINEERING WITH INTENTION</span>
                    <span className="scroll-hint">
                        <span /> Scroll to explore
                    </span>
                    <span>DEVELOPMENT · DATA · DIGITAL TRANSFORMATION</span>
                </div>
            </section>
            <div className="discipline-strip">
                <div className="container">
                    <span>
                        <Code2 size={18} /> Full-stack development
                    </span>
                    <span>
                        <Database size={18} /> Data & GIS
                    </span>
                    <span>
                        <Server size={18} /> Systems architecture
                    </span>
                    <span>
                        <Users size={18} /> Digital public service
                    </span>
                </div>
            </div>
            <section id="about" className="section container">
                <Reveal>
                    <SectionHeading
                        eyebrow="A LITTLE CONTEXT"
                        title="Technology is the tool. People are the purpose."
                    />
                </Reveal>
                <div className="about-grid">
                    <Reveal className="about-copy">
                        <p className="lead">
                            I’m John Lawrence Cambalon, a developer who cares
                            about what happens after the code ships.
                        </p>
                        <p>
                            A Cum Laude BSIT graduate of Caraga State
                            University, I work across web and mobile
                            applications, data systems, infrastructure, and
                            government digital transformation.
                        </p>
                        <p>
                            My experience at DOST Caraga and the City Government
                            of Butuan’s CTTMD has shaped a practical approach:
                            understand the operation, connect the right pieces,
                            and build something people can use with confidence.
                        </p>
                        <a className="text-link" href="#experience">
                            Get to know my journey
                        </a>
                    </Reveal>
                    <Reveal className="about-note">
                        <span className="note-symbol">
                            <Braces size={34} />
                        </span>
                        <p>From a field citation to a connected data system.</p>
                        <span>
                            Different disciplines.
                            <br />
                            One consistent focus: meaningful, usable outcomes.
                        </span>
                        <div className="note-bottom">
                            SOFTWARE ENGINEER <span>×</span> SYSTEMS THINKER
                        </div>
                    </Reveal>
                </div>
                <div className="metrics-grid">
                    {highlights.map((highlight) => (
                        <Reveal key={highlight.value} className="metric">
                            <strong>{highlight.value}</strong>
                            <h3>{highlight.label}</h3>
                            <p>{highlight.detail}</p>
                        </Reveal>
                    ))}
                </div>
            </section>
            <section id="projects" className="section projects-section">
                <div className="container">
                    <Reveal>
                        <SectionHeading
                            eyebrow="SELECTED WORK"
                            title="Complex challenges. Thoughtful systems."
                        >
                            <p>
                                A closer look at the work connecting technology
                                with real operational needs.
                            </p>
                        </SectionHeading>
                    </Reveal>
                    <div className="featured-grid">
                        {projects
                            .filter(
                                (project) => project.public && project.featured,
                            )
                            .map((project, index) => (
                                <Reveal
                                    key={project.slug}
                                    className={`featured-card ${index === 0 ? 'featured-main' : ''}`}
                                >
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="project-image-link"
                                        aria-label={`View ${project.name} case study`}
                                    >
                                        <ProjectVisual project={project} />
                                    </Link>
                                    <div className="featured-content">
                                        <div className="project-overline">
                                            <span>{project.domain}</span>
                                            <span className="status">
                                                <span />
                                                {project.statusConfirmed
                                                    ? project.status
                                                    : 'Details to verify'}
                                            </span>
                                        </div>
                                        <h3>
                                            <Link
                                                href={`/projects/${project.slug}`}
                                            >
                                                {project.name}
                                            </Link>
                                        </h3>
                                        <p>{project.description}</p>
                                        <div className="project-card-bottom">
                                            <Tags items={project.stack} />
                                            <Link
                                                className="text-link"
                                                href={`/projects/${project.slug}`}
                                            >
                                                View case study
                                            </Link>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                    </div>
                    <div className="explorer">
                        <div className="explorer-heading">
                            <div>
                                <p className="eyebrow">THE WIDER PICTURE</p>
                                <h3>Explore the project index.</h3>
                            </div>
                            <label className="search-box">
                                <Search size={17} />
                                <span className="sr-only">Search projects</span>
                                <input
                                    type="search"
                                    placeholder="Search projects or technologies…"
                                    value={query}
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div
                            className="filter-list"
                            role="group"
                            aria-label="Filter projects by discipline"
                        >
                            {filters.map((item) => (
                                <button
                                    key={item}
                                    aria-pressed={filter === item}
                                    onClick={() => setFilter(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="project-index" aria-live="polite">
                            <p className="results-count">
                                {visibleProjects.length} projects · Includes
                                contributed work and concepts
                            </p>
                            {visibleProjects.map((project) => (
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="index-row"
                                    key={project.slug}
                                >
                                    <div
                                        className={`index-icon index-icon-${project.visual}`}
                                    >
                                        {project.visual === 'map' ? (
                                            <MapPin size={21} />
                                        ) : project.visual === 'data' ? (
                                            <Database size={21} />
                                        ) : (
                                            <Code2 size={21} />
                                        )}
                                    </div>
                                    <div className="index-project">
                                        <h4>{project.name}</h4>
                                        <span>{project.domain}</span>
                                    </div>
                                    <span className="index-tech">
                                        {project.stack.slice(0, 3).join(' / ')}
                                    </span>
                                    <span className="index-status">
                                        {project.statusConfirmed
                                            ? project.status
                                            : 'Verification pending'}
                                    </span>
                                    <span className="index-view">
                                        View details
                                    </span>
                                </Link>
                            ))}
                            {visibleProjects.length === 0 && (
                                <div className="empty-state">
                                    <Search size={26} />
                                    <h4>No projects found.</h4>
                                    <p>
                                        Try another technology or choose a
                                        different category.
                                    </p>
                                    <button
                                        className="button"
                                        onClick={() => {
                                            setFilter('All');
                                            setQuery('');
                                        }}
                                    >
                                        <X size={15} /> Clear filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className="section container">
                <Reveal>
                    <SectionHeading
                        eyebrow="THE JOURNEY SO FAR"
                        title="Grounded in real-world work."
                    >
                        <p>
                            Working where software engineering meets the
                            responsibilities of public service.
                        </p>
                    </SectionHeading>
                </Reveal>
                <div className="timeline">
                    {experiences.map((experience) => (
                        <Reveal
                            className="timeline-item"
                            key={experience.organization}
                        >
                            <div className="timeline-period">
                                <span className="timeline-dot" />
                                {experience.period}
                            </div>
                            <div className="timeline-content">
                                <p className="organization">
                                    {experience.organization}
                                </p>
                                <h3>{experience.title}</h3>
                                <p className="timeline-unit">
                                    {experience.unit}
                                </p>
                                <p>{experience.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <div className="contributions">
                    <div>
                        <p className="eyebrow">BEYOND THE DELIVERABLES</p>
                        <h3>Progress is a team effort.</h3>
                        <p>
                            Practical technical work includes helping people
                            adopt it.
                        </p>
                    </div>
                    <ul>
                        <li>
                            <Check size={17} /> Digital literacy training for
                            traffic enforcers, August 2026
                        </li>
                        <li>
                            <Check size={17} /> Transport Master Plan workshops
                            and information systems planning
                        </li>
                        <li>
                            <Check size={17} /> User testing coordination,
                            documentation, and digital records
                        </li>
                        <li>
                            <Check size={17} /> Inter-office collaboration with
                            field and administrative personnel
                        </li>
                    </ul>
                </div>
            </section>
            <section id="skills" className="section skills-section">
                <div className="container">
                    <Reveal>
                        <SectionHeading
                            eyebrow="THE TOOLKIT"
                            title="Many tools. A connected perspective."
                        >
                            <p>
                                The right technology is the one that serves the
                                problem and the people behind it.
                            </p>
                        </SectionHeading>
                    </Reveal>
                    <div className="skills-panel">
                        <div
                            className="skill-categories"
                            role="group"
                            aria-label="Technology categories"
                        >
                            {skills.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setSkill(category.name)}
                                    aria-pressed={skill === category.name}
                                >
                                    {category.name}
                                    <span>
                                        {category.items.length
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="skill-detail" aria-live="polite">
                            <Code2 size={30} />
                            <h3>{currentSkill.name}</h3>
                            <Tags items={currentSkill.items} />
                            <p>
                                A practical toolkit, applied to the requirements
                                of each system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section approach-section container">
                <Reveal>
                    <SectionHeading
                        eyebrow="HOW I WORK"
                        title="Good engineering starts before the code."
                    />
                </Reveal>
                <div className="principles-grid">
                    {principles.map(({ icon: Icon, title, description }) => (
                        <Reveal key={title}>
                            <Icon size={25} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Reveal>
                    ))}
                </div>
                <div className="personal-grid">
                    <Reveal className="education-card">
                        <p className="eyebrow">FOUNDATIONS</p>
                        <GraduationCap size={27} />
                        <h3>
                            Bachelor of Science in
                            <br />
                            Information Technology
                        </h3>
                        <p>Caraga State University</p>
                        <span className="honor">Cum Laude</span>
                        <div className="certification">
                            <FileCheck2 size={20} />
                            <span>Computer Systems Servicing NC II</span>
                        </div>
                    </Reveal>
                    <Reveal className="beyond-card">
                        <p className="eyebrow">BEYOND THE CODE</p>
                        <Music2 size={27} />
                        <h3>
                            Different instruments.
                            <br />
                            The same curiosity.
                        </h3>
                        <p>
                            Violin, cello, double bass, and guitar. I enjoy the
                            patterns, patience, and collaboration that connect
                            music with engineering.
                        </p>
                        <div className="music-lines" aria-hidden="true">
                            {[
                                25, 45, 70, 40, 90, 58, 100, 72, 42, 83, 55, 32,
                                66, 90, 48, 76, 40, 58, 30, 46, 80, 50, 25,
                            ].map((height, i) => (
                                <i key={i} style={{ height: `${height}%` }} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>
            <section id="contact" className="contact-section container">
                <Reveal>
                    <p className="eyebrow">LET’S MAKE SOMETHING MATTER</p>
                    <h2>
                        Have a challenge
                        <br />
                        worth <span>solving?</span>
                    </h2>
                    <p>Let’s build something meaningful.</p>
                    <div className="contact-actions">
                        {profile.email ? (
                            <a
                                className="button button-primary"
                                href={`mailto:${profile.email}`}
                            >
                                <Mail size={17} /> Get in touch
                            </a>
                        ) : (
                            <p className="contact-note">
                                <Mail size={18} /> Contact details are being
                                updated. Please check back soon.
                            </p>
                        )}
                        {profile.github && (
                            <a
                                className="button"
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={17} /> GitHub
                            </a>
                        )}
                        {profile.linkedin && (
                            <a
                                className="button"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={17} /> LinkedIn
                            </a>
                        )}
                        {profile.resume && (
                            <a
                                className="button"
                                href={profile.resume}
                                download
                            >
                                Download résumé
                            </a>
                        )}
                    </div>
                    <div className="contact-location">
                        <MapPin size={14} /> {profile.location}
                    </div>
                </Reveal>
            </section>
        </PortfolioLayout>
    );
}
