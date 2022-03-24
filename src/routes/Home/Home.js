import useRedirect from "../../hooks/useRedirect";
import { Modals, Header, Navbar, NoteList } from "../../components";

const Home = () => {

    useRedirect();

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
