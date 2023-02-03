import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials {
      data {
        attributes {
          name
          title
          description
        }
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
