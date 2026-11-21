import { PageMeta, PortfolioLayout } from '@/components/portfolio/shared';

export default function NotFound() {
    return (
        <PortfolioLayout>
            <PageMeta
                title="Page not found"
                description="This page could not be found. Explore John Lawrence Cambalon’s portfolio."
            />
            <div className="not-found container">
                <p className="eyebrow">404 · A MISSING CONNECTION</p>
                <h1>A little off the path.</h1>
                <p>
                    The page you’re looking for may have moved, or the link may
                    be incomplete.
                </p>
                <a className="button button-primary" href="/">
                    Back to the portfolio
                </a>
            </div>
        </PortfolioLayout>
    );
}
