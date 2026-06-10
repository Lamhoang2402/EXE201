"use client";

import { usePathname } from "next/navigation";
import { Wake360Footer, Wake360Header } from "@/features/wake360";
import { AppProvider } from "@/shared/context/AppProvider";
import { CartDrawer } from "./CartDrawer";
import { LoginModal } from "./LoginModal";
import { SearchOverlay } from "./SearchOverlay";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <AppProvider>
      {isAdminRoute ? (
        children
      ) : (
        <>
          <Wake360Header />
          <main className="flex-1 bg-white">{children}</main>
          <Wake360Footer />
          <CartDrawer />
          <SearchOverlay />
        </>
      )}
      <LoginModal />
    </AppProvider>
  );
}
