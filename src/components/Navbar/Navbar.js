import { useNavigate } from "react-router-dom";
import authService from "../../services/auth/authService";
import { FiLogOut } from "react-icons/fi"

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-dark bg-dark p-3">
            <div className="container">
                <span className="navbar-brand">React Note</span>
                <button
                    className="d-flex align-items-center gap-2 btn btn-danger"
                    onClick={handleLogout}
                >
                    <span className="fw-bold">Logout</span> 
                    <FiLogOut />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
