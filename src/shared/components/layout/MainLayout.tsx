import { AppShell } from "./AppShell";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
