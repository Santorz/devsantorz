"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [{ name: "NextJS", image: "/skills/nextjs.png" }];

function Skills() {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
      <h2 className="text-xl dark:text-white transition-colors sm:text-2xl font-bold text-gray-600 mb-14 self-start">
        Skills
      </h2>
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skills.map((e, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
          >
            <Image
              src={e.image}
              alt={e.name}
              width={100}
              height={100}
              className="h-auto w-10"
            />
            <p className="text-sm text-gray-600">{e.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
