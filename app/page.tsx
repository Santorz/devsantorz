"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PricingPlans from "@/components/PricingPlans";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Loader from "@/components/ui/Loader";
import Toggle from "@/components/ui/Toggle";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const componentsRef = useRef<HTMLDivElement>(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const intersecting = e.isIntersecting;
          if (intersecting) {
            setId(e.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (typeof componentsRef.current?.children !== "undefined") {
      const componentsArray = Array.from(componentsRef.current?.children);
      componentsArray.forEach((e) => {
        observer.observe(e);
      });
    }
  });

  const addDarkTheme = useCallback(() => {
    if (mainRef.current !== null) {
      mainRef.current.classList.add("dark");
      localStorage.setItem("darkTheme", "1");
      setDarkTheme(true);
    }
  }, []);

  const removeDarkTheme = useCallback(() => {
    if (mainRef.current !== null) {
      mainRef.current.classList.remove("dark");
      localStorage.setItem("darkTheme", "");
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme")!;
    console.log(darkTheme);

    const darkThemeParsed = darkTheme !== undefined && Boolean(darkTheme);

    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === null) {
      if (systemTheme) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else {
      if (darkThemeParsed) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    }
  }, [addDarkTheme, removeDarkTheme]);

  return (
    <main
      ref={mainRef}
      className="font-[family-name:var(--font-geist-sans)] relative"
    >
      <Loader />
      <Toggle
        removeDarkTheme={removeDarkTheme}
        addDarkTheme={addDarkTheme}
        darkTheme={darkTheme}
      >
        <NavBar id={id} />
        <div
          className="w-full pl-[60px] pr-[10px] sm:pl-[130px] sm:pr-[60px]"
          ref={componentsRef}
        >
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </main>
  );
}
