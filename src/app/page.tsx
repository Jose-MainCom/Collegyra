
import CollaboratorsSection from "../components/CollaboratorsSection";
import CommunitySection from "../components/CommunitySection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OpportunitiesSection from "../components/OpportunitiesSection";
import ProjectsSection from "../components/ProjectsSection";
import RegistrationSection from "../components/RegistrationSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CollaboratorsSection />
        <SkillsSection />
        <OpportunitiesSection />
        <CommunitySection />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
