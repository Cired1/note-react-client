import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirect() {
    const user = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }, [navigate, user])

}

export default useRedirect;