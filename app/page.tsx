import HeroSection from "@/components/Hero-section";
import SearchBar from "@/components/search-bar";
import TopDestinations from "@/components/Top-destinations";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import TopTour from "@/components/top-tour";
import BannerFlex from "@/components/banner-flex";
import BannerCancel from "@/components/banner-cancel";
import ExploreGallery from "@/components/explore-gallery";
import CTA from "@/components/cta";
import motion from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#003A56]">
      <HeroSection />
      <div className="bg-[#01293C]" id="below-hero">
        <SearchBar />
      </div>
      <div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TopDestinations />
      </motion.div>
      </div>
<div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhyBookWithUs />
      </motion.div>
      </div>
<div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TopTour />
      </motion.div>
      </div>
      <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <BannerFlex />
      </motion.div>
      </div>
      <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ExploreGallery />
      </motion.div>
      </div>
      <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <BannerCancel />
      </motion.div>
      </div>
      <div>
      <motion.div
        className='py-20 max-md:py-10'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTA />
      </motion.div>
      </div>
    </div>
  );
}
