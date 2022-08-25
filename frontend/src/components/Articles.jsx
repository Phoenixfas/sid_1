// import "../pages/Dashboard.css"
import { useQuery } from "@apollo/client"
import { GET_ARTICLES } from "../graphql/queries/articleQueries"
import ArticleRow from "./ArticleRow"
import Spinner from "./Spinner"

export default function Articles() {
    const { loading, error, data } = useQuery(GET_ARTICLES)

    if(error) return <p>Error</p>
    if(loading) return <Spinner />


    return (
        <>
        {!loading && !error && (
            <div className="table">
                <div className="article__table__heading">
                    <p>Title</p>
                    <p>Created At</p>
                    <p>Updated At</p>
                </div>
                {data && data.articles.map(article => (
                    <ArticleRow key={article.id} article={article} />
                ))}
            </div>
        )}
        </>
    )
}
