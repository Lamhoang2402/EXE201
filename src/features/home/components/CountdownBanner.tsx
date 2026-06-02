"use client";

import { motion } from "framer-motion";
import { Container } from "@/shared/components/ui";
import { padTime, useCountdown } from "@/shared/hooks/useCountdown";
import { fadeIn, viewportOnce } from "@/shared/animations/variants";

const launchDate = new Date("2026-06-15T00:00:00");

export function CountdownBanner() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(launchDate);

  if (isExpired) return null;

  return (
    <section className="border-y border-neutral-800 bg-neutral-900/50">
      <Container className="py-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Coming Soon
            </p>
            <h2 className="mt-2 text-xl font-light text-white md:text-2xl">
              Summer Capsule &apos;26
            </h2>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <TimeUnit value={days} label="Ngày" />
            <span className="text-neutral-600">:</span>
            <TimeUnit value={hours} label="Giờ" />
            <span className="text-neutral-600">:</span>
            <TimeUnit value={minutes} label="Phút" />
            <span className="text-neutral-600">:</span>
            <TimeUnit value={seconds} label="Giây" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

type TimeUnitProps = {
  value: number;
  label: string;
};

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="text-center">
      <span className="block font-mono text-2xl font-light text-white md:text-3xl">
        {padTime(value)}
      </span>
      <span className="mt-1 block text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </span>
    </div>
  );
}
