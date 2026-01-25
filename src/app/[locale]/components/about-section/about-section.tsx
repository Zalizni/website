import { SECTIONS_IDS } from '@/configs/navigation';
import { getTranslations } from 'next-intl/server';

export const AboutSection = async () => {
  const t = await getTranslations('about');

  return (
    <section
      id={SECTIONS_IDS.ABOUT}
      className="border-b"
    >
      <div className="container border-x py-20">
        <div className="section-desc mb-10">{t('title')}</div>
        <p className="text-2xl font-semibold whitespace-break-spaces xl:text-[40px]/[56px]">
          {t('description')}
        </p>
      </div>
    </section>
  );
};
