"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { IconCookie } from "@tabler/icons-react";

// Custom hook to detect screen size
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function CookieConsent() {
  const [hasShownConsent, setHasShownConsent] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // Use lg breakpoint (1024px) for desktop

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setHasShownConsent(true);
    toast.dismiss();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setHasShownConsent(true);
    toast.dismiss();
  };

  const ToastContent = (t: string | number) => (
    <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg p-4 w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 text-center lg:text-left items-center lg:items-start">
          <IconCookie className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          <div className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            We use basic analytics
          </div>
          <div className="text-xs lg:text-sm text-neutral-600 dark:text-neutral-400">
            We use Vercel Analytics to understand how visitors use our site. No personal data is sold or shared.{" "}
            <Link
              href="/privacy"
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
              onClick={() => toast.dismiss(t)}
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm font-medium rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      // Show toast after a short delay to ensure page is loaded and screen size is detected
      const timer = setTimeout(() => {
        // Dismiss any existing toasts first to prevent duplicates
        toast.dismiss();

        // Small additional delay to ensure isDesktop is correctly set
        setTimeout(() => {
          if (isDesktop) {
            // Desktop: bottom-right
            toast.custom(ToastContent, {
              duration: Infinity,
              position: "bottom-right",
              className: "!w-auto !max-w-md !mb-4 !mr-4",
              unstyled: true,
            });
          } else {
            // Mobile: bottom-center
            toast.custom(ToastContent, {
              duration: Infinity,
              position: "bottom-center",
              className: "!w-[calc(100%-2rem)] !mb-4",
              unstyled: true,
            });
          }
        }, 100);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isDesktop]); // Add isDesktop to dependency array

  return null;
}
