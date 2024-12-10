"use client";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
  RiStarHalfLine,
} from "@remixicon/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

function Reviews() {
  const [direction, setDirection] = useState(false);
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const slides = useRef<HTMLDivElement[]>([]);

  function leftClickHandler() {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], {
      x: "100%",
    });
  }

  function rightClickHandler() {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  }

  useEffect(() => {
    if (direction) {
      leftClickHandler();
    } else {
      rightClickHandler();
    }
    prevIndex.current = index;
  }, [index, direction]);

  return (
    <div className="px-20 sm:px-40 min-h-screen my-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-14 self-start">
        Reviews
      </h2>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-[800px] relative overflow-hidden flex items-center justify-center lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px]"
        >
          <motion.div
            initial={{ x: "100%" }}
            ref={(e) => slides.current.push(e!)}
            className="absolute border border-yellow-500 rounded-xl bg-zinc-50 p-14 lg:p-5 inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4"
          >
            <Image
              src="/reviews/client-1.png"
              alt="Reviews Image 1"
              height={130}
              width={130}
              className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            />
            <p className="text-2xl md:text-xl text-center tracking-wide text-yellow-600">
              Bob W., Lifestyle Lover
            </p>
            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
              Your work on our website has been phenomenal. The design is
              visually stunning and incredibly user-friendly. We've received
              countless compliments from our customers, and our sales have
              noticeably increased. Thank you for capturing our brand's essence
              so perfectly!
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg font-light text-yellow-600 mr-3">4.5</p>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfLine />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            ref={(e) => slides.current.push(e!)}
            className="absolute border border-yellow-500 rounded-xl bg-zinc-50 p-14 lg:p-5 inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4"
          >
            <Image
              src="/reviews/client-1.png"
              alt="Reviews Image 1"
              height={130}
              width={130}
              className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            />
            <p className="text-2xl md:text-xl text-center tracking-wide text-yellow-600">
              Bob W., Lifestyle Lover
            </p>
            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
              Your work on our website has been phenomenal. The design is
              visually stunning and incredibly user-friendly. We've received
              countless compliments from our customers, and our sales have
              noticeably increased. Thank you for capturing our brand's essence
              so perfectly!
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg font-light text-yellow-600 mr-3">4.5</p>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfLine />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            ref={(e) => slides.current.push(e!)}
            className="absolute border border-yellow-500 rounded-xl bg-zinc-50 p-14 lg:p-5 inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4"
          >
            <Image
              src="/reviews/client-1.png"
              alt="Reviews Image 1"
              height={130}
              width={130}
              className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            />
            <p className="text-2xl md:text-xl text-center tracking-wide text-yellow-600">
              Bob W., Lifestyle Lover
            </p>
            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
              Your work on our website has been phenomenal. The design is
              visually stunning and incredibly user-friendly. We've received
              countless compliments from our customers, and our sales have
              noticeably increased. Thank you for capturing our brand's essence
              so perfectly!
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg font-light text-yellow-600 mr-3">4.5</p>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfLine />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            ref={(e) => slides.current.push(e!)}
            className="absolute border border-yellow-500 rounded-xl bg-zinc-50 p-14 lg:p-5 inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4"
          >
            <Image
              src="/reviews/client-1.png"
              alt="Reviews Image 1"
              height={130}
              width={130}
              className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            />
            <p className="text-2xl md:text-xl text-center tracking-wide text-yellow-600">
              Bob W., Lifestyle Lover
            </p>
            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
              Your work on our website has been phenomenal. The design is
              visually stunning and incredibly user-friendly. We've received
              countless compliments from our customers, and our sales have
              noticeably increased. Thank you for capturing our brand's essence
              so perfectly!
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg font-light text-yellow-600 mr-3">4.5</p>
              <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfLine />
              </div>
            </div>
          </motion.div>
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
              index === 3
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-all`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
            disabled={index === 3}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
