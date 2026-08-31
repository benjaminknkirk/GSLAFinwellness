import { FadeIn } from "./fade-in";
import { Logo } from "./logo";

export function About() {
  return (
    <section id="about" className="bg-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-12">
        <FadeIn className="lg:col-span-5">
          <Logo className="mb-6 h-20 w-20 shadow-card" />
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
            The hub
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-navy text-balance">
            Young leaders, local problems, a global bench.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink-muted text-pretty">
            Global Shapers Los Angeles is a city hub of the{" "}
            <span className="font-semibold text-ink">
              Global Shapers Community
            </span>
            , a network of people under 30 born out of the World Economic Forum.
            There are more than 10,000 members across 450 hubs. We work here:
            housing, health, debt, and now the money skills that sit underneath
            all three.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted text-pretty">
            We commit to learning from the people who live the problem, designing
            work that can be repeated, and staying with each other when the
            project gets hard. This campaign is one of those projects.
          </p>
          <a
            href="https://www.globalshapers.la"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-forest"
          >
            Visit globalshapers.la
            <span aria-hidden>→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
