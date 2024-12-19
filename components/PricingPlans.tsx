"use client";

import { RiCheckLine } from "@remixicon/react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: ["A", "B"],
    recommended: "By me",
  },
  {
    title: "Advanced",
    pricing: "$500 - $1,000",
    features: ["A", "B", "c"],
    recommended: "By me",
  },
  {
    title: "Premium",
    pricing: "$500 - $1,000",
    features: ["A", "B", "c", "d"],
    recommended: "By me",
  },
];

function PricingPlans() {
  return (
    <div id="pricing" className="min-h-screen py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        Pricing Plans
      </h2>
      <div className="h-full flex flex-col xl:flex-row items-center justify-evenly gap-8">
        {pricingPlans.map((e, i) => (
          <motion.div
            key={i}
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.4,
              delay: i * 0.2,
              scale: { duration: 0.15 },
            }}
            className={`${
              i === 1
                ? "w-4/5 sm:w-[500px] xl:w-[320px] bg-white"
                : "w-4/5 sm:w-[500px] xl:w-[300px] bg-zinc-50"
            } flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 dark:bg-zinc-700 transition-colors`}
          >
            <p className="text-md sm:text-2xl font-light tracking-wide text-center dark:text-white transition-colors">
              {e.title}
            </p>
            <p className="text-lg sm:text-3xl text-center dark:text-white transition-colors">
              {e.pricing}
            </p>
            <ul className="flex flex-col gap-y-2">
              {e.features.map((e, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <p
                    className={`text-2xl ${
                      i === 1 ? "text-red-300" : "text-yellow-500"
                    }`}
                  >
                    <RiCheckLine />
                  </p>
                  <li className="text-[15px] font-light tracking-wide dark:text-white transition-colors">
                    {e}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-sm font-light text-center dark:text-gray-200 transition-colors">
              <span className="font-semibold">Ideal for: </span>
              {e.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
