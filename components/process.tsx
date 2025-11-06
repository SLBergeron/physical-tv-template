"use client";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import {
  IconEar,
  IconMap,
  IconTool,
} from "@tabler/icons-react";

export const Process = () => {
  const steps = [
    {
      title: "Listen",
      description: "Discovery call to understand your goals, challenges, and market position. We identify where strategic clarity or creative infrastructure can create the most impact.",
      icon: IconEar,
      bgColor: "bg-neutral-100 dark:bg-neutral-800",
    },
    {
      title: "Map",
      description: "Deep analysis of your competitive landscape, audience dynamics, and growth opportunities. We reveal the patterns others miss and identify your strategic advantage.",
      icon: IconMap,
      bgColor: "bg-neutral-200 dark:bg-neutral-700",
    },
    {
      title: "Design",
      description: "We build the systems that bridge intention and execution: positioning frameworks, content architecture, and production infrastructure that scales with purpose.",
      icon: IconTool,
      bgColor: "bg-neutral-100 dark:bg-neutral-800",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40">
      <Heading as="h2">How It Works</Heading>
      <Subheading className="text-center">
        We work deliberately, and only where our presence can create momentum.
      </Subheading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-10 max-w-7xl mx-auto px-4">
        {steps.map((step) => (
          <ProcessCard key={step.title} {...step} />
        ))}
      </div>
    </div>
  );
};

const ProcessCard = ({
  title,
  description,
  icon: Icon,
  bgColor,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}) => {
  return (
    <div className="w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 md:h-[28rem] rounded-md shadow-xl flex flex-col justify-between p-8 border border-neutral-200 dark:border-neutral-700",
          bgColor,
          "hover:shadow-2xl hover:scale-[1.02]",
          "transition-all duration-300"
        )}
      >
        {/* Icon at top */}
        <div className="relative z-10">
          <Icon className="w-12 h-12 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Text at bottom */}
        <div className="text relative z-10">
          <h1 className="font-bold text-xl md:text-3xl text-neutral-900 dark:text-neutral-50 mb-4">
            {title}
          </h1>
          <p className="font-normal text-base text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
