import Link from "next/link";
import { Container, Button } from "@/shared/components/ui";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          404
        </p>
        <h1 className="mb-4 text-4xl font-light tracking-tight text-white md:text-5xl">
          Không tìm thấy trang
        </h1>
        <p className="mx-auto mb-10 max-w-md text-sm text-neutral-400">
          Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link href="/">
          <Button size="lg">Về trang chủ</Button>
        </Link>
      </Container>
    </section>
  );
}
