import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { StorySection } from "@/components/home/StorySection";
import { Testimonials } from "@/components/home/Testimonials";
import { VideoSection } from "@/components/home/VideoSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="space-y-24 pb-8 pt-16 sm:space-y-28 sm:pt-20">
        <ProductGrid
          id="featured"
          products={products}
          heading="Featured"
          subheading="Hand-blended oils from our latest run—organic botanicals, cold-pressed, and made for real wash days."
        />
        <BenefitsSection />
        <StorySection />
        <VideoSection />
        <Testimonials />
        <InstagramGallery />
      </div>
    </>
  );
}
