import Image from "next/image";
import HeroSection from "../components/layout/herosection";
import Navbar from "../components/layout/navbar";
import PageContent from "../components/layout/body";
import PageFooter from "../components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans gap-2 p-2">
      <HeroSection />
      <PageContent />
      <PageFooter />
    </div>
  );
}
