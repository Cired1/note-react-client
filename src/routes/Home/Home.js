import { useEffect } from "react"
import { useNavigate } from "react-router-dom";



const Home = () => {
    const user = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate, user])

    return (
        <section className="container vh-100">
            <h1>Bienvenido</h1>
        </section>
    )
}

export default Home
