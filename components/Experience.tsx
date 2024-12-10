"use client";

import { RiArrowLeftSFill } from "@remixicon/react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function Experience() {
  const date = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div className="relative min-h-screen py-20 sm:px-40 px-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-14 self-start">
        Experience & Education
      </h2>
      <Image
        src="/education.png"
        alt="Experience Image"
        width={400}
        height={400}
        className="absolute xl:block hidden -top-4 right-40 opacity-70"
      />
      <div
        ref={containerRef}
        className="w-full relative top-10 h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
        <div className="w-full z-10 xl:mr-[6.5rem] lg:w-[480px] relative lg:left-0 xl:-left-[240px]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 rotate-180 left-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute hidden top-10 z-10 bg-white -right-20 w-14 border border-gray-300 rounded-full aspect-square xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
        <div className="xl:ml-[6.5rem] z-10 lg:w-[480px] w-full relative xl:left-[240px] lg:left-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 right-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute top-10 z-10 bg-white -left-20 w-14 border border-gray-300 rounded-full aspect-square hidden  xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
        <div className="w-full z-10 xl:mr-[6.5rem] lg:w-[480px] relative lg:left-0 xl:-left-[240px]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 rotate-180 left-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute hidden top-10 z-10 bg-white -right-20 w-14 border border-gray-300 rounded-full aspect-square xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
        <div className="xl:ml-[6.5rem] z-10 lg:w-[480px] w-full relative xl:left-[240px] lg:left-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 right-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute top-10 z-10 bg-white -left-20 w-14 border border-gray-300 rounded-full aspect-square hidden  xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
        <div className="w-full z-10 xl:mr-[6.5rem] lg:w-[480px] relative lg:left-0 xl:-left-[240px]">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 rotate-180 left-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute hidden top-10 z-10 bg-white -right-20 w-14 border border-gray-300 rounded-full aspect-square xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
        <div className="xl:ml-[6.5rem] z-10 lg:w-[480px] w-full relative xl:left-[240px] lg:left-0">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="flex relative flex-col gap-y-3 border-solid border-[1px] rounded-md border-red-300 bg-white p-4 tracking-wide sm:text-sm"
          >
            <p className="text-xl sm:text-lg font-light text-gray-700">
              Foundation & Basics
            </p>
            <p className="text-gray-800">
              <span className="block font-light">Education</span>
              <span className="block pl-2 font-extralight">education</span>
            </p>
            <div className="text-gray-800">
              <p className="font-light">Experience</p>
              <ul className="pl-2">
                <li className="my-1 font-extralight">experience</li>
              </ul>
            </div>
            <p className="absolute hidden xl:block top-14 right-full text-red-300">
              <RiArrowLeftSFill />
            </p>
          </motion.div>
          <div className="absolute top-10 z-10 bg-white -left-20 w-14 border border-gray-300 rounded-full aspect-square hidden  xl:grid justify-center items-center text-red-400 font-light">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
