import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FigmaSection from "@/components/FigmaSection";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { pathname } = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return !sessionStorage.getItem("hasSeenIntro");
    } catch {
      return false;
    }
  });

  // Prevent background scroll while the intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  useEffect(() => {
    // Wait until intro is dismissed before scrolling to targets
    if (showIntro) return;

    // If we're at a sub-route (e.g., /about, /hackathons, /achievements), scroll to that section
    if (pathname !== "/" && pathname !== "") {
      const sectionId = pathname.slice(1);
      const scrollToTarget = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      // Immediate scroll attempt
      scrollToTarget();

      // Second attempt after layout stabilizes on initial page load / asset render
      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, showIntro]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen key="intro-screen" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <AchievementsSection />
        <CertificationsSection />
        <FigmaSection />
        <GitHubStatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
