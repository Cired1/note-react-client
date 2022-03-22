import { useContext } from "react"
import ModalContext from "../../context/modal"

const Modal = ({ children }) => {
    const { isOpen, closeModal } = useContext(ModalContext);

    return (
        <div
            className={`modal${isOpen ? " modal-show" : ""}`}
            tabIndex="-1"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create Note</h5>
                        <button
                            className="btn-close"
                            onClick={closeModal}
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

export default Modal
