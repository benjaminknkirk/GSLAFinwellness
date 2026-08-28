import { About } from "@/components/about";
import { Donate } from "@/components/donate";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Nav } from "@/components/nav";
import { Problem } from "@/components/problem";
import { WhatWeDo } from "@/components/what-we-do";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <WhatWeDo />
        <Impact />
        <Donate />
        <About />
      </main>
      <Footer />
    </>
  );
}
