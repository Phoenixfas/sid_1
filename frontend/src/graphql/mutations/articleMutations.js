import { gql } from "@apollo/client";

const ADD_ARTICLE = gql`
  mutation AddArticle(
    $title: String!
    $image: String!
    $desc: String!
    $markdown: String!
    $categoryId: ID!
  ) {
    addArticle(
      title: $title
      image: $image
      desc: $desc
      markdown: $markdown
      categoryId: $categoryId
    ) {
      id
      title
      image
      desc
      sanitizedHtml
      category {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_ARTICLE = gql`
  mutation UpdateArticle(
    $id: ID!
    $title: String!
    $image: String!
    $desc: String!
    $markdown: String!
    $categoryId: ID!
  ) {
    updateArticle(
      id: $id
      title: $title
      image: $image
      desc: $desc
      markdown: $markdown
      categoryId: $categoryId
    ) {
      id
      title
      image
      desc
      sanitizedHtml
      category {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;

export { ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE };
