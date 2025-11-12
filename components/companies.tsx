"use client";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const Companies = () => {
  let [logos, setLogos] = useState([
    [
      {
        title: "Amazon Prime Video",
        src: "/logos/primevideo.png",
      },
      {
        title: "Procter & Gamble",
        src: "/logos/P&G.png",
      },
      {
        title: "Degree",
        src: "/logos/Degree.png",
      },
      {
        title: "MyProtein",
        src: "/logos/MyProtein.png",
      },
    ],
    [
      {
        title: "Iccha Fine Jewellery",
        src: "/logos/iccha.png",
      },
      {
        title: "Macy's",
        src: "/logos/Macys.png",
      },
      {
        title: "BodyRock",
        src: "/logos/BodyRock.png",
      },
      {
        title: "A5",
        src: "/logos/A5.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or isAnimating changes
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 pt-4 pb-10 md:py-40">
      <Heading as="h2">Trusted Partners</Heading>
      <Subheading className="text-center ">
        Building frameworks for brands and creators across media, wellness, and culture.
      </Subheading>

      <div className="grid grid-cols-2 gap-10 justify-items-center md:flex md:gap-40 md:justify-center relative h-full w-full mt-20 p-8 md:p-12 rounded-3xl bg-neutral-100 dark:bg-neutral-300/80 shadow-derek dark:shadow-[0_0_50px_rgba(255,255,255,0.3),0_0_100px_rgba(255,255,255,0.15)]">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width="100"
                height="100"
                className="md:h-20 md:w-40 h-10 w-20 object-contain filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
