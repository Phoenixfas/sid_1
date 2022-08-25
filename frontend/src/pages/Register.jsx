import "./Register.css"
import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"


export default function Register() {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { admin, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    useEffect(() => {
        if(!admin){
            navigate("/login")
        }
        if(isError){
            toast.error(message)
        }
        if(isSuccess ){
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

        if(password !== password2){
            toast.error("Passwords do not match")
        }else{
            const adminData = {
                name, 
                email, 
                password
            }

            dispatch(register(adminData))
        }
    }
    if(isLoading){
        return <Spinner />
    }
  return (
    <div className="register">
        <section className="r__heading">
            <h1>
                <FaUser /> Register
            </h1>
            <p>Create an admin</p>
        </section>
        <section className="r__form">
            <form onSubmit={onSubmit} >
                <input type="text" id="name" name="name" value={name} placeholder="Enter name" onChange={onChange} autoComplete="off" required />
                <input type="text" id="email" name="email" value={email} placeholder="Enter email" onChange={onChange} autoComplete="off" required />
                <input type="password" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} required />
                <input type="password" id="password2" name="password2" value={password2} placeholder="Confirm password" onChange={onChange} required />
                <button type="submit" className="r__btn" >Submit</button>
            </form>
        </section>
    </div>
  )
}
