import FeatureSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/Mission";
import StorySection from "../components/StorySection";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#0F172A] overflow-hidden">
      <HeroSection />
      <StorySection/>
      <FeatureSection/>
      <MissionSection/>
    </main>
  );
};

export default AboutPage;