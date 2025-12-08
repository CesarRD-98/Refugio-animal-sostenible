import { Hero } from "./components/hero";
import { AnimalsSection } from "./components/animals";
import { Help } from "./components/help";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { TopBanner } from "./components/topBanner";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <TopBanner />
      <Header />
      <Hero />
      <AnimalsSection />
      <Help />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
