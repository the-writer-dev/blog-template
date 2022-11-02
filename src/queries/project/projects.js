import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      data {
        attributes {
          name 
          description
          content
        }
      }
    }
  }
`;

export default PROJECTS_QUERY;
