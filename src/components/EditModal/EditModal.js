import { useContext } from "react"
import ModalContext from "../../context/modal"

const EditModal = ({ children }) => {
    const { isEditOpen } = useContext(ModalContext);

    return (
        <div
            className={`modal${isEditOpen ? " modal-show" : ""}`}
            tabIndex="-1"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Note</h5>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
