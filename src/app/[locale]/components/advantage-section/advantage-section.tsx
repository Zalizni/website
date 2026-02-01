import { SECTIONS_IDS } from "@/configs/navigation";
import { AutonomyIcon, ConnectionIcon, SecurityIcon } from "./components";
import Image from "next/image";

const AdvantageCard = ({
  title,
  description,
  icon,
  useBg,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  useBg?: boolean;
}) => (
  <div className="group flex h-full flex-col justify-between border border-t-0 border-l-0 border-neutral-800 p-6 transition-colors hover:bg-neutral-900/30 relative">
    {useBg && (
      <Image
        src="/images/landing/tysha-pattern.png"
        alt="Advantage Background"
        fill
        className="object-cover opacity-50"
      />
    )}
    <div className="relative z-10">
      <div className="mb-8 flex justify-end">{icon}</div>
      <div>
        <h3 className="mb-4 text-lg font-bold">{title}</h3>
        <p className="leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  </div>
);

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <ConnectionIcon size={72} />,
      title: "Непомітний радіозв’язок",
      description:
        "Короткі сеанси передачі та FHSS зменшують ризик виявлення і ускладнюють перехоплення або придушення зв’язку в “шумному” ефірі.",
    },
    {
      icon: <SecurityIcon size={72} />,
      title: "Захищеність даних",
      description:
        "Кожен сигнал шифрується; навіть у разі перехоплення інформація залишається нечитабельною й безцінною для противника.",
    },
    {
      icon: <AutonomyIcon size={72} />,
      title: "Автономність",
      description:
        "Оптимізований режим роботи для довгих виходів: мінімум зайвих передач, максимум часу без підзарядки.",
    },
    {
      icon: <AutonomyIcon size={72} />,
      title: "Надійність",
      description:
        "Захист від пилу й вологи та міцна конструкція для щоденного використання в полі. Рівень захисту — наближений до IP67",
    },
  ];

  return (
    <section id={SECTIONS_IDS.ADVANTAGES}>
      <div className="container border-x px-0 pb-20">
        <div className="px-6">
          <span className="section-desc mb-10 block">Переваги</span>
          <div className="flex items-start pb-20">
            <h2 className="section-title w-full">
              Мінімальні сигнали. Максимум користі.
            </h2>
          </div>
        </div>

        <div className="-mr-px grid grid-cols-1 border-t md:grid-cols-2">
          {advantages.map((adv, i) => (
            <AdvantageCard
              useBg={i === 1 || i === 2}
              key={`adv-1-${i}`}
              {...adv}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
