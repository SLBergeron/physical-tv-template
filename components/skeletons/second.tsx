"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(1.2),
        duration: 0.8,
      }
    );

    // Keep visible for longer before allowing re-animation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setAnimating(false);
  };
  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-4 w-[90%] mx-auto"
          >
            <UserMessage>
              We need a content strategy for our wellness platform launch.
            </UserMessage>
            <AIMessage>Let&apos;s start with your core narrative. What change do you want to create?</AIMessage>
            <UserMessage>
              We want to make functional medicine accessible to everyday people.
            </UserMessage>
            <AIMessage>That&apos;s positioning. Now, what&apos;s the story that makes people feel it?</AIMessage>
            <UserMessage>How do we build that story across platforms?</UserMessage>
            <AIMessage>Story isn&apos;t just content - it&apos;s continuity across every touchpoint.</AIMessage>
            <AIMessage>
              From your founder&apos;s origin to your community conversations - <br />
              <span className="italic">one narrative, many expressions.</span>
            </AIMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
