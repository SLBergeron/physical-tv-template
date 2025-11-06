"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FlippingText = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 1000;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && visibleCharacters < currentWord.length) {
      timeout = setTimeout(() => {
        setVisibleCharacters((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && visibleCharacters === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && visibleCharacters > 0) {
      timeout = setTimeout(() => {
        setVisibleCharacters((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && visibleCharacters === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    currentWordIndex,
    isDeleting,
    visibleCharacters,
    words.length,
  ]);

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="tracking-tighter">
        {currentWord
          .substring(0, visibleCharacters)
          .split("")
          .map((char, index) => (
            <motion.span
              key={`${index}-${char}`}
              initial={{
                opacity: 0,
                rotateY: 90,
                y: 10,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                rotateY: -90,
                y: -10,
                filter: "blur(10px)",
              }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
      </span>
      <motion.span
        layout
        className="absolute -right-4 bottom-2 inline-block rounded-full bg-black"
        style={{
          width: isDeleting ? "0.45em" : "0.25em",
          height: "0.25em",
        }}
        animate={{
          backgroundColor: isDeleting
            ? "#ef4444"
            : [
                "#60a5fa",
                "#22c55e",
                "#3b82f6",
              ],
        }}
        transition={{
          duration: 0.1,
        }}
      />
    </span>
  );
};

export function FrederickIntro() {
  const words = [
    "Strategy",
    "Story",
    "Systems",
    "Culture",
    "Growth",
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
      <div>
        <h2 className="mb-4 text-left text-2xl font-bold md:text-5xl">
          Led by Frederick Light,
          <br />
          expert in <FlippingText words={words} />
        </h2>
        <p className="mt-4 text-left text-base text-neutral-600 dark:text-neutral-400">
          A creative director and entrepreneur with two decades in digital
          growth and media architecture. Frederick has built frameworks where
          story, strategy, and commerce align.
        </p>

        <div className="mt-8 space-y-4">
          {[
            {
              title: "Track Record",
              description:
                "Billions of views, millions in ad spend, tens of millions in product revenue",
            },
            {
              title: "Creator Economy",
              description:
                "Two decades building communities that bridged health, wellness, and pop culture",
            },
            {
              title: "Media Architecture",
              description:
                "Exploring how ideas move through people and platforms, from attention to impact",
            },
          ].map((item, index) => (
            <div key={index} className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full bg-neutral-100 shadow-2xl dark:bg-neutral-800">
          <Image
            src="/Image-Profile-Frederick.jpeg"
            alt="Frederick Light"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Frederick Light
          </h3>
          <p className="mt-1 text-base text-neutral-500 dark:text-neutral-400">
            20 years experience
          </p>
        </div>
      </div>
    </div>
  );
}
