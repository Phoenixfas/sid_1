import "./EditArticle.css"
import { useParams, Link } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ARTICLE } from "../graphql/queries/articleQueries"
import Spinner from "../components/Spinner"

export default function EditArticle() {
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_ARTICLE, {
        variables: { id }
    })

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

  return (
    <div className="container">
        {!loading && !error && (
            <div className="editArticle">
                <Link to="/" className="back-btn">Back</Link>
                <div className="edit">
                    <div className="edit__left">
                        <h2>{data.article.title}</h2>
                        <p><b>Created at : </b>{ new Date(parseInt(data.article.createdAt)).toDateString() } </p> 
                        <p><b>Updated at : </b> { new Date(parseInt(data.article.updatedAt)).toDateString() } </p>
                        <img src={data.article.image} alt={data.article.title} />
                        <p>{data.article.desc}</p>
                        <div dangerouslySetInnerHTML={{ __html: data.article.sanitizedHtml}} ></div>
                        <p><b>Categoty : </b> {data.article.category.name} </p>
                    </div>
                    <div className="edit__right">
                        <h4>Edit Article Form</h4>
                        {/* <EditArticleForm article={data.article} /> */}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
