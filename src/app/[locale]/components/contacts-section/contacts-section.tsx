export const ContactsSection = () => {
  return (
    <section>
      <div className="container border-x px-6 pb-20">
        <div className="section-desc mb-10 block">Контакти</div>
        <div className="gap grid grid-cols-2 gap-6">
          <button className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200">
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
          </button>
          <button className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200">
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
          </button>
          <button className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200">
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
          </button>
        </div>
      </div>
    </section>
  );
};
