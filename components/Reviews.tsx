"use client";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
  RiStarHalfLine,
  RiStarLine,
} from "@remixicon/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const review = [
  {
    name: "Peter",
    description: "Hi dear",
    image: "/reviews/client-1.png",
    rating: "4.5",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    name: "James",
    description: "Hi dear",
    image: "/reviews/client-2.png",
    rating: "4.0",
    stars: [1, 1, 1, 1, 0],
  },
];

function Reviews() {
  const [direction, setDirection] = useState(false);
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const slides = useRef<HTMLDivElement[]>([]);

  const leftClickHandler = useCallback(() => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], {
      x: "100%",
    });
  }, [index, prevIndex]);

  const rightClickHandler = useCallback(() => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  }, [index, prevIndex]);

  useEffect(() => {
    if (direction) {
      leftClickHandler();
    } else {
      rightClickHandler();
    }
    prevIndex.current = index;
  }, [index, direction, leftClickHandler, rightClickHandler]);

  return (
    <div id="reviews" className="min-h-screen my-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        Reviews
      </h2>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full relative overflow-hidden flex items-center justify-center lg:w-[800px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px]"
        >
          {review.map((e, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              ref={(e) => slides.current.push(e!)}
              className="absolute border dark:bg-zinc-700 transition-colors border-yellow-500 rounded-xl bg-zinc-50 p-14 lg:p-5 inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4"
            >
              <Image
                src={e.image}
                alt={`Reviews Image ${i + 1}`}
                height={130}
                width={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <p className="text-2xl md:text-xl text-center tracking-wide text-yellow-600">
                {e.name}
              </p>
              <p className="text-lg dark:text-white transition-colors md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
                {e.description}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <p className="text-lg font-light text-yellow-600 mr-3">
                  {e.rating}
                </p>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {e.stars.map((e, i) => {
                    if (e === 1) {
                      return <RiStarFill key={i} />;
                    } else if (e === 0) {
                      return <RiStarLine key={i} />;
                    } else {
                      return <RiStarHalfLine key={i} />;
                    }
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
            disabled={index === 0}
          >
            <RiArrowLeftSLine />
          </button>
          <button
            className={`${
              index === review.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
            disabled={index === review.length - 1}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
