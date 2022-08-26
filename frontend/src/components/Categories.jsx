import { useQuery } from "@apollo/client"
import { GET_CATEGORIES } from "../graphql/queries/categoryQueries"
import CategoryRow from "./CategoryRow"
import Spinner from "./Spinner"

export default function Categories() {
    const { loading, error, data } = useQuery(GET_CATEGORIES)

    if(error) return <p>Error</p>
    if(loading) return <Spinner />


  return (
    <>
        {!loading && !error && (
            <div className="table">
                <div className="article__table__heading">
                    <p>Name</p>
                </div>
                {data && data.categories.map(category => (
                    <CategoryRow category={category} key={category.id} />
                ))}
            </div>
        )}
    </>
  )
}
