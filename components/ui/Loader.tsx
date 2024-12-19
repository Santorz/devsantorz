"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: loader ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen z-50 h-screen fixed left-0 top-0 flex justify-center items-center bg-gradient-to-t from-yellow-50 to-red-50"
    >
      <Image src="/spinner.gif" alt="Spinner Gif" width={50} height={50} />
    </motion.div>
  );
}

export default Loader;
