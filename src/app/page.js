import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-bg w-full overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
