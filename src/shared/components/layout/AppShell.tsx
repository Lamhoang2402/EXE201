"use client";

import { AppProvider } from "@/shared/context/AppProvider";
import { AnnouncementBar } from "./AnnouncementBar";
import { CartDrawer } from "./CartDrawer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SearchOverlay } from "./SearchOverlay";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <AppProvider>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </AppProvider>
  );
}
