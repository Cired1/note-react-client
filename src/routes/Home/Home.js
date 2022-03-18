import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth/authService";

const Home = () => {
    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate, user])

    const handleLogout = () => {
        authService.logout();
        navigate("/login")
    }

    return (
        <section className="container vh-100">
            <h1>Bienvenido</h1>
            <button
                className="btn btn-primary"
                onClick={handleLogout}
            >
                Log out
            </button>
        </section>
    )
}

export default Home
