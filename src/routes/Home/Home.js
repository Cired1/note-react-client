import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
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
            <Modal>
                <CreateNote />
            </Modal>
        </>

    )
}

export default Home
