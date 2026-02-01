import { FirefighterIcon, RiffleIcon, VolunteeringIcon } from "@/components";
import { SECTIONS_IDS } from "@/configs/navigation";
import Image from "next/image";
import React from "react";

const ScenarioItem = ({
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
  <div className="border-b last-of-type:border-b-0 relative">
    {useBg && (
      <Image
        src="/images/landing/tysha-pattern.png"
        alt="Scenario Background"
        fill
        className="object-cover opacity-50"
      />
    )}
    <div className="relative z-10">
      <div className="pt-6 pl-6">{icon}</div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70 md:text-base">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const ScenariosSection = () => {
  return (
    <section id={SECTIONS_IDS.SCENARIOS}>
      <div className="container border-x px-0 py-20">
        <div className="px-6">
          <span className="section-desc mb-6 block">Функціональність</span>
          <div className="flex items-start pb-20">
            <h2 className="section-title w-full">Коли мовчання - це безпека</h2>
            <div className="w-full text-start text-lg">
              <ul className="list-disc list-inside text-white/70">
                <li>Тактичні команди без голосу</li>
                <li>SOS і навігація для швидкої реакції</li>
                <li>Захищений обмін короткими сигналами</li>
                <li>
                  NFC медпрофіль: швидкий доступ до важливих даних про бійця в
                  критичний момент
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 border-y lg:grid-cols-2">
          <div className="border-r py-10 px-6">
            <div className="section-desc mb-6 block">Сценарії використання</div>
            <div className="section-title mb-8">Рішення для різних потреб</div>
          </div>

          <div>
            <ScenarioItem
              title="Військові підрозділи"
              icon={<RiffleIcon size={32} />}
              description="Використовується під час тактичних операцій, розвідки або координації груп у полі, коли необхідно зберігати повне маскування та уникати голосового чи радіоефірного зв’язку."
              useBg
            />
            <ScenarioItem
              title="Волонтерські місії"
              icon={<VolunteeringIcon size={32} />}
              description="Допомагає підтримувати зв’язок між членами команди під час роботи у складних або небезпечних умовах — під час евакуацій, доставки допомоги чи пересування територіями з обмеженою інфраструктурою."
            />
            <ScenarioItem
              title="Цивільні та рятувальні служби"
              icon={<FirefighterIcon size={32} />}
              description="Застосовується під час пошуково-рятувальних операцій, пожеж або у важкодоступній місцевості, де користування телефоном чи рацією ускладнене."
              useBg
            />
          </div>
        </div>
      </div>
    </section>
  );
};
