import { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_ARTICLE } from "../graphql/queries/articleQueries"
import { UPDATE_ARTICLE } from "../graphql/mutations/articleMutations" 

export default function EditArticleForm({article}) {
    const [title, setTitle] = useState(article.title)
    const [image, setImage] = useState(article.image)
    const [desc, setDesc] = useState(article.desc)
    const [markdown, setMarkdown] = useState("")
    const [categoryId, setCategoryId] = useState(article.categoryId)


    const [updateArticle] = useMutation(UPDATE_ARTICLE, {
        variables: {
            id: article.id,
            title,
            image,
            desc,
            markdown
        },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
    })


  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="newArticle__input">
                <label>Title</label>
                <input placeholder="Enter Article Title" type="text" className="" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div className="newArticle__input">
                <label>Image Link</label>
                <input placeholder="Enter Article Cover Image Link" type="text" className="" id="image" value={image} onChange={(e)=> setImage(e.target.value)} />
            </div>
            <div className="newArticle__input">
                <label>Description</label>
                <textarea placeholder="Enter Article Description" className="" id="desc" value={desc} onChange={(e)=> setDesc(e.target.value)} ></textarea>
            </div>
            <div className="newArticle__input">
                <label>Details (write in markdown)</label>
                <textarea style={{ minHeight: "200px" }} placeholder="Enter Article Details using markdown language" className="" id="markdown" value={markdown} onChange={(e)=> setMarkdown(e.target.value)} ></textarea>
            </div>
            <div className="newArticle__input">
                <label>Category</label>
                <select className="" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    <option>Select Category</option>
                    {data.categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}
