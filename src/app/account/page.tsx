"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/shared/context/AppProvider";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout, isAuthReady, isAdmin, openLogin } = useApp();

  useEffect(() => {
    if (isAuthReady && !user) {
      openLogin("/account");
      router.replace("/");
    }
  }, [isAuthReady, openLogin, router, user]);

  if (!isAuthReady || !user) return null;

  return (
    <section className="bg-white px-4 py-28 text-neutral-900 md:px-6 md:py-36">
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Account</p>
          <h1 className="mt-2 text-3xl font-light">Tài khoản của bạn</h1>
        </div>

        <div className="space-y-6 border border-neutral-200 p-6 md:p-8">
          <div className="space-y-1">
            <p className="text-sm text-neutral-500">Tên</p>
            <p className="text-lg text-neutral-900">{user.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-neutral-500">Email</p>
            <p className="text-lg text-neutral-900">{user.email}</p>
          </div>
          {isAdmin && (
            <Link
              href="/admin"
              className="inline-flex text-sm text-neutral-900 underline underline-offset-4 hover:text-[#b20000]"
            >
              Mở Admin Dashboard →
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="border border-neutral-900 px-5 py-2.5 text-sm font-medium uppercase tracking-[0.1em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Đăng xuất
          </button>
        </div>

        <div className="border border-neutral-200 p-6 md:p-8">
          <h2 className="text-lg text-neutral-900">Lịch sử đơn hàng</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Đơn hàng gần đây sẽ hiển thị tại đây khi bật thanh toán.
          </p>
        </div>
      </div>
    </section>
  );
}
