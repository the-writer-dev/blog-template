import React from "react";
import ReactMarkdown from "react-markdown";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div>
            <div className="uk-card uk-card-muted">
              <div className="uk-card-body">
                <h1>{project.attributes.name}</h1>
                <p>
                  {project.attributes.description}
                </p>
                <ReactMarkdown
                  children={project.attributes.content}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
