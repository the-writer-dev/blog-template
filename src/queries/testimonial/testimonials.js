import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials {
      data {
        attributes {
          name
          title
          preview
          description
        }
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
