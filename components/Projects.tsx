"use client";

import { animate, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Project from "./ui/Project";

const projectsData = [
  {
    name: "First",
    description: "God",
    url: "/projects/image-1.jpg",
    tech: ["HTML"],
  },
  {
    name: "Second",
    description: "Helper",
    url: "/projects/image-2.jpg",
    tech: ["All", "HTML", "NextJS"],
  },
];

const projectButtons = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
];

function Projects() {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const handleClick = useCallback(() => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  }, [index]);

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  return (
    <div id="projects" className="min-h-screen py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        Projects
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectButtons.map((e, i) => (
          <motion.button
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            key={i}
            ref={(el) => {
              if (el !== null) {
                buttonsRef.current.push(el);
              }
            }}
            onClick={() => {
              setTech(e);
              setIndex(i);
            }}
            className="border text-gray-400 border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wide"
          >
            {e}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((e) => {
            return e.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((e, i) => (
            <motion.div key={i} layout>
              <Project data={e} index={index} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
