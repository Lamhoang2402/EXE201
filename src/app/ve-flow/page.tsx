import { BRAND_NAME, brandTitle } from "@/shared/constants/brand";

export const metadata = {
  title: brandTitle("About Us"),
  description: `Tìm hiểu về sứ mệnh và câu chuyện thương hiệu ${BRAND_NAME}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900">
      <section className="px-4 py-14 text-center md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Brand Mission
          </h1>
          <p className="mt-4 text-xl font-medium italic text-neutral-800 md:text-2xl">
            Chasing greatness with strength and grace.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base">
            At {BRAND_NAME}, we believe every day is an opportunity to be better. We design
            high-performance products that challenge your boundaries, propelling you through each
            step and milestone of your growth journey.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {BRAND_NAME} Represent
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 md:text-base">
            The {BRAND_NAME} symbol represents completeness—both physical and mental—continuous
            movement and relentless progress. The circle represents the cycle of training and balance,
            always returning to the starting point but stronger with each rotation.
          </p>
          <p
            aria-hidden
            className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-neutral-300 text-2xl font-semibold uppercase tracking-[0.35em] text-neutral-900"
          >
            {BRAND_NAME}
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            About Us
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600 md:text-base">
            <p>
              Founded in 2025, {BRAND_NAME} is for those who push beyond limits. Flow Team is a
              community of individuals passionate about outdoor sports, performance, and wellness.
            </p>
            <p>
              Driven by sport and a commitment to a healthy lifestyle, we seek new trails to run, new
              challenges to take on, and a global community to connect with.
            </p>
            <p>
              Before our products reach you, we use them. We field-test them. We push them to the
              limit. We demand the best from them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
