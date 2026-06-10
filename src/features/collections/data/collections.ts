import type { Collection } from "../types/collection.types";

export const featuredCollections: Collection[] = [
  {
    slug: "arc-4",
    name: "ARC-4",
    description: "Technical outerwear engineered for modern movement.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
    href: "/collections/arc-4",
  },
  {
    slug: "prestige",
    name: "Prestige 2.0",
    description: "Exclusive rewards for our most loyal community.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    href: "/collections/prestige",
  },
  {
    slug: "ss26",
    name: "SS26",
    description: "Spring Summer '26 — Dream On collection.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
    href: "/collections/ss26",
  },
  {
    slug: "247",
    name: "247",
    description: "Performance activewear for the hybrid athlete.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    href: "/collections/247",
  },
];

export const collectionDetails: Record<string, Collection & { heroImage: string }> = {
  "owners-club": {
    slug: "owners-club",
    name: "Owners Club",
    description: "Premium essentials with refined detailing and elevated fabrics.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1600&q=80",
    href: "/collections/owners-club",
  },
  initial: {
    slug: "initial",
    name: "Initial",
    description: "Everyday staples designed for comfort and versatility.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&q=80",
    href: "/collections/initial",
  },
  "247": {
    slug: "247",
    name: "247 Activewear",
    description: "Built for training, running, and everything in between.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80",
    href: "/collections/247",
  },
  ss26: {
    slug: "ss26",
    name: "Spring Summer '26",
    description: "Dream On — a collection inspired by tour culture and Americana.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
    href: "/collections/ss26",
  },
  nfl: {
    slug: "nfl",
    name: "FLOW × NFL",
    description: "Fanatics Presents — limited collaboration collection.",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1600&q=80",
    href: "/collections/nfl",
  },
};
