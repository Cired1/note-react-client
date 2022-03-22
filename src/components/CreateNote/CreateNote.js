import { useState, useContext } from "react";
import ModalContext from "../../context/modal";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import noteService from "../../services/notes/noteService";
import { FiSave } from "react-icons/fi";

const CreateNote = () => {
    const { closeModal } = useContext(ModalContext);

    const user = JSON.parse(localStorage.getItem("authToken"));

    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
    })

    const {
        title,
        content
    } = formData;

    const {
        mutate,
    } = useMutation((newNote) => noteService.createNote(user.token, newNote));

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
            title,
            content
        }, {
            onSuccess: (res) => {
                toast.success(res.message, { theme: "dark" })
                queryClient.invalidateQueries("notes");
                closeModal();
            },
            onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
        })
    }

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="form-outline mb-2">
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control form-control-lg"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <div className="form-outline mb-2">
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    className="form-control form-control-lg"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Content"
                    value={content}
                    onChange={handleChange}
                >
                </textarea>
            </div>
            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="d-flex align-items-center gap-2 btn btn-primary align-self-end"
                >
                    <span className="fw-bold">Save</span>
                    <FiSave />
                </button>
            </div>
        </form>
    )
}

export default CreateNote
