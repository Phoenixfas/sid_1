import "./Dashboard.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Articles from "../components/Articles"
import Categories from "../components/Categories"
import Tweets from "../components/Tweets"

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
        </div>
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>CATEGORIES</h1>
          <Categories />
        </div>
        <div className="box">
          <h1 style={{fontWeight: "lighter"}}>Tweets</h1>
          <Tweets />
        </div>
      </div>
    </div>
  )
}
