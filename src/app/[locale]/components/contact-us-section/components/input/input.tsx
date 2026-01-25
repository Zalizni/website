import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  placeholder: string;
  type: 'text' | 'email';
  className?: string;
}

export const Input: FC<InputProps> = ({ placeholder, type, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(
        'w-full border p-3 text-[14px]/[14px] outline-none placeholder:text-white placeholder:uppercase',
        className,
      )}
    />
  );
};
