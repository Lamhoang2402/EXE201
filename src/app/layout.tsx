import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { MainLayout } from "@/shared/components/layout";
import { brandTitle } from "@/shared/constants/brand";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: brandTitle(),
  description:
    "Khám phá bộ sưu tập streetwear cao cấp — Owners Club, SS26, 247 Activewear và Initial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-neutral-950 text-white antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
