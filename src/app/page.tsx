import {
  HeroSection,
  CountdownBanner,
  ProductShowcase,
  EditorialBanner,
  CollectionExplore,
  LoyaltyCTA,
} from "@/features/home";
import { homeProductSections } from "@/features/products/data/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownBanner />
      {homeProductSections.map((section) => (
        <ProductShowcase key={section.id} section={section} />
      ))}
      <EditorialBanner />
      <CollectionExplore />
      <LoyaltyCTA />
    </>
  );
}
