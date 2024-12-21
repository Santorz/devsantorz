"use client";

import {
  RiDribbbleLine,
  RiFacebookCircleLine,
  RiGithubLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "@remixicon/react";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  const rotateY = useTransform(
    xSpring,
    [0, windowOffset.innerWidth],
    [-30, 30]
  );
  const rotateX = useTransform(
    ySpring,
    [0, windowOffset.innerHeight],
    [10, -50]
  );
  const [mouseMove, setMouseMove] = useState(false);

  return (
    <div
      id="home"
      className="h-screen flex flex-col gap-y-3  justify-center items-center"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      onMouseEnter={() => {
        setWindowOffset({
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth,
        });
        setMouseMove(true);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="capitalize flex flex-col gap-y-3  justify-center items-center"
      >
        <motion.div
          style={{
            rotateX: mouseMove ? rotateX : 0,
            rotateY: mouseMove ? rotateY : 0,
            transition: "0.1s",
          }}
        >
          <Image
            src="/person.png"
            alt="Person Image"
            width={400}
            height={400}
            priority={true}
            className="w-[150px] h-auto"
          />
        </motion.div>

        <h1 className="text-xl text-center sm:text-3xl font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
          I&apos;m Saint Tarila Brisbe
        </h1>
        <p className="text-lg text-center text-gray-700 tracking-wide dark:text-gray-200 transition-colors">
          I write code, and i talk about Christ and Tech 🤗
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-6 text-yellow-600 my-4"
      >
        <a
          href="#"
          className="hover:text-white hover:bg-red-500 transition-colors rounded-md"
        >
          <RiFacebookCircleLine />
        </a>
        <a
          href="#"
          className="hover:text-white hover:bg-red-500 transition-colors rounded-md"
        >
          <RiInstagramLine />
        </a>
        <a
          href="#"
          className="hover:text-white hover:bg-red-500 transition-colors rounded-md"
        >
          <RiDribbbleLine />
        </a>
        <a
          href="#"
          className="hover:text-white hover:bg-red-500 transition-colors rounded-md"
        >
          <RiYoutubeLine />
        </a>
        <a
          href="#"
          className="hover:text-white hover:bg-red-500 transition-colors rounded-md"
        >
          <RiGithubLine />
        </a>
      </motion.div>
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="text-white bg-red-400 px-3 py-1 rounded-lg tracking-wide hover:bg-red-500 transition-colors"
      >
        Talk to me
      </motion.a>
    </div>
  );
}

export default Hero;
