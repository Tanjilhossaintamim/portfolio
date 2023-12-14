"use client";
import { projects } from "@/utils/data";
import GroupButton from "../shared/ButtonGroup/GroupBtn";
import Discription from "../shared/Description/Discription";
import Title from "../shared/Title/Title";
import styles from "./project.module.css";
import ProjectCard from "../shared/ProjectCard/ProjectCard";
import ProjectModal from "../shared/Modal/Modal";
import { useState } from "react";

const Projects = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className={styles.project_container} id="Projects">
        <div className={styles.wrapper}>
          <Title label="Projects" />
          <Discription text="I have worked on a wide range of projects." />
          {/* button group */}
          <GroupButton activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex justify-center items-center gap-7 flex-wrap">
            {activeTab == "All" &&
              projects.map((project) => (
                <ProjectCard
                  key={project}
                  project={project}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category == activeTab)
              .map((project) => (
                <ProjectCard
                  key={project}
                  project={project}
                  setOpenModal={setOpenModal}
                />
              ))}
          </div>
        </div>
      </div>

      {openModal.state && (
        <ProjectModal project={openModal.project} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Projects;
