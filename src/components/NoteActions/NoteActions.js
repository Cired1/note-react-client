import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import noteService from "../../services/notes/noteService";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ModalContext from "../../context/modal";
import EditContext from "../../context/edit";
import { useContext } from "react";

const NoteActions = ({ id }) => {
    const user = JSON.parse(localStorage.getItem("authToken"));
    const queryClient = useQueryClient();

    const { openEditModal } = useContext(ModalContext);
    const { setNoteId } = useContext(EditContext);

    const {
        mutate,
    } = useMutation((id) => noteService.deleteNote(user.token, id));

    const deleteNote = () => {
        mutate(id, {
            onSuccess: (res) => {
                toast.success(res.message, { theme: "dark" })
                queryClient.invalidateQueries("notes");
            }
        })
    }

    const updateNote = () => {
        openEditModal();
        setNoteId(id);
    }

    return (
        <td className="d-flex gap-1">
            <button
                className="d-flex justify-content-center align-items-center btn btn-secondary"
                onClick={updateNote}
            >
                <FiEdit />
            </button>
            <button
                className="d-flex justify-content-center align-items-center btn btn-danger"
                onClick={deleteNote}
            >
                <FiTrash2 />
            </button>
        </td>
    )
}

export default NoteActions
