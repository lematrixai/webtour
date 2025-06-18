import HeroSection from "@/components/Hero-section";
import SearchBar from "@/components/search-bar";
import TopDestinations from "@/components/Top-destinations";

export default function Home() {
  return (
    <div className="bg-[#003A56]">
    <HeroSection />
    <SearchBar />
    <TopDestinations />
    </div>
  );
}
