import { SECTIONS_IDS } from "@/configs/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export const AboutSection = async () => {
  const t = await getTranslations("about");

  return (
    <section id={SECTIONS_IDS.ABOUT} className="border-b w-full relative">
      <Image
        src="/images/landing/tysha-pattern.png"
        alt="Home Section Background"
        fill
        className="object-cover"
      />
      <div className="container border-x relative z-10 py-20">
        <div className="section-desc mb-10">{t("title")}</div>
        <p className="text-2xl font-semibold whitespace-break-spaces xl:text-[40px]/[56px]">
          {t("description")}
        </p>
      </div>
    </section>
  );
};
