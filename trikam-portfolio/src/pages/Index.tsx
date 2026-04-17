import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import HackathonsSection from "@/components/HackathonsSection";
import AchievementsSection from "@/components/AchievementsSection";
import FigmaSection from "@/components/FigmaSection";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // If we're at a sub-route (e.g., /about), scroll to that section
    if (pathname !== "/" && pathname !== "") {
      const sectionId = pathname.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're at home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <HackathonsSection />
      <AchievementsSection />
      <FigmaSection />
      <GitHubStatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
