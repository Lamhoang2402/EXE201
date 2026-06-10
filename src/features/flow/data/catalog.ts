import type { Wake360Product } from "@/features/wake360/data/homeContent";
import { slugifyProductName } from "@/features/flow/data/catalogHelpers";

export type FlowCollection = "daily" | "training";

export type FlowProductDetails = {
  sku: string;
  material: string;
  features: string[];
  form: string;
  weight: string;
  modelNote: string;
};

type FlowCatalogProductBase = Omit<Wake360Product, "href"> & {
  collection: FlowCollection;
  details?: Partial<FlowProductDetails>;
};

export type FlowCatalogProduct = Wake360Product & {
  slug: string;
  collection: FlowCollection;
  details: FlowProductDetails;
};

const defaultDetails: FlowProductDetails = {
  sku: "TCH",
  material: "2-Way 100% Cotton",
  features: ["Raw cut lines", "Soft touch"],
  form: "Regular",
  weight: "150 g",
  modelNote: "Model 1m75 73kg (size L)",
};

const catalogBase: FlowCatalogProductBase[] = [
  {
    id: "4397",
    name: "360 Daily Tanktop Cotton Pink",
    price: 520000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-1-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-1-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4386",
    name: "360 Daily Tanktop Cotton Mint",
    price: 520000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4408",
    name: "360 Daily Tanktop Cotton Yellow",
    price: 520000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-2-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-2-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4432",
    name: "T-Shirt Flow Division Graphite",
    price: 560000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-4-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-4-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4444",
    name: "T-Shirt Flow Division Off-White",
    price: 560000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-5-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-5-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4419",
    name: "360 Daily Shorts Divison Black",
    price: 680000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-3-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-2-3-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4273",
    name: "360 Training 2in1 Shorts White V2",
    price: 590000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-1-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-2-3-1200x1600.webp",
    sizes: ["S", "M", "L"],
  },
  {
    id: "4262",
    name: "360 Training 2in1 Shorts Black V2",
    price: 590000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-5-1200x1600.webp",
    hoverImage: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-2-1200x1600.webp",
    sizes: ["S", "M", "L"],
  },
  {
    id: "4280",
    name: "360 Training 2in1 Shorts Grey V2",
    price: 590000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-1-1200x1600.webp",
    sizes: ["S", "M", "L"],
  },
  {
    id: "4310",
    name: "360 Nylon Short Black",
    price: 550000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/05/Artboard-5-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4320",
    name: "Bandana White",
    price: 350000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2025/06/1-4.jpg",
    sizes: ["ONE"],
  },
  {
    id: "4330",
    name: "360 Water Bottle 710ml",
    price: 350000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2025/06/2-3.jpg",
    sizes: ["ONE"],
  },
  {
    id: "4340",
    name: "360 Training Arm Sleeves Black",
    price: 290000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2025/06/5-3.jpg",
    sizes: ["ONE"],
  },
  {
    id: "4350",
    name: "360 Daily Tanktop Cotton Black",
    price: 490000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2026/06/Artboard-1-1200x1600.webp",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4360",
    name: "360 Nylon Sweater Black",
    price: 760000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2025/06/6-2.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4370",
    name: "360 Longsleeve Black",
    price: 590000,
    collection: "training",
    image: "https://wake360.vn/wp-content/uploads/2025/06/7.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "4380",
    name: "360 Hoodie Black",
    price: 1250000,
    collection: "daily",
    image: "https://wake360.vn/wp-content/uploads/2025/06/8.jpg",
    sizes: ["S", "M", "L"],
  },
];

function enrichProduct(product: FlowCatalogProductBase): FlowCatalogProduct {
  const slug = slugifyProductName(product.name);
  return {
    ...product,
    slug,
    href: `/san-pham/${slug}`,
    details: { ...defaultDetails, ...product.details },
  };
}

const catalog = catalogBase.map(enrichProduct);

export const flowCatalogProducts = catalog;

export const collectionLabels: Record<FlowCollection, { label: string; href: string }> = {
  daily: { label: "Daily", href: "/daily" },
  training: { label: "Training", href: "/training" },
};

export function getProductsByCollection(collection?: FlowCollection) {
  if (!collection) return catalog;
  return catalog.filter((product) => product.collection === collection);
}

export function getFlowProductBySlug(slug: string) {
  return catalog.find((product) => product.slug === slug);
}

export function getRelatedFlowProducts(product: FlowCatalogProduct, limit = 8) {
  return catalog
    .filter((item) => item.id !== product.id && item.collection === product.collection)
    .slice(0, limit);
}
