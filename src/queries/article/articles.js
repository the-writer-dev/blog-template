import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles(sort: "published:desc") {
      data {
        attributes {
          slug
          title
          published
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;
