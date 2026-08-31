import { AnimatedNumber } from "./animated-number";
import { FadeIn } from "./fade-in";

type SupportingStat =
  | {
      label: string;
      source: string;
      value: number;
      suffix: string;
    }
  | {
      label: string;
      source: string;
      display: string;
    };

const supporting: SupportingStat[] = [
  {
    value: 37,
    suffix: "%",
    label: "of U.S. adults would struggle to cover a $400 emergency expense.",
    source: "Federal Reserve, SHED",
  },
  {
    display: "1 in 10",
    label: "Los Angeles adults carry medical debt that follows them home.",
    source: "Undue Medical Debt / LA County",
  },
  {
    value: 37,
    suffix: "%",
    label: "of P-Fin Index questions were answered correctly by Gen Z, on average.",
    source: "TIAA Institute-GFLEC P-Fin Index",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-cream px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-page">
        <FadeIn>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
            The problem
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-display-lg font-semibold text-navy text-balance">
            Most of us were never taught how money works. The score shows it.
          </h2>
        </FadeIn>

        <div className="mt-14 grid items-end gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <p className="font-display text-stat-xl font-semibold text-navy">
              <AnimatedNumber value={48} suffix="%" />
            </p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted text-pretty">
              The average American scores just{" "}
              <span className="font-semibold text-ink">48%</span> on a basic
              financial literacy test. That is not a personal failing. It is a
              gap in access: to language, practice, and a first teacher who
              thought you were worth teaching.
            </p>
            <p className="mt-4 text-sm text-ink-faint">
              Source: Global Financial Literacy Excellence Center
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <blockquote className="border-l-2 border-brand pl-5 font-display text-display-md italic text-brand-deep">
              A late fee, a medical bill, a choice made under pressure: the gap
              shows up in ordinary weeks, not just crises.
            </blockquote>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {supporting.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.08 * index}>
              <article className="h-full rounded-3xl border border-cream-deep bg-cream-warm p-6 shadow-card sm:p-7">
                <p className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                  {"display" in stat ? (
                    stat.display
                  ) : (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-muted">
                  {stat.label}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-faint">
                  {stat.source}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
