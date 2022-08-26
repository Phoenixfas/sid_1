// import "../pages/Dashboard.css"
import { useQuery } from "@apollo/client"
import { GET_ADMINS } from "../graphql/queries/adminQueries"
import AdminRow from "./AdminRow"
import Spinner from "./Spinner"

export default function Admins() {
    const { loading, error, data } = useQuery(GET_ADMINS)

    if(error) return <p>Error</p>
    if(loading) return <Spinner />


    return (
        <>
        {!loading && !error && (
            <div className="table">
                <div className="article__table__heading">
                    <p>name</p>
                    <p>Email</p>
                    <p></p>
                </div>
                {data && data.admins.map(admin => (
                    <AdminRow key={admin._id} admin={admin} />
                ))}
            </div>
        )}
        </>
    )
}
