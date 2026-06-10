"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/shared/context/AppProvider";

type AdminGuardProps = {
  children: ReactNode;
};

export function AdminGuard({ children }: AdminGuardProps) {
  const router = useRouter();
  const { user, isAuthReady, openLogin } = useApp();

  useEffect(() => {
    if (!isAuthReady) return;
    if (!user || user.role !== "admin") {
      openLogin("/admin");
      router.replace("/");
    }
  }, [isAuthReady, openLogin, router, user]);

  if (!isAuthReady || !user || user.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f0f14] text-sm text-neutral-400">
        Đang kiểm tra quyền truy cập...
      </div>
    );
  }

  return children;
}
