import styles from "./Details.module.css";
const ProductDetails = ({ project }) => {
  return (
    <div className="w-full flex flex-col gap-0 px-[2px]">
      <div className={styles.title}>{project.title}</div>
      <div className="text-[10px] lg:text-xs ml-[2px] text-text_secondary">
        {project.date}
      </div>
      <div className={styles.description}>{project.description}</div>
    </div>
  );
};

export default ProductDetails;
