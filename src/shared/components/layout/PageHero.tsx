import Image from "next/image";
import { Container } from "@/shared/components/ui";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  compact = false,
}: PageHeroProps) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div
          className={
            compact
              ? "relative h-[40vh] min-h-[280px]"
              : "relative h-[50vh] min-h-[360px]"
          }
        >
          <Image src={image} alt={title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
          <Container className="relative flex h-full flex-col justify-end pb-10 pt-24 md:pb-14">
            <HeroText eyebrow={eyebrow} title={title} description={description} />
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-neutral-800 bg-neutral-950">
      <Container className={compact ? "py-12 md:py-16" : "py-16 md:py-24"}>
        <HeroText eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </section>
  );
}

function HeroText({
  eyebrow,
  title,
  description,
}: Omit<PageHeroProps, "image" | "compact">) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
