export const FLOW_CONTACT = {
  name: "FLOW",
  phone: "0123 456 789",
  email: "contact@flow.vn",
} as const;

export const FLOW_SOCIAL_LINKS = {
  instagram: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
  tiktok: "https://www.tiktok.com",
  youtube: "https://www.youtube.com",
} as const;

export const WAKE360_ASSETS = {
  heroVideo: "https://wake360.vn/wp-content/uploads/2026/06/SUMMER-26WEB-HD-1080p-1.mov",
  shopTile: "https://wake360.vn/wp-content/uploads/2026/01/SHOP-1.jpg",
  aboutTile: "https://wake360.vn/wp-content/uploads/2026/06/IMG_0793-Edit.jpg",
  communityTile: "https://wake360.vn/wp-content/uploads/2025/06/3-COMMUNITY.jpg",
} as const;

export type Wake360Product = {
  id: string;
  name: string;
  href: string;
  price: number;
  image: string;
  hoverImage?: string;
  sizes: string[];
};

export const wake360ShopByCollection = [
  {
    label: "DAILY",
    href: "/daily",
    image: "https://wake360.vn/wp-content/uploads/2025/06/1-DAILY-1.jpg",
  },
  {
    label: "TRAINING",
    href: "/training",
    image: "https://wake360.vn/wp-content/uploads/2025/06/2-TRAINING.jpg",
  },
  {
    label: "RACE",
    href: FLOW_SOCIAL_LINKS.instagram,
    image: "https://wake360.vn/wp-content/uploads/2025/06/3-RACE-1.jpg",
    external: true,
  },
] as const;

export const wake360CollectionBanners = [
  {
    label: "DAILY",
    href: "/daily",
    image: "https://wake360.vn/wp-content/uploads/2025/06/1-DAILY.jpg",
  },
  {
    label: "TRAINING",
    href: "/training",
    image: "https://wake360.vn/wp-content/uploads/2025/03/1-CLT.webp",
  },
  {
    label: "RACE",
    href: FLOW_SOCIAL_LINKS.instagram,
    image: "https://wake360.vn/wp-content/uploads/2025/06/3-RACE.jpg",
    external: true,
  },
] as const;

export const wake360SocialImages = [
  "https://wake360.vn/wp-content/uploads/2025/06/1-4.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/2-3.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/5-3.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/4-3.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/5-1-1.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/6-2.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/7.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/8.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/9.jpg",
  "https://wake360.vn/wp-content/uploads/2025/06/10.jpg",
  "https://wake360.vn/wp-content/uploads/2026/01/Artboard-1-4.jpg",
  "https://wake360.vn/wp-content/uploads/2026/01/Artboard-2-4.jpg",
] as const;

export const wake360Nav = [
  { label: "SHOP", href: "/cua-hang" },
  { label: "ABOUT US", href: "/ve-flow" },
  {
    label: "COLLECTION",
    href: "/collection",
    children: [
      { label: "Daily", href: "/daily" },
      { label: "Training", href: "/training" },
    ],
  },
  { label: "TRAINING CLUB", static: true },
  { label: "CONTACT", href: "/lien-he" },
] as const;
