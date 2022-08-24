import "./Login.css"
import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"


export default function Login() {
    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {

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
                <button type="submit" className="l__btn" >Submit</button>
            </form>
        </section>
    </div>
  )
}
