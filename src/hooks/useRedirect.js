import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirect() {
    const user = localStorage.getItem("authToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [navigate, user])

}

export default useRedirect;