import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getLocale } from "next-intl/server";
import { SECTIONS_IDS } from "@/configs/navigation";

const Header = async () => {
  const locale = await getLocale();
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black text-white">
      <div className="container border-x">
        <div className="flex items-center justify-between py-6">
          <Link href={`/${locale}#${SECTIONS_IDS.HOME}`}>
            <Image
              src="/images/logos/white-header-logo.svg"
              alt="Logo"
              width={136}
              height={32}
            />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-white/70 uppercase xl:flex">
            <Link
              href={`/${locale}#${SECTIONS_IDS.ABOUT}`}
              className="transition-colors hover:text-white"
            >
              Про продукт
            </Link>
            <Link
              href={`/${locale}#${SECTIONS_IDS.SCENARIOS}`}
              className="transition-colors hover:text-white"
            >
              Використання
            </Link>
            <Link
              href={`/${locale}#${SECTIONS_IDS.ADVANTAGES}`}
              className="transition-colors hover:text-white"
            >
              Переваги
            </Link>
            <Link
              href={`/${locale}#${SECTIONS_IDS.CONTACTS}`}
              className="transition-colors hover:text-white"
            >
              контакти
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
