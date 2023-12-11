import { Bio } from "@/utils/data";
import styles from "./Hero.module.css";
import HeroAnimation from "./HeroAnimation";
import SimpleTypeWriter from "./TypeWriter";
import Image from "next/image";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <div id="About">
      <div className={styles.hero}>
        <div className={styles.hero_bg}>
          <HeroAnimation />
        </div>
        <div className={styles.hero_inner}>
          <div className={styles.hero_left}>
            <div className="font-bold text-[40px] text-center lg:text-left leading-[68px] lg:text-[50px] text-text_primary  ">
              Hi, I am <br /> {Bio.name}
            </div>
            {/* text loop */}
            <div className={styles.text_loop}>
              I am a{" "}
              <span className="cursor-pointer text-primary">
                <SimpleTypeWriter />
              </span>
            </div>

            {/* description */}
            <div className="text-xl leading-[32px] mb-8 text-[#BBBCBD]">
              {Bio.description}
            </div>
            <a
              href="https://drive.google.com/file/d/1Ne66SkSV6oQ-B1Yh-pu6WBgU4a_HedFG/view?usp=sharing"
              target="_blank"
              className={styles.resume_btn}
            >
              Check Resume
            </a>
          </div>

          {/* right side */}
          <div className={styles.right_side}>
            <Image
              src={heroImg}
              alt="Image"
              width={300}
              height={300}
              className={styles.hero_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
