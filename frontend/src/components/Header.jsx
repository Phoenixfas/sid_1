import { FaSignOutAlt } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { admin } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }

  return (
    <header className="header">
        <div className="logo">
            <Link to="/">SID - Dashboard</Link>
        </div>
        <ul>
            {admin ? (
                <>
                    <li>
                        <button className="logout__btn" onClick={onLogout}>
                            <FaSignOutAlt /> 
                            <p>Logout</p>
                        </button>
                    </li>
                </>
            ) : null}
        </ul>
    </header>
  )
}
