import { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import { TestimonialColumnContainer } from "./testimonial-column-container";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Client Testimonials</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
        What clients say about working with PhysicalTV Studios
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  designation?: string;
}

const testimonials = [
  {
    name: "Sarah Chen",
    quote:
      "Working with PhysicalTV Studios transformed how we approach content strategy. They didn't just deliver a campaign - they built us a framework that continues to drive results.",
    designation: "CMO, Wellness Brand",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "Frederick's understanding of media architecture is unmatched. He helped us see the connections between our content, audience, and business goals in ways we never imagined.",
    designation: "Founder, Fitness App",
  },
  {
    name: "Dr. Emily Watson",
    quote:
      "The strategic frameworks developed by PhysicalTV Studios have been instrumental in scaling our medical storytelling initiative. They bridge the gap between clinical expertise and cultural relevance.",
    designation: "Director of Communications, Healthcare Network",
  },
  {
    name: "James Park",
    quote:
      "Rare to find someone who understands both the creative and commercial sides of media. Frederick's work helped us generate over 50M views and meaningful revenue growth.",
    designation: "Creative Director, Media Company",
  },
  {
    name: "Alexandra Moore",
    quote:
      "PhysicalTV Studios brought clarity to our chaotic content ecosystem. Their strategic approach helped us prioritize what matters and build sustainable momentum.",
    designation: "VP Marketing, Consumer Brand",
  },
  {
    name: "David Kim",
    quote:
      "The consultation sessions were eye-opening. Frederick has this unique ability to diagnose what's working, what's not, and exactly how to fix it. Worth every penny.",
    designation: "CEO, Digital Health Startup",
  },
  {
    name: "Rachel Thompson",
    quote:
      "They don't just think about content - they think about systems. That shift in perspective has been transformational for our entire marketing organization.",
    designation: "Head of Content, Lifestyle Brand",
  },
  {
    name: "Michael Santos",
    quote:
      "Working with PhysicalTV Studios felt like having a strategic partner who truly understood our vision. They helped us articulate our story in ways that resonated deeply with our audience.",
    designation: "Founder, Wellness Platform",
  },
  {
    name: "Lisa Nguyen",
    quote:
      "Frederick's frameworks for understanding audience attention and engagement have become core to how we operate. The ROI has been remarkable.",
    designation: "Director of Strategy, Media Agency",
  },
];

function Testimonial({
  name,
  quote,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
            {name}
          </h3>
          <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
            {designation}
          </p>
        </div>
        <p className="text-base text-muted dark:text-muted-dark">
          {quote}
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            designation={testimonial.designation}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  let columns = splitArray(testimonials, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);
  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
