"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCamera, IconVideo, IconSpeakerphone } from "@tabler/icons-react";

type ServiceType = "photo" | "video" | "advertisement";

interface Metric {
  label: string;
  value: string;
  subtitle: string;
}

const serviceMetrics: Record<ServiceType, Metric[]> = {
  photo: [
    { label: "Photos", value: "50-100", subtitle: "Images" },
    { label: "Turnaround", value: "7-14", subtitle: "Days" },
    { label: "Team Size", value: "3-5", subtitle: "People" },
    { label: "Editing", value: "20-30", subtitle: "Hours" },
  ],
  video: [
    { label: "Duration", value: "2-5", subtitle: "Minutes" },
    { label: "Crew Size", value: "5-8", subtitle: "People" },
    { label: "Shoot Days", value: "2-3", subtitle: "Days" },
    { label: "Post-Prod", value: "15-25", subtitle: "Hours" },
  ],
  advertisement: [
    { label: "Platforms", value: "4-6", subtitle: "Channels" },
    { label: "Duration", value: "30-90", subtitle: "Days" },
    { label: "Variants", value: "8-12", subtitle: "Versions" },
    { label: "Sessions", value: "4-6", subtitle: "Meetings" },
  ],
};

export const SkeletonThree = () => {
  const [selectedService, setSelectedService] = useState<ServiceType>("video");

  const services = [
    { type: "photo" as ServiceType, label: "Photo Shoot", icon: IconCamera },
    { type: "video" as ServiceType, label: "Video Shoot", icon: IconVideo },
    { type: "advertisement" as ServiceType, label: "Advertisement", icon: IconSpeakerphone },
  ];

  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-900 shadow-2xl dark:shadow-white/20 mt-10 rounded-xl overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-neutral-900 dark:via-neutral-900 to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <div className="border-b dark:border-neutral-800 p-6 pb-4">
          <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-1">
            Service Offerings
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Select a service to view capabilities
          </p>
        </div>

        {/* Service Toggle Buttons */}
        <div className="flex flex-col gap-2 p-4 pb-6 border-b dark:border-neutral-800">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = selectedService === service.type;
            return (
              <button
                key={service.type}
                onClick={() => setSelectedService(service.type)}
                className={`
                  w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg
                  transition-all duration-200 text-sm font-medium
                  ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{service.label}</span>
              </button>
            );
          })}
        </div>

        {/* Metrics Display */}
        <div className="p-6 grid grid-cols-2 gap-4 relative z-10">
          <AnimatePresence mode="popLayout">
            {serviceMetrics[selectedService].map((metric, index) => (
              <motion.div
                key={`${selectedService}-${metric.label}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-col items-center justify-center px-3 py-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700"
              >
                {/* Label */}
                <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 text-center">
                  {metric.label}
                </p>

                {/* Value - centered */}
                <motion.div
                  key={`${selectedService}-${metric.value}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  className="text-lg font-bold text-black dark:text-white mb-1"
                >
                  {metric.value}
                </motion.div>

                {/* Subtitle - underneath value */}
                <span className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                  {metric.subtitle}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const Row = ({
  title,
  updatedAt,
  active = false,
}: {
  title: string;
  updatedAt: string;
  active?: boolean;
}) => {
  return null; // Component no longer used but kept for compatibility
};
