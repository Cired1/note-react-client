import { useContext } from "react";
import ModalContext from "../../context/modal";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import noteService from "../../services/notes/noteService";
import { FiSave, FiX } from "react-icons/fi";

const EditNote = () => {
    const { closeEditModal } = useContext(ModalContext);

    const { register, handleSubmit } = useForm();

    const user = JSON.parse(localStorage.getItem("authToken"));

    const queryClient = useQueryClient();

    const {
        mutate,
    } = useMutation((newNote) => noteService.createNote(user.token, newNote));

    const onSubmit = (data) => {
        const { title, content } = data;
        mutate({
            title,
            content
        }, {
            onSuccess: (res) => {
                toast.success(res.message, { theme: "dark" })
                queryClient.invalidateQueries("notes");
                closeEditModal();
            },
            onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
        })
    }

    const closeModal = () => {
        closeEditModal();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form-outline mb-2">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Title"
                    {...register("title")}
                />
            </div>
            <div className="form-outline mb-3">
                <textarea
                    type="text"
                    className="form-control form-control-lg"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Content"
                    {...register("content")}
                >
                </textarea>
            </div>
            <div className="d-flex justify-content-end gap-3">
                <button
                    type="submit"
                    className="d-flex align-items-center gap-2 btn btn-primary"
                >
                    <span className="fw-bold">Save</span>
                    <FiSave />
                </button>
                <button
                    type="button"
                    className="d-flex align-items-center gap-2 btn btn-danger"
                    onClick={closeModal}
                >
                    <span className="fw-bold">Close</span>
                    <FiX />
                </button>
            </div>
        </form>
    )
}

export default EditNote
