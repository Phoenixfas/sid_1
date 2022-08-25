import { GET_TWEETS } from "../graphql/queries/twitterQueries"
import { useQuery } from "@apollo/client"
import Spinner from "./Spinner"

export default function Tweets() {
    const { loading, error, data } = useQuery(GET_TWEETS)

    if(loading) return <Spinner />
    if(error) return <p>Couldn't fetch tweets.</p>
    
  return (
    <>
        {!loading && !error && (
            <div className="twitter">
                {data && data.tweets.map((tweet) => (
                    <div className="tweet">
                        <div className="tweet__header">
                            <img src="https://picsum.photos/200" alt="profile" />
                            <p>John Doe</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, veritatis. Officia minus nesciunt possimus veniam id explicabo dolore ipsam quae.</p>
                    </div>
                ))}
            </div>
        )}
    </>
  )
}
