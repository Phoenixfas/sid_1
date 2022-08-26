import { GET_TWEETS } from "../graphql/queries/twitterQueries"
import { useQuery } from "@apollo/client"
import Spinner from "./Spinner"
import TweetRow from "./TweetRow"

export default function Tweets() {
    const { loading, error, data } = useQuery(GET_TWEETS)

    if(loading) return <Spinner />
    if(error) return <p>Couldn't fetch tweets.</p>
    
  return (
    <>
        {!loading && !error && (
            <div className="twitter">
                {data && data.tweets.map((tweet) => (
                    <TweetRow key={tweet.id} tweet={tweet} />
                ))}
            </div>
        )}
    </>
  )
}
