import { gql } from "@apollo/client";

const GET_ADMINS = gql`
  query getAdmins {
    admins {
      _id
      name
      email
    }
  }
`;

export { GET_ADMINS };
