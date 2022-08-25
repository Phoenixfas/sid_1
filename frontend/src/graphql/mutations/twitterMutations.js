import { gql } from "@apollo/client";

const ADD_TWEET = gql`
  mutation AddTweet($name: String!, $image: String!, $text: String!) {
    addTweet(name: $name, image: $image, text: $text) {
      id
      name
      image
      text
    }
  }
`;

const DELETE_TWEET = gql`
  mutation DeleteTweet($id: ID!) {
    deleteTweet(id: $id) {
      id
    }
  }
`;

export { ADD_TWEET, DELETE_TWEET };
