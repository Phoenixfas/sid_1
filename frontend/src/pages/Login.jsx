import "./Login.css"
import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"


export default function Login() {
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { admin, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || admin){
            navigate("/")
        }
        dispatch(reset())

    }, [admin, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const adminData = {
            email,
            password
        }
        
        dispatch(login(adminData))
    }

    if(isLoading){
        return <Spinner />
    }
  return (
    <div className="login">
        <section className="l__heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
        </section>
        <section className="l__form">
            <form onSubmit={onSubmit} >
                <input type="text" id="email" name="email" value={email} placeholder="Enter email" onChange={onChange} autoComplete="off" required />
                <input type="password" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} required />
                <button type="submit" className="l__btn" >Login</button>
            </form>
        </section>
    </div>
  )
}
