import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Modals, Header, Navbar, NoteList } from "../../components";

const Home = () => {
    const user = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user, navigate])

    return (
        <>
            <Navbar />
            <div className="container pt-4">
                <Header />
                <NoteList />
            </div>
            <Modals />
        </>

    )
}

export default Home
