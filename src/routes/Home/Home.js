import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import CreateModal from "../../components/CreateModal/CreateModal";
import Navbar from "../../components/Navbar/Navbar";
import NoteList from "../../components/NoteList/NoteList";
import CreateNote from "../../components/CreateNote/CreateNote";

const Home = () => {

    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate, user])

    return (
        <>
            <Navbar />
            <div className="container pt-4">
                <Header />
                <NoteList />
            </div>
            <CreateModal>
                <CreateNote />
            </CreateModal>
        </>

    )
}

export default Home
