import React from "react";
import Projects from "../../components/Projects";
import Query from "../../components/Query";
import PROJECTS_QUERY from "../../queries/project/projects";
import { motion } from "framer-motion";

const ProjectsContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={PROJECTS_QUERY}>
            {({ data: { projects } }) => {
              return <Projects projects={projects.data} />;
            }}
          </Query>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsContainer;
