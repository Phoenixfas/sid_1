import {FaTrash} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_TWEET } from "../graphql/mutations/twitterMutations"
import { GET_TWEETS } from '../graphql/queries/twitterQueries';

export default function TweetRow({tweet}) {
    const [deleteTweet] = useMutation(DELETE_TWEET, {
        variables: {id: tweet.id},
        refetchQueries: [{query: GET_TWEETS}]
    });
  return (
    <>
        <div className="tweet">
            <div className="tweet__header">
                <img src={tweet.image} alt="profile" />
                <p>{tweet.name}</p>
            </div>
            <p>{tweet.text}</p>
            <button className='btn-delete' onClick={deleteTweet} ><FaTrash /></button>
        </div>
    </>
  )
}
