import { TopBanner } from "./components/topBanner";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AnimalsSection } from "./components/animals";
import { HowItWorks } from "./components/howItWorks";
import { Help } from "./components/help";
import { Testimonials } from "./components/testimonials";
import { Transparency } from "./components/transparency";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { ScrollToTop } from "./components/scrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen text-stone-800 bg-white">
      <TopBanner />
      <Header />
      <Hero />
      <AnimalsSection />
      <HowItWorks />
      <Help />
      <Testimonials />
      <Transparency />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
