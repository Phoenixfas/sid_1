import "./NewArticle.css"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { ADD_ARTICLE } from "../graphql/mutations/articleMutations"
import { GET_ARTICLES } from "../graphql/queries/articleQueries"
import { GET_CATEGORIES } from "../graphql/queries/categoryQueries"
import { useNavigate, Link } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function NewArticle() {

    const navigate = useNavigate()

    const {admin} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!admin){
        navigate("/login")
        }
    }, [admin, navigate])

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [desc, setDesc] = useState("")
    const [markdown, setMarkdown] = useState("")
    const [categoryId, setCategoryId] = useState("")

    const [addArticle] = useMutation(ADD_ARTICLE, {
        variables: {
            title,
            image,
            desc,
            markdown,
            categoryId
        },
        update(cache, { data: { addArticle } }) {
            const { articles } = cache.readQuery({ query: GET_ARTICLES })
            cache.writeQuery({
                query: GET_ARTICLES,
                data: { articles: [...articles, addArticle] }
            })
        }
    })


    // Get Categories for select
    const { loading, error, data } = useQuery(GET_CATEGORIES)


    const onSubmit = (e) => {
        e.preventDefault();
        if(title === "" || desc === "" || categoryId === "") {
            alert("Please fill in all fields")
        }

        addArticle(title, image, desc, markdown, categoryId)
        setTitle("")
        setImage("")
        setDesc("")
        setMarkdown("")
        setCategoryId("")
        navigate("/")
    }

    if(loading) return <Spinner />;
    if(error) return "Couldn't fetch Categories"


  return (
    <>
        {!loading && !error &&(
            <div className="container">
                <div className="newArticle">
                <Link to="/" className="back-btn">Back</Link>
                    <h1>Add New Article</h1>
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
                    <a style={{ width: "70%", color: "#000", textAlign: "right", marginTop: "30px" }} href="https://www.markdownguide.org/cheat-sheet/">Markdown Guide</a>
                </div>
            </div>
        )}
    </>
  )
}
