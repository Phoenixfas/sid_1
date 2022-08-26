import { gql } from "@apollo/client";

const DELETE_ADMIN = gql`
  mutation DeleteAdmin($id: ID!) {
    deleteAdmin(_id: $id) {
      _id
    }
  }
`;

export { DELETE_ADMIN };
