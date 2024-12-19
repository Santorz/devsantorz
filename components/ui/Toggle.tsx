"use client";

import { RiMoonFoggyFill, RiSunFoggyFill } from "@remixicon/react";
import { motion } from "framer-motion";

function Toggle({
  children,
  darkTheme,
  removeDarkTheme,
  addDarkTheme,
}: {
  children: React.ReactNode;
  darkTheme: boolean;
  removeDarkTheme: () => void;
  addDarkTheme: () => void;
}) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 w-full">
      <div className="overflow-hidden xl:w-full mx-auto flex justify-center">
        <button
          onClick={() => {
            if (!darkTheme) {
              addDarkTheme();
            } else {
              removeDarkTheme();
            }
          }}
          className="fixed sm:right-10 top-10 right-14 text-yellow-600 hover:text-yellow-500"
        >
          {darkTheme ? (
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              <RiMoonFoggyFill />
            </motion.span>
          ) : (
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
            >
              <RiSunFoggyFill />
            </motion.span>
          )}
        </button>
      </div>
      {children}
    </div>
  );
}

export default Toggle;
