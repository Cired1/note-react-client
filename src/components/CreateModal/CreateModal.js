import { useContext } from "react"
import ModalContext from "../../context/modal"

const CreateModal = ({ children }) => {
    const { isCreateOpen } = useContext(ModalContext);

    return (
        <div
            className={`modal${isCreateOpen ? " modal-show" : ""}`}
            tabIndex="-1"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create Note</h5>
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
