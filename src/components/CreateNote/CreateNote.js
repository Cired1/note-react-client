import { useContext } from "react";
import ModalContext from "../../context/modal";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import noteService from "../../services/notes/noteService";
import { FiSave } from "react-icons/fi";

const CreateNote = () => {
    const { closeCreateModal } = useContext(ModalContext);

    const user = JSON.parse(localStorage.getItem("authToken"));

    const queryClient = useQueryClient();

    const { register, handleSubmit } = useForm();

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
                closeCreateModal();
            },
            onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
        })
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
            <div className="form-outline mb-2">
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
