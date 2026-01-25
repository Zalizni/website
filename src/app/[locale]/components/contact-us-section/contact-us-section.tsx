import React from 'react';
import { Input } from './components';
import { SECTIONS_IDS } from '@/configs/navigation';

export const ContactUsSection = () => {
  return (
    <section id={SECTIONS_IDS.CONTACTS}>
      <div className="container border-x px-0 py-20">
        <div className="flex items-start border-y py-20">
          <div className="w-full px-6">
            <div className="section-title mb-6">Звʼяжіться з нами</div>
            <p className="text-white/50">
              “Тиша” — це польовий комунікаційний пристрій, створений для
              ситуацій, де важливо зберігати повне маскування та контроль над
              ефіром.
            </p>
          </div>
          <div className="w-full px-6">
            <Input
              type="text"
              placeholder="IM'Я"
              className="mb-2"
            />

            <Input
              type="email"
              placeholder="EMAIL"
              className="mb-2"
            />

            <Input
              type="text"
              placeholder="ТЕКСТ ПОВІДОМЛЕННЯ"
              className="mb-6"
            />

            <button className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200">
              ВІДПРАВИТИ
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transform transition-transform group-hover:translate-x-1"
              >
                <line
                  x1="7"
                  y1="17"
                  x2="17"
                  y2="7"
                />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
