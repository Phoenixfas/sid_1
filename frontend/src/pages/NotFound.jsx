import { AiOutlineWarning } from "react-icons/ai"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function NotFound () {
    const navigate = useNavigate()

    const {admin} = useSelector((state) => state.auth)

    useEffect(() => {
        if(!admin){
        navigate("/login")
        }
    }, [admin, navigate])


    return(
        <div style={{width: "100vw", height: "70vh", marginTop: "auto", display: "flex", color: "#fff", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <AiOutlineWarning size={100} />
            <h2>Page Not Found</h2>
        </div>
    )
}