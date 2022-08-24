import "./Register.css"
import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"


export default function Register() {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {

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
