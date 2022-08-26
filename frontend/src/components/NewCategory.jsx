import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_CATEGORY } from "../graphql/mutations/categoryMutations"
import { GET_CATEGORIES } from "../graphql/queries/categoryQueries" 

export default function NewCategory() {
    const [name, setName] = useState("")

    const [addCategory] = useMutation(ADD_CATEGORY, {
        variables: { name },
        update(cache, { data: { addCategory } }) {
            const { categories } = cache.readQuery({ query: GET_CATEGORIES })
            cache.writeQuery({
                query: GET_CATEGORIES,
                data: { categories: [...categories, addCategory]},
            })
    }})

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === "") {
            alert("Please fill in all fields")
        }

        addCategory(name)
        setName("")
    }


  return (
    <div className='new__input'>
        <form onSubmit={onSubmit}>
            <input placeholder="Enter Category Name" type="text" name='category' id='category' value={name} onChange={(e)=> setName(e.target.value)} required />
            <button className="btn-green" type="submit" >Add Category</button>
        </form>
    </div>
  )
}
