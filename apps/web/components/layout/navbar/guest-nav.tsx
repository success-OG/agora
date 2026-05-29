"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BaseNav, type NavItem } from "./base-nav";

const GUEST_NAV_ITEMS: NavItem[] = [
  {
    href: "/discover",
    icon: "/icons/earth.svg",
    text: "Discover Events",
    isActive: (p) => p === "/discover" || p.startsWith("/events"),
  },
  {
    href: "/pricing",
    icon: "/icons/dollar-circle.svg",
    text: "Pricing",
    isActive: (p) => p === "/pricing",
  },
  {
    href: "/stellar",
    icon: "/icons/stellar-xlm-logo 1.svg",
    text: "Stellar Ecosystem",
    isActive: (p) => p === "/stellar",
  },
  {
    href: "/faqs",
    icon: "/icons/help-circle.svg",
    text: "FAQs",
    isActive: (p) => p === "/faqs",
  },
];

const guestCta = (
  <Link href="/auth" title="Sign in to create an event">
    <Button
      backgroundColor="bg-white"
      textColor="text-black"
      shadowColor="rgba(0,0,0,1)"
      aria-label="Create event - sign in required"
    >
      <Image
        src="/icons/lock.svg"
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
      />
      <span>Create Your Event</span>
      <Image
        src="/icons/arrow-up-right-01.svg"
        alt=""
        width={24}
        height={24}
        aria-hidden="true"
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    </Button>
  </Link>
);

export function GuestNav({ pathname }: { pathname: string }) {
  return (
    <BaseNav
      pathname={pathname}
      isAuthenticated={false}
      navItems={GUEST_NAV_ITEMS}
      ctaSlot={guestCta}
    />
  );
}
