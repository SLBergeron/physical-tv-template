"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <Image
        src="/logo-physical-tv-studio.svg"
        alt="PhysicalTV Studios"
        width={120}
        height={28}
        className="dark:invert"
      />
    </Link>
  );
};
