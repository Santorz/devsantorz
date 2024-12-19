"use client";

import {
  RiArrowLeftSFill,
  RiAwardFill,
  RiDownloadLine,
  RiGithubFill,
  RiGroupLine,
  RiProjector2Line,
} from "@remixicon/react";
import { useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function About() {
  const number1 = useMotionValue(0);
  const number2 = useMotionValue(0);
  const number3 = useMotionValue(0);
  const number4 = useMotionValue(0);
  function count1(amount: number) {
    let i: number = 0;
    function updateCount1() {
      let timeout: NodeJS.Timeout | undefined = undefined;
      if (i <= amount) {
        number1.set(i++);
        timeout = setTimeout(updateCount1, 0);
      } else {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
    updateCount1();
    return ["a"];
  }
  function count2(amount: number) {
    let i: number = 0;
    function updateCount2() {
      let timeout: NodeJS.Timeout | undefined = undefined;
      if (i <= amount) {
        number2.set(i++);
        timeout = setTimeout(updateCount2, 0);
      } else {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
    updateCount2();
    return ["a"];
  }
  function count3(amount: number) {
    let i: number = 0;
    function updateCount3() {
      let timeout: NodeJS.Timeout | undefined = undefined;
      if (i <= amount) {
        number3.set(i++);
        timeout = setTimeout(updateCount3, 0);
      } else {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
    updateCount3();
    return ["a"];
  }
  function count4(amount: number) {
    let i: number = 0;
    function updateCount4() {
      let timeout: NodeJS.Timeout | undefined = undefined;
      if (i <= amount) {
        number4.set(i++);
        timeout = setTimeout(updateCount4, 0);
      } else {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
    updateCount4();
    return ["a"];
  }

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        About Me
      </h2>
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src="/about-me.png"
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[300px] lg:block hidden h-auto"
        />
        <div className="bg-zinc-100 relative p-5 text-justify rounded-xl max-w-[800px] dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-7 top-20 scale-[5] text-zinc-100 hidden lg:block dark:text-zinc-700 transition-colors">
            <RiArrowLeftSFill />
          </span>
          <p className="text-xs dark:text-white leading-8 font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            Hi, I'm Nick, a web developer & designer. I blend the technical
            skills of web development with the creative aspects of web design. I
            code in HTML, CSS, JavaScript, React, NextJS... to build functional
            and responsive websites, while also using design tools like
            Photoshop and Figma to create visually appealing and user-friendly
            interfaces. My role allows me to ensure that websites not only work
            well but also look great and provide an excellent user experience.
          </p>
          <a
            href="/nick-cv.pdf"
            download
            className="w-max font-light hover:bg-red-500 transition-colors text-white flex items-center gap-x-2 rounded-full border-gray-300 bg-red-400 px-3 py-2 mt-6"
          >
            <span>Download CV</span>
            <span>
              <RiDownloadLine />
            </span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        <div className="flex items-end gap-x-3">
          <RiGithubFill color="#d1d5db" />
          <div className="flex flex-col gap-y-2">
            <motion.span
              whileInView={count1(348)}
              viewport={{ once: true }}
              className="text-2xl lg:text-xl font-light text-yellow-500"
            >
              {number1}
            </motion.span>
            <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
              GitHub repo
            </span>
          </div>
        </div>
        <div className="flex items-end gap-x-3">
          <RiProjector2Line color="#d1d5db" />
          <div className="flex flex-col gap-y-2">
            <motion.span
              whileInView={count2(227)}
              viewport={{ once: true }}
              className="text-2xl lg:text-xl font-light text-yellow-500"
            >
              {number2}
            </motion.span>
            <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
              Successful Projects
            </span>
          </div>
        </div>
        <div className="flex items-end gap-x-3">
          <RiGroupLine color="#d1d5db" />
          <div className="flex flex-col gap-y-2">
            <motion.span
              whileInView={count3(176)}
              viewport={{ once: true }}
              className="text-2xl lg:text-xl font-light text-yellow-500"
            >
              {number3}
            </motion.span>
            <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
              Satisfied clients
            </span>
          </div>
        </div>
        <div className="flex items-end gap-x-3">
          <RiAwardFill color="#d1d5db" />
          <div className="flex flex-col gap-y-2">
            <motion.span
              whileInView={count4(107)}
              viewport={{ once: true }}
              className="text-2xl lg:text-xl font-light text-yellow-500"
            >
              {number4}
            </motion.span>
            <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
              Awards and Recognition
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
