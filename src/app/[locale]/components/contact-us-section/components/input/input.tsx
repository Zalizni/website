import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={twMerge(
        "w-full border p-3 text-[14px]/[14px] outline-none placeholder:text-white placeholder:uppercase",
        className
      )}
    />
  );
};
