import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Logo } from "./Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  const legal = [
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Terms of Service",
      href: "/terms",
    },
  ];
  const socials = [
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "LinkedIn",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
  ];
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; {currentYear} PhysicalTV Studios</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20">
        <Image
          src="/Physical-wordmark-only.svg"
          alt="PhysicalTV Studios"
          width={800}
          height={200}
          className="w-full max-w-4xl h-auto opacity-10 dark:opacity-10 dark:invert"
          priority={false}
        />
      </div>
    </div>
  );
};
