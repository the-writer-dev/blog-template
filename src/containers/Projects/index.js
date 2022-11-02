import React from "react";
import Projects from "../../components/Projects";
import Query from "../../components/Query";
import PROJECTS_QUERY from "../../queries/project/projects";

const ProjectsContainer = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={PROJECTS_QUERY}>
            {({ data: { projects } }) => {
              return <Projects projects={projects.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
