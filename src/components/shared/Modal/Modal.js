import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import Tags from "../Tags/Tags";
import styles from "./Model.module.css";
const ProjectModal = ({ project, setOpenModal }) => {
  return (
    <Modal open={true}>
      <div className={styles.model_container}>
        <div className={styles.model_wrapper}>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            className="w-full object-cover rounded-xl mt-7 shadow"
          />
          <h1 className="text-[28px] font-semibold text-text_primary m-2">
            {project?.title}
          </h1>
          <div className="text-xs lg:text-base m-1 text-text_primary">
            {project?.date}
          </div>
          <Tags project={project} />
          <div className="text-sm lg:text-base text-text_primary my-2 mx-[6px]">
            {project?.description}
          </div>
          {/* buttons */}
          <div className="flex justify-end my-3 gap-3">
            <a
              href="/"
              target="_blank"
              className="w-full text-center text-xs lg:text-base font-semibold text-text_primary py-3 px-4 
              transition-colors rounded-lg  bg-bg hover:bg-primary"
            >
              View Frontend Code
            </a>
            {project?.github_server && (
              <a
                href={project?.github_server}
                target="_blank"
                className="w-full text-center text-xs lg:text-base font-semibold text-text_primary py-3 px-4 rounded-lg
              transition-colors bg-bg hover:bg-primary"
              >
                View Backend Code
              </a>
            )}

            <a
              href="/"
              target="_blank"
              className="w-full text-center text-xs lg:text-base font-semibold text-text_primary py-3 px-4 rounded-lg bg-primary
              transition-colors hover:bg-bg"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
