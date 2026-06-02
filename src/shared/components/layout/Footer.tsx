import Link from "next/link";
import { Container } from "@/shared/components/ui";
import { footerNavigation } from "@/shared/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Client Services" links={footerNavigation.clientServices} />
          <FooterColumn title="Company" links={footerNavigation.company} />
          <FooterColumn title="Social" links={footerNavigation.social} />

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-neutral-400">
              Đăng ký để nhận thông tin về bộ sưu tập mới và ưu đãi độc quyền.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="h-10 flex-1 rounded-full border border-neutral-800 bg-transparent px-3 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-600 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 rounded-full bg-white px-4 text-xs font-medium uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-white"
          >
            NORTH ROW
          </Link>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} North Row Clothing. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
