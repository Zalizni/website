"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SECTIONS_IDS } from "@/configs/navigation";
import { twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  locale: string;
}

const MENU_ITEMS = [
  { id: SECTIONS_IDS.ABOUT, label: "about" },
  { id: SECTIONS_IDS.SCENARIOS, label: "scenarios" },
  { id: SECTIONS_IDS.ADVANTAGES, label: "advantages" },
  { id: SECTIONS_IDS.CONTACTS, label: "contacts" },
];

export const MobileMenu = ({ locale }: MobileMenuProps) => {
  const t = useTranslations("navigation");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={twMerge(
            "block h-0.5 w-8 bg-white transition-transform duration-300",
            isOpen && "translate-y-2 rotate-45",
          )}
        ></span>
        <span
          className={twMerge(
            "block h-0.5 w-8 bg-white transition-opacity duration-300",
            isOpen && "opacity-0",
          )}
        ></span>
        <span
          className={twMerge(
            "block h-0.5 w-8 bg-white transition-transform duration-300",
            isOpen && "-translate-y-2 -rotate-45",
          )}
        ></span>
      </button>

      <div
        className={twMerge(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-black transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}#${item.id}`}
              onClick={closeMenu}
              className="font-onest text-2xl font-medium uppercase tracking-wide text-white transition-colors hover:text-white/70"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
