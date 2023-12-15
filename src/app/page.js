import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import styles from "./home.module.css";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-bg w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className={styles.wrapper}>
        <Skills />
      </div>
      <Projects />
      <div className={styles.wrapper}>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}
