"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminNavigation } from "@/features/admin/constants/navigation";
import { BRAND_NAME } from "@/shared/constants/brand";
import { useApp } from "@/shared/context/AppProvider";
import { cn } from "@/shared/utils/cn";

type AdminShellProps = {
  children: React.ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useApp();

  return (
    <div className="flex min-h-screen bg-[#0f0f14] text-white">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-[#12121a] lg:flex">
        <div className="border-b border-white/10 px-6 py-5">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-400">{BRAND_NAME}</p>
          <h1 className="mt-1 text-lg font-medium">Admin Panel</h1>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {adminNavigation.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-violet-500/20 text-violet-200"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-lg bg-white/5 px-3 py-3">
            <p className="truncate text-sm font-medium text-white">{user?.name}</p>
            <p className="truncate text-xs text-neutral-500">{user?.email}</p>
            <p className="mt-1 text-xs text-violet-400">Admin</p>
          </div>
          <div className="mt-3 space-y-1">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-sm text-neutral-400 hover:bg-white/5 hover:text-white"
            >
              ← Về trang bán hàng
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                router.push("/");
              }}
              className="w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-400 hover:bg-white/5 hover:text-white"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/10 bg-[#12121a]/80 px-4 py-4 backdrop-blur lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Quản trị</p>
            <p className="text-sm text-neutral-300">
              {adminNavigation.find((item) =>
                item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href),
              )?.label ?? "Dashboard"}
            </p>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-neutral-300 hover:border-white/20 lg:hidden"
          >
            Về site
          </Link>
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
