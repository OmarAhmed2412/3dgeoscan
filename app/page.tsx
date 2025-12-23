import Hero from "@/components/home/hero";
import Features from "@/components/home/about";
import StatsSection from "@/components/home/stats-section";
import Services from "@/components/home/services";
import Projects from "@/components/home/projects";
import Solutions from "@/components/home/vision";
import Contact from "@/components/home/contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <StatsSection/>
      <Solutions />
      <Services />
      <Projects />
      <Contact />
      
    </>
  );
}