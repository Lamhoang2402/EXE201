export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const mainNavigation: NavLink[] = [
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "New Arrivals", href: "/shop?filter=new" },
      { label: "Bestsellers", href: "/shop?filter=bestsellers" },
      { label: "T-Shirts", href: "/shop?category=t-shirts" },
      { label: "Hoodies", href: "/shop?category=hoodies" },
      { label: "Pants", href: "/shop?category=pants" },
      { label: "Outerwear", href: "/shop?category=outerwear" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Owners Club", href: "/collections/owners-club" },
      { label: "Initial", href: "/collections/initial" },
      { label: "247 Activewear", href: "/collections/247" },
      { label: "Spring Summer '26", href: "/collections/ss26" },
    ],
  },
  { label: "Footwear", href: "/shop?category=footwear" },
  { label: "Accessories", href: "/shop?category=accessories" },
];

export const footerNavigation = {
  clientServices: [
    { label: "Support Hub", href: "#" },
    { label: "Track Order", href: "#" },
    { label: "Make a Return", href: "#" },
    { label: "Stockists", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Shipping", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const announcement = {
  message: "Tải app để nhận giảm 15% cho đơn hàng đầu tiên",
  href: "#",
};
