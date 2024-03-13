import About from "@/components/About";
import BountyBanner from "@/components/BountyBanner";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="z-50 relative scroll-smooth top-0">
      <Header />
      <Hero />
      <About />
      <BountyBanner />
      <Sponsors />
      <FAQs />
      <Footer />
    </main>
  );
}
