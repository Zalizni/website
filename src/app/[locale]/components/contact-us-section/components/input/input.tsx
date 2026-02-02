import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ className, error, ...props }) => {
  return (
    <div className={twMerge("w-full", className)}>
      <input
        {...props}
        className={twMerge(
          "w-full border p-3 text-[14px]/[14px] outline-none placeholder:text-white placeholder:uppercase transition-colors bg-transparent",
          error ? "border-red-500" : "border-neutral-800 focus:border-white"
        )}
      />
      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
};
