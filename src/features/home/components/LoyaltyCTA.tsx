"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Container } from "@/shared/components/ui";
import { fadeInUp, viewportOnce } from "@/shared/animations/variants";

export function LoyaltyCTA() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-800">
      <Image
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80"
        alt="Prestige Loyalty"
        fill
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/70" />

      <Container className="relative py-20 md:py-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Prestige Loyalty
          </p>
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl">
            Tham gia North Row Prestige
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-neutral-400 md:text-base">
            Mở khóa giảm 10% cho đơn hàng đầu tiên cùng nhiều phần thưởng và
            ưu đãi độc quyền dành cho thành viên.
          </p>
          <Link href="#">
            <Button size="lg">Đăng ký ngay</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
