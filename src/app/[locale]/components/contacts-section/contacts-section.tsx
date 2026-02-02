export const ContactsSection = () => {
  return (
    <section>
      <div className="container border-x px-6 pb-10 md:pb-20">
        <div className="section-desc mb-6 md:mb-10 block">Контакти</div>
        <div className="gap grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/380635903497"
            className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200"
          >
            WhatsApp
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a
            href="https://signal.me/#p/380635903497"
            className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200"
          >
            Signal
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a
            className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200"
            href="mailto:ceo@zalizni.com"
          >
            Email
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform transition-transform group-hover:translate-x-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
