"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { findAuthAccount } from "@/shared/constants/auth";
import { useApp } from "@/shared/context/AppProvider";

export function LoginModal() {
  const router = useRouter();
  const { isLoginOpen, closeLogin, login, loginRedirect, user } = useApp();
  const [email, setEmail] = useState(user?.email ?? "");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoginOpen) {
      setPassword("");
      setError("");
      setLoading(false);
      return;
    }
    setEmail(user?.email ?? "");
  }, [isLoginOpen, user?.email]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLogin();
    };
    if (isLoginOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLoginOpen, closeLogin]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const success = login(email, password);
    setLoading(false);

    if (!success) {
      setError("Email hoặc mật khẩu không đúng.");
      return;
    }

    const account = findAuthAccount(email, password);
    closeLogin();

    if (loginRedirect) {
      router.push(loginRedirect);
      return;
    }

    if (account?.role === "admin") {
      router.push("/admin");
      return;
    }

    router.push("/account");
  };

  return (
    <AnimatePresence>
      {isLoginOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/50"
            onClick={closeLogin}
          />
          <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="pointer-events-auto w-full max-w-md rounded-sm bg-white p-6 shadow-2xl md:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-modal-title"
            >
            <div className="mb-6 flex items-start justify-between">
              <h2 id="login-modal-title" className="text-lg font-semibold uppercase tracking-[0.12em] text-neutral-900">
                Đăng nhập
              </h2>
              <button
                type="button"
                aria-label="Đóng"
                onClick={closeLogin}
                className="text-neutral-400 transition-colors hover:text-neutral-900"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="mb-1.5 block text-sm text-neutral-700">
                  Tên tài khoản hoặc địa chỉ email <span className="text-[#b20000]">*</span>
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="mb-1.5 block text-sm text-neutral-700">
                  Mật khẩu <span className="text-[#b20000]">*</span>
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
                  placeholder="••••••••"
                />
              </div>

              {error ? <p className="text-sm text-[#b20000]">{error}</p> : null}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 accent-neutral-900"
                  />
                  Ghi nhớ mật khẩu
                </label>
                <button type="button" className="text-sm text-neutral-600 hover:text-[#b20000]">
                  Quên mật khẩu?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-neutral-900 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#b20000] disabled:opacity-60"
              >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </form>

            <div className="mt-6 border-t border-neutral-200 pt-6 text-center">
              <p className="text-sm font-medium text-neutral-800">Chưa có tài khoản?</p>
              <p className="mt-1 text-sm text-neutral-500">Đăng ký ngay!</p>
              <button
                type="button"
                className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-neutral-900 underline underline-offset-4 hover:text-[#b20000]"
              >
                Đăng ký tài khoản
              </button>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
