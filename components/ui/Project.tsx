"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Project({
  data,
  index,
}: {
  data: {
    name: string;
    description: string;
    url: string;
    tech: string[];
  };
  index: number;
}) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      onClick={() => {
        setShow((v) => !v);
      }}
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="w-full relative sm:w-full h-max border border-yellow-400 cursor-pointer rounded-lg"
    >
      <Image
        src={data.url}
        alt={`Project Image ${data.name}`}
        width={400}
        height={400}
        className="rounded-lg opacity-70"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute flex top-0 w-full h-full  flex-col items-center dark:bg-zinc-700 transition-colors dark:opacity-95 justify-center gap-y-2 bg-white/95 p-6 rounded-lg"
      >
        <h2 className="text-lg font-bold tracking-wide dark:text-white transition-colors text-gray-500">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 dark:text-gray-100 transition-colors first-letter:pl-2">
          {data.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Project;
