import { SECTIONS_IDS } from "@/configs/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export const HomeSection = async () => {
  const t = await getTranslations("home");

  return (
    <section
      className="relative h-screen w-full border-b"
      id={SECTIONS_IDS.HOME}
    >
      <Image
        src="/images/landing/home/bg.webp"
        alt="Home Section Background"
        fill
        className="object-cover"
      />
      <div className="flex-center relative z-10 container h-full flex-col border-x text-center px-4 md:px-6">
        <h1 className="font-helios mb-6 text-4xl md:text-5xl xl:text-[64px]/[72px] text-white whitespace-pre-wrap">
          {t("title")}
        </h1>
        <p className="w-full md:max-w-2/3 text-base md:text-lg text-white/70 xl:text-[20px]/[24px]">
          {t("description")}
        </p>
      </div>
    </section>
  );
};
