import { FadeIn } from "./fade-in";

const gifts = [
  {
    amount: "$25",
    title: "A workshop kit",
    body: "Printed guides, a simple budget sheet, and a transit-friendly snack so showing up is not another cost.",
  },
  {
    amount: "$75",
    title: "One coaching hour",
    body: "A private session for a household sorting a bill, a credit report, or a first savings plan.",
  },
  {
    amount: "$150",
    title: "A neighborhood workshop",
    body: "Room, facilitator, bilingual materials, and outreach for a two-hour session in one community space.",
  },
  {
    amount: "$400",
    title: "A bilingual clinic",
    body: "A Saturday clinic with two coaches, Spanish and English tables, and follow-up resources people can keep.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="bg-cream-warm px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-page">
        <FadeIn>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
            How a gift lands
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-display-lg font-semibold text-navy text-balance">
            Your dollar buys a seat, an hour, a room—not a gala table.
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-ink-muted text-pretty">
            We are raising{" "}
            <span className="font-semibold text-navy">$25,000</span> this summer
            to reach about 500 Angelenos with workshops and coaching. Every
            amount below is a real unit of the work.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {gifts.map((gift, index) => (
            <FadeIn key={gift.amount} delay={0.06 * index}>
              <article className="flex h-full flex-col rounded-3xl bg-cream p-7 shadow-card sm:p-8">
                <p className="font-display text-4xl font-semibold tracking-tight text-gold-muted">
                  {gift.amount}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium text-navy">
                  {gift.title}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-muted">
                  {gift.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
