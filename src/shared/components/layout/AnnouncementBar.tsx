"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { announcement } from "@/shared/constants/navigation";

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-50 bg-white py-2.5 text-center"
    >
      <Link
        href={announcement.href}
        className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-950 transition-opacity hover:opacity-70"
      >
        {announcement.message}
      </Link>
    </motion.div>
  );
}
