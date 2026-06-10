import type { UserRole } from "@/shared/types/store.types";

export type AuthAccount = {
  email: string;
  password: string;
  name: string;
  role: UserRole;
};

/** Tài khoản cứng — thay bằng API/DB sau này */
export const AUTH_ACCOUNTS: AuthAccount[] = [
  {
    email: "admin@gmail.com",
    password: "admin123",
    name: "Admin",
    role: "admin",
  },
  {
    email: "user@example.com",
    password: "user123",
    name: "Member",
    role: "customer",
  },
];

export function findAuthAccount(email: string, password: string): AuthAccount | null {
  const normalizedEmail = email.trim().toLowerCase();
  return (
    AUTH_ACCOUNTS.find(
      (account) =>
        account.email.toLowerCase() === normalizedEmail && account.password === password,
    ) ?? null
  );
}
