import { gql } from "@apollo/client";

const GET_TWEETS = gql`
  query getTweets {
    tweets {
      id
      name
      image
      text
    }
  }
`;

const GET_TWEET = gql`
  query getTweet($id: ID!) {
    tweet(id: $id) {
      id
      name
      image
      text
    }
  }
`;

export { GET_TWEETS, GET_TWEET };
