import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center bg-white px-4 py-28 text-neutral-900 md:py-36">
      <div className="mx-auto max-w-md text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          404
        </p>
        <h1 className="mb-4 text-4xl font-light tracking-tight md:text-5xl">
          Không tìm thấy trang
        </h1>
        <p className="mx-auto mb-10 max-w-md text-sm text-neutral-500">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          href="/"
          className="inline-block bg-neutral-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b20000]"
        >
          Về trang chủ
        </Link>
      </div>
    </section>
  );
}
