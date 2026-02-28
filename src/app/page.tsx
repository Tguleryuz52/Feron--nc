import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
import StackedSection from "@/components/StackedSection";

export default function Home() {
  return (
    <main className="bg-black">
      <StackedSection>
        <Hero />
      </StackedSection>
      <StackedSection isSticky={false}>
        <Footer />
      </StackedSection>
    </main>
  );
}
