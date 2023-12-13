import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Tags from "../Tags/Tags";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className={styles.project_card}
      onClick={() => setOpenModal({ state: true, project })}
    >
      <img src={project.image} alt="img" width={330} height={180} />
      <Tags project={project} />
      <div className="grow">
        <ProductDetails project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
