"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-[85vh] md:min-h-screen pt-20 md:pt-40 pb-4 md:pb-0 relative overflow-hidden">
      {/* Badge removed for cleaner minimalist aesthetic */}
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>PhysicalTV Studios</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          A creative media studio focused on how ideas take shape, move through culture, and create impact.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button
          as={Link}
          href="#contact"
          className="flex space-x-2 items-center group"
        >
          <span>Contact Us</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <div className="p-6 md:p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-12 md:mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <div className="relative w-full overflow-hidden rounded-[20px]" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/rv2myzVp3hU?autoplay=1&mute=1&controls=0&loop=1&playlist=rv2myzVp3hU"
              title="Client Example - BodyRock TV"
              allow="autoplay; encrypted-media"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Example of client work:{" "}
          <a
            href="https://www.youtube.com/@BodyRockTv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
          >
            BodyRock TV
          </a>
        </p>
      </div>
    </div>
  );
};
