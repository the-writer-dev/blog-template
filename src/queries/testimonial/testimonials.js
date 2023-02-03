import gql from "graphql-tag";

const TESTIMONIALS_QUERY = gql`
  query Testimonials {
    testimonials(sort: "published:desc") {
      data {
        attributes {
          name
          title
          description
          published
        }
      }
    }
  }
`;

export default TESTIMONIALS_QUERY;
