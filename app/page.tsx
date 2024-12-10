"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
    </div>
  );
}
