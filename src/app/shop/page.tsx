import ShopHeader from "@/components/ShopHeader";
import ShopSection from "@/components/sections/ShopSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <main className="bg-white">
      <ShopHeader />
      <ShopSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
