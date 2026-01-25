import { SECTIONS_IDS } from '@/configs/navigation';
import React from 'react';

const PlaceholderIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-neutral-500"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="1.5"
    />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const ScenarioItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="border-b last-of-type:border-b-0">
    <div className="px-6 py-9">
      <PlaceholderIcon />
    </div>
    <div className="p-6">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50 md:text-base">
        {description}
      </p>
    </div>
  </div>
);

export const ScenariosSection = () => {
  return (
    <section id={SECTIONS_IDS.SCENARIOS}>
      <div className="container border-x px-0 py-20">
        <div className="grid grid-cols-1 border-b lg:grid-cols-2">
          <div className="border-r px-6 py-10">
            <span className="section-desc mb-6 block">
              Сценарії використання
            </span>
            <h2 className="section-title mb-8">Title about usage scenarios</h2>
            <p className="leading-relaxed text-white/50 xl:text-lg">
              “Тиша” — це польовий комунікаційний пристрій, створений для
              ситуацій, де важливо зберігати повне маскування та контроль над
              ефіром.
            </p>
          </div>

          <div className="py-10">
            <ScenarioItem
              title="Військові підрозділи"
              description="Використовується під час тактичних операцій, розвідки або координації груп у полі, коли необхідно зберігати повне маскування та уникати голосового чи радіоефірного зв’язку."
            />
            <ScenarioItem
              title="Волонтерські місії"
              description="Допомагає підтримувати зв’язок між членами команди під час роботи у складних або небезпечних умовах — під час евакуацій, доставки допомоги чи пересування територіями з обмеженою інфраструктурою."
            />
            <ScenarioItem
              title="Цивільні та рятувальні служби"
              description="Застосовується під час пошуково-рятувальних операцій, пожеж або у важкодоступній місцевості, де користування телефоном чи рацією ускладнене."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
