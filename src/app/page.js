import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import styles from "./home.module.css";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="bg-bg w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className={styles.wrapper}>
        <Skills />
      </div>
    </div>
  );
}
