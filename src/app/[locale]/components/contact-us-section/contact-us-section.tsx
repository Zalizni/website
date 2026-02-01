"use client";

import { useState } from "react";
import { Input } from "./components";
import { SECTIONS_IDS } from "@/configs/navigation";

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id={SECTIONS_IDS.CONTACTS}>
      <div className="container border-x px-0 py-20">
        <div className="flex items-start border-y py-20">
          <div className="w-full px-6">
            <div className="section-title mb-6">Звʼяжіться з нами</div>
          </div>
          <div className="w-full px-6">
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="IM'Я"
                className="mb-2"
                required
              />

              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="EMAIL"
                className="mb-2"
                required
              />

              <Input
                name="message"
                value={formData.message}
                onChange={handleChange}
                type="text"
                placeholder="ТЕКСТ ПОВІДОМЛЕННЯ"
                className="mb-6"
                required
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full cursor-pointer items-center justify-between bg-white p-4 text-black transition-colors hover:bg-neutral-200 disabled:opacity-50 group"
              >
                {status === "loading" ? "ВІДПРАВКА..." : "ВІДПРАВИТИ"}
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

              {status === "success" && (
                <p className="mt-4 text-green-500">Повідомлення відправлено!</p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-500">
                  Помилка відправки. Спробуйте ще раз.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
