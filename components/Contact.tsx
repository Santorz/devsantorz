"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="min-h-screen py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        Contact
      </h2>
      <div className="w-full h-full my-auto flex xl:flex-row flex-col items-center justify-between gap-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/contact.gif"
            alt="Contact Image"
            width={400}
            height={400}
            className="w-[400px] h-auto rounded-md opacity-80"
            unoptimized
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-row flex-col gap-3">
            <input
              type="text"
              className="w-full border border-yellow-500 tracking-wide outline-none rounded-md bg-zinc-100 px-4 py-2 text-sm text-gray-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              name=""
              id=""
              className="w-full border border-yellow-500 tracking-wide outline-none rounded-md bg-zinc-100 px-4 py-2 text-sm text-gray-500"
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="w-full border border-yellow-500 tracking-wide outline-none rounded-md bg-zinc-100 px-4 py-2 text-sm text-gray-500"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            placeholder="Write Me..."
            className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 tracking-wide outline-none rounded-md bg-zinc-100 px-4 py-2 text-sm text-gray-500"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="cursor-pointer font-light w-full border border-yellow-500 tracking-wide outline-none rounded-md bg-yellow-600 px-4 py-2 text-sm text-white hover:bg-yellow-500 transition-colors"
          />
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
