
import Homee from "@/components/home";
import About from "@/components/about";
import Skills from "@/components/skiils";
import SectionDivider from "@/components/ui/sectionDivider";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const Dynamic = dynamic(() => import("@/components/experience"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mt-8">
      <Homee />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Dynamic />
      <Footer />
    </main>
  );
}
