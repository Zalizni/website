import { SECTIONS_IDS } from '@/configs/navigation';

const PlaceholderIcon = () => (
  <svg
    width="32"
    height="32"
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

const AdvantageCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="group flex h-full min-h-[320px] flex-col justify-between border border-t-0 border-l-0 border-neutral-800 p-6 transition-colors hover:bg-neutral-900/30">
    <div className="mb-8 flex justify-end">
      <PlaceholderIcon />
    </div>
    <div>
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  </div>
);

export const AdvantagesSection = () => {
  const advantages = [
    {
      title: 'Автономність',
      description:
        'Енергоефективність конструкції забезпечує тривалий час роботи без втрати стабільності сигналу та функціональності пристрою.',
    },
    {
      title: 'Захищеність даних',
      description:
        'Кожен сигнал шифрується; навіть у разі перехоплення інформація залишається нечитабельною й безцінною для противника.',
    },
    {
      title: 'Орієнтація та пошук',
      description:
        'Режими компаса, пеленгації та SOS допомагають визначати напрямок, координати й знаходити своїх у складних і небезпечних',
    },
  ];

  return (
    <section id={SECTIONS_IDS.ADVANTAGES}>
      <div className="container border-x px-0 pb-20">
        <div className="px-6 pt-20">
          <span className="section-desc mb-10 block">Переваги</span>
          <div className="flex items-start pb-20">
            <h2 className="section-title w-full">
              Title about usage scenarios
            </h2>
            <p className="w-full text-start text-lg text-white/50">
              “Тиша” — це польовий комунікаційний пристрій, створений для
              ситуацій, де важливо зберігати повне маскування та контроль над
              ефіром.
            </p>
          </div>
        </div>

        <div className="-mr-px grid grid-cols-1 border-t md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <AdvantageCard
              key={`adv-1-${i}`}
              {...adv}
            />
          ))}
          {/* Repeating for the second row as seen in design */}
          {advantages.map((adv, i) => (
            <AdvantageCard
              key={`adv-2-${i}`}
              {...adv}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
