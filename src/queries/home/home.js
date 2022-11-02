import gql from "graphql-tag";

const HOME_QUERY = gql`
  query Homes {
    homes {
      data {
        attributes {
          intro
        }
      }
    }
  }
`;

export default HOME_QUERY;
