import { Hero } from "./components/hero";
import { AnimalsSection } from "./components/animals";
import { Help } from "./components/help";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { TopBanner } from "./components/topBanner";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { HowItWorks } from "./components/howItWorks";
import { Transparency } from "./components/transparency";
import { ScrollToTop } from "./components/scrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
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
      <ScrollToTop />
      <Footer />
    </main>
  );
}
