import { useContext } from "react"
import ModalContext from "../../context/modal"

const CreateModal = ({ children }) => {
    const { isCreateOpen, closeCreateModal } = useContext(ModalContext);

    return (
        <div
            className={`modal${isCreateOpen ? " modal-show" : ""}`}
            tabIndex="-1"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create Note</h5>
                        <button
                            className="btn-close"
                            onClick={closeCreateModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateModal
