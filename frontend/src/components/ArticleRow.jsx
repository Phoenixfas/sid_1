import { useNavigate } from "react-router-dom";

export default function ArticleRow({article}) {
    const navigate = useNavigate()

  return (
    <div className="article__row" onClick={() => navigate("/register")}>
        <p>{article.title}</p>
        <p>{new Date(parseInt(article.createdAt)).toDateString()}</p>
        <p>{new Date(parseInt(article.updatedAt)).toDateString()}</p>
    </div>
  )
}
