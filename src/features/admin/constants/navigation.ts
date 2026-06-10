export type AdminNavItem = {
  label: string;
  href: string;
  description?: string;
};

export const adminNavigation: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", description: "Tổng quan cửa hàng" },
  { label: "Products", href: "/admin/products", description: "Quản lý sản phẩm" },
  { label: "Collections", href: "/admin/collections", description: "Quản lý bộ sưu tập" },
  { label: "Orders", href: "/admin/orders", description: "Đơn hàng (demo)" },
  { label: "Users", href: "/admin/users", description: "Người dùng (demo)" },
];
