import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_ARTICLE } from "../graphql/mutations/articleMutations";
import { GET_ARTICLES } from "../graphql/queries/articleQueries";

export default function ArticleRow({article}) {
  const [deleteArticle] = useMutation(DELETE_ARTICLE, {
    variables: {id: article.id},
    refetchQueries: [{query: GET_ARTICLES}]
});

  return (
    <div className="article__row" >
        <p>{article.title}</p>
        <p>{new Date(parseInt(article.createdAt)).toDateString()}</p>
        <p>{new Date(parseInt(article.updatedAt)).toDateString()}</p>
          <button className="btn-delete" onClick={deleteArticle} ><FaTrash /></button>
    </div>
  )
}
