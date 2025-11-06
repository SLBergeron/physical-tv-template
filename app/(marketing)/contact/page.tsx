import { Background } from "@/components/background";
import { Metadata } from "next";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PhysicalTV Studios to discuss your creative intelligence needs. Whether you need strategic consulting, content production, or collaborative partnership in fitness, wellness, or medical storytelling.",
  keywords: [
    "contact PhysicalTV",
    "media production inquiry",
    "brand strategy consultation",
    "creative consulting",
    "fitness media contact",
    "wellness content production"
  ],
  openGraph: {
    title: "Contact PhysicalTV Studios",
    description:
      "Start a conversation about how we can help your brand bridge creativity and commerce through strategic frameworks and media production.",
    url: "https://physical.tv/contact",
    images: [
      {
        url: "/Image-Profile-Frederick.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact PhysicalTV Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PhysicalTV Studios",
    description:
      "Start a conversation about creative intelligence for your media project.",
    images: ["/Image-Profile-Frederick.jpeg"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto">
            <FeaturedTestimonials />
            <p
              className={cn(
                "font-semibold text-xl text-center dark:text-muted-dark text-muted"
              )}
            >
              Every AI is used by thousands of users
            </p>
            <p
              className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-8"
              )}
            >
              With lots of AI applications around, Everything AI stands out with
              its state of the art Shitposting capabilities.
            </p>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}
