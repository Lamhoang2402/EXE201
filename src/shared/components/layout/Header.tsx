"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavigation } from "@/shared/constants/navigation";
import { useApp } from "@/shared/context/AppProvider";
import { cn } from "@/shared/utils/cn";
import { useScrollPosition } from "@/shared/hooks/useScrollPosition";

const iconClassName = "h-[18px] w-[18px]";

function SearchIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16.5 16.5" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M6 6L5 3H2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Header() {
  const isScrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { cartCount, openCart, openSearch, user, logout } = useApp();
  const accountHref = user ? "/account" : "/login";
  const accountLabel = user ? "Account" : "Login";

  const desktopNav = useMemo(() => mainNavigation, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          isScrolled ? "border-white/10 bg-neutral-950/95 backdrop-blur-xl" : "border-transparent bg-neutral-950",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-3 lg:gap-6">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-full p-2 text-white lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.35em] text-white"
            >
              NORTH ROW
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
            {desktopNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown((current) => (current === item.label ? null : current))}
                >
                  <Link
                    href={item.href}
                    className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 mt-4 min-w-60 rounded-2xl border border-white/10 bg-neutral-950 p-4 shadow-2xl shadow-black/40"
                      >
                        <div className="grid gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="rounded-xl px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0">
            <button
              type="button"
              aria-label="Search"
              onClick={openSearch}
              className="inline-flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/5"
            >
              <SearchIcon />
            </button>

            <Link
              href={accountHref}
              aria-label={accountLabel}
              className="inline-flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/5"
            >
              <AccountIcon />
            </Link>

            <button
              type="button"
              aria-label="Cart"
              onClick={openCart}
              className="relative inline-flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/5"
            >
              <CartIcon />
              {cartCount > 0 ? (
                <span className="absolute right-0 top-0 inline-flex min-w-5 -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-[10px] font-semibold leading-none text-neutral-950">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSearch={openSearch}
        onCart={openCart}
        cartCount={cartCount}
        accountHref={accountHref}
        accountLabel={accountLabel}
        user={user}
        logout={logout}
      />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  onSearch,
  onCart,
  cartCount,
  accountHref,
  accountLabel,
  user,
  logout,
}: {
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
  onCart: () => void;
  cartCount: number;
  accountHref: string;
  accountLabel: string;
  user: ReturnType<typeof useApp>["user"];
  logout: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col border-r border-white/10 bg-neutral-950 px-5 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">North Row</span>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-full p-2 text-white"
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={onSearch}
                className="flex w-full items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-neutral-200"
              >
                <SearchIcon />
                Search
              </button>
              <button
                type="button"
                onClick={onCart}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-neutral-200"
              >
                <span className="flex items-center gap-3">
                  <CartIcon />
                  Cart
                </span>
                {cartCount > 0 ? <span className="text-xs text-neutral-400">{cartCount}</span> : null}
              </button>
            </div>

            <nav className="mt-8 flex-1 overflow-y-auto pr-1">
              <div className="grid gap-2">
                {mainNavigation.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-4 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white"
                    >
                      {item.label}
                      <span className="text-neutral-500">↗</span>
                    </Link>
                    {item.children ? (
                      <div className="border-t border-white/10 px-4 py-3">
                        <div className="grid gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="text-sm text-neutral-300 transition-colors hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </nav>

            <div className="mt-6 grid gap-3 border-t border-white/10 pt-6">
              <Link
                href={accountHref}
                onClick={onClose}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-neutral-200"
              >
                {accountLabel}
              </Link>
              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    onClose();
                  }}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-neutral-200"
                >
                  Logout
                </button>
              ) : null}
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
