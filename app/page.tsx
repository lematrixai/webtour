import HeroSection from "@/components/Hero-section";
import SearchBar from "@/components/search-bar";
import TopDestinations from "@/components/Top-destinations";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import TopTour from "@/components/top-tour";
import BannerFlex from "@/components/banner-flex";
import BannerCancel from "@/components/banner-cancel";
import ExploreGallery from "@/components/explore-gallery";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="bg-[#003A56]">
    <HeroSection />
    <SearchBar />
    <TopDestinations />
    <WhyBookWithUs />
    <TopTour />
    <BannerFlex />
    <ExploreGallery />
    <BannerCancel />
    <CTA />
    </div>
  );
}
