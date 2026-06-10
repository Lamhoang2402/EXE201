"use client";

import { useState } from "react";
import { FLOW_CONTACT } from "@/features/wake360/data/homeContent";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-6 text-center text-sm text-neutral-700">
        Cảm ơn bạn đã liên hệ với {FLOW_CONTACT.name}. Chúng mình sẽ phản hồi qua email trong thời gian sớm nhất.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Tên của bạn
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Email của bạn
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Tiêu đề
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Tin nhắn của bạn <span className="font-normal text-neutral-500">(không bắt buộc)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full resize-y border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-neutral-900 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#b20000]"
      >
        Gửi tin nhắn
      </button>
    </form>
  );
}
