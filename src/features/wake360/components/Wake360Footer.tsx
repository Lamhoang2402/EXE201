import Link from "next/link";
import {
  FLOW_CONTACT,
  FLOW_SOCIAL_LINKS,
  wake360Nav,
} from "@/features/wake360/data/homeContent";
import { BRAND_NAME } from "@/shared/constants/brand";

const policyLinks = [
  { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
  { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
  { label: "Phương thức thanh toán", href: "/phuong-thuc-thanh-toan" },
];

const socialLinks = [
  { label: "Instagram", href: FLOW_SOCIAL_LINKS.instagram },
  { label: "Facebook", href: FLOW_SOCIAL_LINKS.facebook },
  { label: "TikTok", href: FLOW_SOCIAL_LINKS.tiktok },
  { label: "YouTube", href: FLOW_SOCIAL_LINKS.youtube },
];

export function Wake360Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="border-b border-white/10 px-4 py-8 md:px-6">
        <div className="mx-auto grid max-w-[1450px] gap-8 md:grid-cols-3">
          <ul className="hidden space-y-3 text-center text-sm md:block">
            {policyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#b20000]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em]">Contact Us</p>
            <div className="mt-4 space-y-2 text-sm text-neutral-300">
              <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white md:text-xl">
                {BRAND_NAME}
              </p>
              <p>
                <strong>Hotline:</strong> {FLOW_CONTACT.phone}
              </p>
              <p>
                <strong>Email:</strong> {FLOW_CONTACT.email}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-wider hover:text-[#b20000]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-center">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.15em]">
          {wake360Nav.map((item) => (
            <li key={item.label}>
              {"static" in item && item.static ? (
                <span>{item.label}</span>
              ) : "href" in item && "external" in item && item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#b20000]">
                  {item.label}
                </a>
              ) : "href" in item ? (
                <Link href={item.href} className="hover:text-[#b20000]">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
