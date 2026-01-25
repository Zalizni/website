import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="container border-x border-t px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm text-white/50">© 2025 TYSHA</div>

          <div className="flex gap-8 text-sm text-white/50">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </a>
          </div>

          <div className="text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
