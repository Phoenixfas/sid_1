import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_TWEET } from "../graphql/mutations/twitterMutations" 
import { GET_TWEETS } from "../graphql/queries/twitterQueries" 

export default function NewTweet() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [text, setText] = useState("")

    const [addTweet] = useMutation(ADD_TWEET, {
        variables: { name, image, text },
        update(cache, { data: { addTweet } }) {
            const { tweets } = cache.readQuery({ query: GET_TWEETS })
            cache.writeQuery({
                query: GET_TWEETS,
                data: { tweets: [...tweets, addTweet]},
            })
    }})

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === "" || image === "" || text === "") {
            alert("Please fill in all fields")
        }

        addTweet(name, image, text)
        setName("")
        setImage("")
        setText("")
    }


  return (
    <div className='new__input'>
        <form onSubmit={onSubmit}>
            <input placeholder="Enter Name" type="text" name='name' id='name' value={name} onChange={(e)=> setName(e.target.value)} required />
            <input placeholder="Enter Profile Picture Link" type="text" name='image' id='image' value={image} onChange={(e)=> setImage(e.target.value)} required />
            <textarea placeholder="Enter Tweet" type="text" name='text' id='text' value={text} onChange={(e)=> setText(e.target.value)} required />
            <button style={{borderRadius: "5px", marginTop: "5px"}} className="btn-green" type="submit" >Add Tweet</button>
        </form>
    </div>
  )
}
