import { FadeIn } from "./fade-in";

const pillars = [
  {
    number: "01",
    title: "Workshops that feel like a kitchen table",
    body: "Evening and weekend sessions on budgeting, credit, medical bills, and first-time saving. Small rooms. Plain language. Time to ask the question you have been carrying.",
  },
  {
    number: "02",
    title: "Community programming, in the neighborhood",
    body: "Pop-up clinics in libraries, rec centers, and partner spaces—not downtown hotel ballrooms. Materials in English and Spanish. Childcare when we can staff it.",
  },
  {
    number: "03",
    title: "Peer coaching from people who live here",
    body: "Office hours with young professionals from the hub: a resume of real jobs, not a lecture. One hour can untangle a collections letter or a first credit card.",
  },
];

export function WhatWeDo() {
  return (
    <section id="work" className="bg-forest px-5 py-24 text-cream sm:px-8 sm:py-32">
      <div className="mx-auto max-w-page">
        <FadeIn>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            What we&apos;re doing
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-display-lg font-semibold text-balance">
            Practical money skills, taught like a neighbor—not a bank.
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-cream/78 text-pretty">
            The GSLA Financial Wellness Initiative is the Summer 2026 cohort
            project of Global Shapers Los Angeles. We are not printing another
            pamphlet. We are showing up with sessions people can use the same
            week.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.number} delay={0.08 * index}>
              <article className="h-full bg-forest p-7 sm:p-8">
                <p className="font-display text-sm tracking-[0.2em] text-gold-bright">
                  {pillar.number}
                </p>
                <h3 className="mt-5 font-display text-display-md font-medium text-cream text-balance">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-cream/74">
                  {pillar.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-12 rounded-3xl bg-navy-deep/40 p-7 sm:p-10">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
            Built on work that already moved numbers
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/80 text-pretty">
            This hub already partnered with Undue Medical Debt, VScale, and FaZe
            Mansion to erase{" "}
            <span className="font-semibold text-cream">$174,530</span> in medical
            debt for Los Angeles families. Financial wellness is the next
            chapter: not only wiping a balance, but giving people the skills to
            stay steadier afterward.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
