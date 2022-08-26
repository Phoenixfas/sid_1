import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_ADMIN } from "../graphql/mutations/adminMutations"
import { GET_ADMINS } from '../graphql/queries/adminQueries';

export default function AdminRow({ admin }) {
    const [deleteAdmin] = useMutation(DELETE_ADMIN, {
        variables: {id: admin._id},
        refetchQueries: [{query: GET_ADMINS}]
    });
  return (
    <>
        <div className="article__row" >
            <p>{admin.name}</p>
            <p>{admin.email}</p>
            <p></p>
            <button className='btn-delete' onClick={deleteAdmin}><FaTrash /></button>
        </div>
    </>
  )
}
