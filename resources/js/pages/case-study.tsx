import { Link } from '@inertiajs/react';
import { Check, CircleHelp } from 'lucide-react';
import { GeoDemo, ProjectVisual } from '@/components/portfolio/project-visual';
import {
    PageMeta,
    PortfolioLayout,
    Reveal,
    Tags,
} from '@/components/portfolio/shared';
import { projects, profile } from '@/data/portfolio';
import NotFound from '@/pages/not-found';

export default function CaseStudy({ slug }: { slug: string }) {
    const project = projects.find((item) => item.slug === slug && item.public);
    if (!project) return <NotFound />;
    const related = projects
        .filter(
            (item) =>
                item.public &&
                item.slug !== slug &&
                item.category.some((category) =>
                    project.category.includes(category),
                ),
        )
        .slice(0, 2);
    return (
        <PortfolioLayout>
            <PageMeta title={project.name} description={project.description} />
            <article className="case-study container">
                <a className="text-link" href="/#projects">
                    Back to all projects
                </a>
                <header className="case-header">
                    <p className="eyebrow">{project.domain}</p>
                    <h1>{project.name}</h1>
                    <p className="case-lead">{project.description}</p>
                    <Tags items={project.stack} />
                    <div className="case-facts">
                        <div>
                            <span>PROJECT STATUS</span>
                            <strong>
                                {project.statusConfirmed
                                    ? project.status
                                    : 'Pending verification'}
                            </strong>
                        </div>
                        <div>
                            <span>CONTRIBUTION</span>
                            <strong>{project.role}</strong>
                        </div>
                        <div>
                            <span>CONTENT UPDATED</span>
                            <strong>{profile.updated}</strong>
                        </div>
                    </div>
                </header>
                <ProjectVisual project={project} />
                <div className="verification-note">
                    <CircleHelp size={21} />
                    <div>
                        <h2>Project context & verification</h2>
                        <p>{project.verification}</p>
                        {!project.statusConfirmed && (
                            <p>
                                The configured “{project.status}” status is
                                provisional and has not been verified for
                                publication.
                            </p>
                        )}
                    </div>
                </div>
                <div className="case-columns">
                    <Reveal>
                        <p className="eyebrow">THE CHALLENGE</p>
                        <h2>The operational problem.</h2>
                        <p>{project.challenge}</p>
                    </Reveal>
                    <Reveal>
                        <p className="eyebrow">THE APPROACH</p>
                        <h2>A connected workflow.</h2>
                        <p>{project.solution ?? project.description}</p>
                        <p>
                            Capabilities below reflect the supplied brief. Items
                            labeled as scope, planned, or proposed describe
                            intended work rather than confirmed implementation.
                        </p>
                    </Reveal>
                </div>
                <section className="case-capabilities">
                    <p className="eyebrow">CAPABILITIES & SCOPE</p>
                    <h2>What the system brings together.</h2>
                    <ul>
                        {project.capabilities.map((capability) => (
                            <li key={capability}>
                                <Check size={18} />
                                {capability}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="case-workflow">
                    <p className="eyebrow">
                        {project.stagesConfirmed
                            ? 'SYSTEM WORKFLOW'
                            : 'ILLUSTRATIVE WORKFLOW'}
                    </p>
                    <h2>
                        {project.stagesConfirmed
                            ? 'From input to outcome.'
                            : 'A framework for the work.'}
                    </h2>
                    <ol>
                        {project.stages.map((stage) => (
                            <li key={stage}>
                                <span />
                                <h3>{stage}</h3>
                            </li>
                        ))}
                    </ol>
                    {!project.stagesConfirmed && (
                        <p className="muted">
                            Conceptual process illustration; project-specific
                            architecture awaits verification.
                        </p>
                    )}
                </section>
                {slug === 'gis-route-digitization' && <GeoDemo />}
                <section className="case-gallery">
                    <h2>Project gallery</h2>
                    <p>
                        Real screenshots will be added after review. The
                        interface above is an illustrative concept, not evidence
                        of a deployed product.
                    </p>
                    <div className="gallery-placeholder">
                        <span>SCREENSHOT SPACE</span>
                        <p>Reserved for verified project media.</p>
                    </div>
                </section>
                <section className="related-projects">
                    <p className="eyebrow">KEEP EXPLORING</p>
                    <h2>Related work.</h2>
                    {related.map((item) => (
                        <Link href={`/projects/${item.slug}`} key={item.slug}>
                            <h3>{item.name}</h3>
                            <span>{item.domain}</span>
                        </Link>
                    ))}
                </section>
            </article>
        </PortfolioLayout>
    );
}
