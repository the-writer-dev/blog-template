import gql from "graphql-tag";

const MENUS_QUERY = gql`
  query Menus {
    menus {
      data {
        attributes {
          slug
          name
        }
      }
    }
  }
`;

export default MENUS_QUERY;
