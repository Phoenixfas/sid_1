import "./Dashboard.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Articles from "../components/Articles"
import Categories from "../components/Categories"
import Tweets from "../components/Tweets"
import NewCategory from "../components/NewCategory"
import NewTweet from "../components/NewTweet"
import Admins from "../components/Admins"

export default function Dashboard() {
  const navigate = useNavigate()

  const {admin} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!admin){
      navigate("/login")
    }
  }, [admin, navigate])

  return (
    <div className="container">
      <div className="article__container">
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>ARTICLES</h1>
          <Articles />
          <div className="new__input">
            <button style={{width: "100%", color: "#fff", cursor: "pointer"}} onClick={() => navigate("/new-article")} >New Article</button>
          </div>
        </div>
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>CATEGORIES</h1>
          <Categories />
          <NewCategory />
        </div>
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>TWEETS</h1>
          <Tweets />
          <NewTweet />
        </div>
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>ADMINISTRATORS</h1>
          <Admins />
          <div className="new__input">
            <button style={{width: "100%", color: "#fff", cursor: "pointer"}} onClick={() => navigate("/register")} >New Admin</button>
          </div>
        </div>
      </div>
    </div>
  )
}
