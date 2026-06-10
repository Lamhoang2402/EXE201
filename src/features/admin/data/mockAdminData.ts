export type MockOrder = {
  id: string;
  customer: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
};

export type MockAdminUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
  joinedAt: string;
};

export const mockOrders: MockOrder[] = [
  { id: "ORD-1042", customer: "Nguyen Van A", total: 6370000, status: "processing", date: "2026-06-01" },
  { id: "ORD-1041", customer: "Tran Thi B", total: 5180000, status: "shipped", date: "2026-05-30" },
  { id: "ORD-1040", customer: "Le Minh C", total: 12900000, status: "delivered", date: "2026-05-28" },
  { id: "ORD-1039", customer: "Pham D", total: 2450000, status: "pending", date: "2026-05-27" },
];

export const mockUsers: MockAdminUser[] = [
  { id: "u-1", name: "Admin", email: "admin@gmail.com", role: "admin", joinedAt: "2026-01-01" },
  { id: "u-2", name: "Member", email: "user@example.com", role: "customer", joinedAt: "2026-03-15" },
  { id: "u-3", name: "Guest Shopper", email: "guest@flow.vn", role: "customer", joinedAt: "2026-05-20" },
];
