import { Hero } from "./components/hero";
import { About } from "./components/about";
import { AnimalsSection } from "./components/animals";
import { Help } from "./components/help";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { TopBanner } from "./components/topBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900">
      <TopBanner />
      <Header />
      <Hero />
      <AnimalsSection />
      <Help />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
