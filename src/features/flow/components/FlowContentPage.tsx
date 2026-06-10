type FlowContentPageProps = {
  title: string;
  children: React.ReactNode;
};

export function FlowContentPage({ title, children }: FlowContentPageProps) {
  return (
    <section className="bg-white px-4 py-12 text-neutral-900 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.12em] md:text-3xl">{title}</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-neutral-700 md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
