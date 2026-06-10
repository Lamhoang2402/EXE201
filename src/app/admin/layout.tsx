import { AdminGuard, AdminShell } from "@/features/admin";
import { brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("Admin"),
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <AdminShell>{children}</AdminShell>
    </AdminGuard>
  );
}
