import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">SID - Dashboard</Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt /> 
                    <p>Login</p>
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUser /> 
                    <p>Register</p>
                </Link>
            </li>
        </ul>
    </header>
  )
}
