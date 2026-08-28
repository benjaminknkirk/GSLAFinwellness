import { Mark } from "./mark";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream-warm px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-3">
          <Mark className="h-10 w-10 text-navy" />
          <div>
            <p className="font-display text-lg font-semibold text-navy">
              GSLA Financial Wellness Initiative
            </p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-ink-muted">
              A Summer 2026 project of Global Shapers Los Angeles, part of the
              World Economic Forum Global Shapers Community.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-muted sm:text-right">
          <a
            className="hover:text-navy"
            href="https://www.globalshapers.la"
            target="_blank"
            rel="noopener noreferrer"
          >
            globalshapers.la
          </a>
          <a
            className="hover:text-navy"
            href="https://www.instagram.com/globalshapersla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GlobalShapersLA
          </a>
          <a className="hover:text-navy" href="mailto:hello@globalshapers.la">
            hello@globalshapers.la
          </a>
        </div>
      </div>
    </footer>
  );
}
