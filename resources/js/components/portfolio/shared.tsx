import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronUp, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { profile } from '@/data/portfolio';
import { useAppearance } from '@/hooks/use-appearance';

const navigation = [
    'Home',
    'About',
    'Projects',
    'Experience',
    'Skills',
    'Contact',
];

export function Reveal({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    const reduced = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -30px 0px' }}
            transition={{ duration: 0.55 }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    children,
}: {
    eyebrow: string;
    title: string;
    children?: ReactNode;
}) {
    return (
        <div className="section-heading">
            <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
            </div>
            {children && <div className="section-intro">{children}</div>}
        </div>
    );
}

export function Tags({ items }: { items: string[] }) {
    return (
        <div className="tags">
            {items.map((item) => (
                <span key={item}>{item}</span>
            ))}
        </div>
    );
}

export function PageMeta({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    const { url, props } = usePage();
    const canonical = `${props.siteUrl}${url.split(/[?#]/)[0]}`;
    return (
        <Head title={title}>
            <link rel="canonical" href={canonical} head-key="canonical" />
            <meta property="og:url" content={canonical} head-key="og:url" />
            <meta
                name="description"
                content={description}
                head-key="description"
            />
            <meta
                property="og:title"
                content={`${title} · ${profile.name}`}
                head-key="og:title"
            />
            <meta
                property="og:description"
                content={description}
                head-key="og:description"
            />
        </Head>
    );
}

export function PortfolioLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const { resolvedAppearance, updateAppearance } = useAppearance();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-15% 0px -65% 0px' },
        );
        document
            .querySelectorAll('main section[id]')
            .forEach((section) => observer.observe(section));
        const onScroll = () => setScrolled(window.scrollY > 600);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    useEffect(() => {
        if (!open) return;
        document
            .querySelector<HTMLAnchorElement>('#main-navigation a')
            ?.focus();
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                document.getElementById('menu-toggle')?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);
    return (
        <div className="portfolio-shell">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="site-header">
                <div className="header-inner">
                    <Link
                        className="brand"
                        href="/"
                        aria-label={`${profile.name}, home`}
                    >
                        <span className="monogram">
                            jc<span>.</span>
                        </span>
                        <span className="brand-name">
                            John Lawrence<span>CAMBALON</span>
                        </span>
                    </Link>
                    <nav
                        aria-label="Main navigation"
                        id="main-navigation"
                        className={open ? 'navigation is-open' : 'navigation'}
                    >
                        {navigation.map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                aria-current={
                                    active === item.toLowerCase()
                                        ? 'location'
                                        : undefined
                                }
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="header-actions">
                        <button
                            className="icon-button"
                            aria-label={`Switch to ${resolvedAppearance === 'dark' ? 'light' : 'dark'} theme`}
                            onClick={() =>
                                updateAppearance(
                                    resolvedAppearance === 'dark'
                                        ? 'light'
                                        : 'dark',
                                )
                            }
                        >
                            {resolvedAppearance === 'dark' ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>
                        <a
                            href="/#contact"
                            className="button button-small header-contact"
                        >
                            Let’s connect
                        </a>
                        <button
                            className="icon-button menu-toggle"
                            id="menu-toggle"
                            aria-label={
                                open ? 'Close navigation' : 'Open navigation'
                            }
                            aria-expanded={open}
                            aria-controls="main-navigation"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={21} /> : <Menu size={21} />}
                        </button>
                    </div>
                </div>
            </header>
            <main id="main">{children}</main>
            <footer className="site-footer container">
                <Link className="footer-brand" href="/">
                    jc<span>.</span>
                </Link>
                <p>Thoughtfully engineered in Butuan City, Philippines.</p>
                <span>© {new Date().getFullYear()} John Lawrence Cambalon</span>
            </footer>
            {scrolled && (
                <a
                    href="#main"
                    className="back-top icon-button"
                    aria-label="Back to top"
                >
                    <ChevronUp size={20} />
                </a>
            )}
        </div>
    );
}
