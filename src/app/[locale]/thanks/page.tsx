import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function ThanksPage() {
  const t = useTranslations("thanks");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="mb-6 font-helios text-4xl md:text-6xl text-center">
        {t("title")}
      </h1>
      <p className="mb-10 text-center text-lg text-white/70 max-w-lg">
        {t("description")}
      </p>
      <Link
        href="/"
        className="rounded bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-neutral-200"
      >
        {t("button")}
      </Link>
    </div>
  );
}
