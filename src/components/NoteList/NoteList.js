import { useQuery } from "react-query";
import noteService from "../../services/notes/noteService";
import NoteActions from "../NoteActions/NoteActions";

const NoteList = () => {

    const user = JSON.parse(localStorage.getItem("authToken"));

    const {
        data: notes,
        isLoading,
        isError,
        error
    } = useQuery(["notes"], () => noteService.getNotes(user.token));

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="mytable">
                    {isLoading
                        ? <tr>
                            <th scope="row" colSpan={5}>Loading...</th>
                        </tr>
                        : isError
                            ? <tr><th scope="row" colSpan={5}>{error}</th></tr>
                            : notes.data.length > 0
                                ? notes.data.map((note) =>
                                    <tr key={note._id}>
                                        <td>{note.title}</td>
                                        <td>{note.content}</td>
                                        <NoteActions id={note._id} />
                                    </tr>
                                )
                                : <tr><th scope="row" colSpan={5}>Empty</th></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NoteList
