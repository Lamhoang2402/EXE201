"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { wake360Nav } from "@/features/wake360/data/homeContent";
import { BRAND_NAME } from "@/shared/constants/brand";
import { useApp } from "@/shared/context/AppProvider";
import { cn } from "@/shared/utils/cn";

export function Wake360Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { cartCount, openCart, openSearch, openLogin, user } = useApp();

  const isSolid = !isHome || scrolled || hovered;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isSolid ? "bg-black shadow-sm" : "bg-transparent",
        )}
      >
        <div className="mx-auto grid h-[58px] max-w-[1450px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[70px] md:px-6">
          <div className="flex items-center justify-start">
            <button
              type="button"
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center text-white md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

          <Link
            href="/"
            className="text-center text-lg font-semibold uppercase tracking-[0.35em] text-white md:text-xl"
          >
            {BRAND_NAME}
          </Link>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              aria-label="Tìm kiếm"
              onClick={openSearch}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            {user ? (
              <Link
                href="/account"
                aria-label="Tài khoản"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>
              </Link>
            ) : (
              <button
                type="button"
                aria-label="Đăng nhập"
                onClick={() => openLogin()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
                </svg>
              </button>
            )}
            <button
              type="button"
              aria-label="Giỏ hàng"
              onClick={openCart}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b20000] px-1 text-[10px] text-white">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="mx-auto flex max-w-[1450px] items-center justify-center gap-8 px-6 py-3">
            {wake360Nav.map((item) =>
              "children" in item && item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setCollectionOpen(true)}
                  onMouseLeave={() => setCollectionOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#b20000]"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        collectionOpen && "rotate-180",
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  {collectionOpen ? (
                    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                      <div className="min-w-[140px] border border-white/10 bg-neutral-900 py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-neutral-200 hover:bg-white/5"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={item.label}>
                  {"static" in item && item.static ? (
                    <span className="cursor-default text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                      {item.label}
                    </span>
                  ) : "href" in item && "external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#b20000]"
                    >
                      {item.label}
                    </a>
                  ) : "href" in item ? (
                    <Link
                      href={item.href}
                      className="text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#b20000]"
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Đóng menu"
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="relative h-full w-[min(100%,320px)] bg-black p-6 text-white shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Đóng">
                ✕
              </button>
            </div>
            <ul className="space-y-4">
              {wake360Nav.map((item) => (
                <li key={item.label}>
                  {"children" in item && item.children ? (
                    <div className="space-y-3">
                      <Link
                        href={item.href}
                        className="text-sm font-medium uppercase tracking-[0.15em] hover:text-[#b20000]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <ul className="space-y-2 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="text-sm text-neutral-300 hover:text-[#b20000]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : "static" in item && item.static ? (
                    <span className="text-sm font-medium uppercase tracking-[0.15em] text-white">
                      {item.label}
                    </span>
                  ) : "href" in item && "external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium uppercase tracking-[0.15em] hover:text-[#b20000]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : "href" in item ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium uppercase tracking-[0.15em] hover:text-[#b20000]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      ) : null}
    </>
  );
}
