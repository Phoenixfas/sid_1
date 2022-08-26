import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import {DELETE_CATEGORY} from "../graphql/mutations/categoryMutations" 
import { GET_CATEGORIES } from '../graphql/queries/categoryQueries';
import { GET_ARTICLES } from '../graphql/queries/articleQueries';

export default function CategoryRow({category}) {
    const [deleteCategory] = useMutation(DELETE_CATEGORY, {
        variables: {id: category.id},
        refetchQueries: [{query: GET_CATEGORIES}, {query: GET_ARTICLES}]
    });
  return (
    <>
        <div key={category.id} className="article__row" >
            <p>{category.name}</p>
            <button className='btn-delete' onClick={deleteCategory}><FaTrash /></button>
        </div>
    </>
  )
}
