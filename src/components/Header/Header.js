import { useContext } from "react";
import ModalContext from "../../context/modal";
import { FiPlus } from "react-icons/fi";

const Header = () => {
    const { openCreateModal } = useContext(ModalContext);

    return (
        <div className="d-flex bd-highlight mb-3">
            <div className="me-auto p-2 bd-highlight"><h2>Notes</h2></div>
            <div className="p-2 bd-highlight">
                <button
                    type="button"
                    className="d-flex align-items-center gap-1 btn btn-primary"
                    onClick={openCreateModal}
                >
                    <span className="fw-bold">Create</span>
                    <FiPlus size={20} />
                </button>
            </div>
        </div>
    )
}

export default Header
