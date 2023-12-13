import Image from "next/image";
import styles from "./skill.module.css";
const Skill = ({ skills }) => {

  return (
    <div className={styles.skill}>
      <h2 className="text-[28px] font-semibold text-text_secondary mb-5 text-center">
        {skills.title}
      </h2>
      <div className="flex justify-center flex-wrap gap-3 mb-5">
        {skills.skills.map((skill) => (
          <div className={styles.skill_item} key={skill}>
            <Image width={24} height={24} src={skill.image} alt="img" />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
