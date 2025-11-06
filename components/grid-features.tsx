import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconCompass,
  IconVideo,
  IconUsersGroup,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Work That Thinks",
      description:
        "We help you see the system around your ideas - how story meets market, how meaning scales.",
      icon: <IconBrain />,
    },
    {
      title: "Consult",
      description:
        "Strategic advisory on positioning, market landscape, and brand architecture.",
      icon: <IconCompass />,
    },
    {
      title: "Create",
      description:
        "Studio engagements for podcasts, content systems, and creative production.",
      icon: <IconVideo />,
    },
    {
      title: "Collaborate",
      description: "Partnership in developing new ventures and product launches.",
      icon: <IconUsersGroup />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        index === 0 && "lg:border-l dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-700 dark:text-neutral-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
