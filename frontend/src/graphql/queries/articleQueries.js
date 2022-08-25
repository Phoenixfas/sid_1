import { gql } from "@apollo/client";

const GET_ARTICLES = gql`
  query getArticles {
    articles {
      id
      title
      image
      desc
      markdown
      category {
        id
        name
      }
      sanitizedHtml
      createdAt
      updatedAt
    }
  }
`;

const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      image
      desc
      markdown
      category {
        id
        name
      }
      sanitizedHtml
      createdAt
      updatedAt
    }
  }
`;

export { GET_ARTICLES, GET_ARTICLE };
