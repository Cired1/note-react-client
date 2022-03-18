import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SideImage from "../../components/SideImage/SideImage";
import authService from "../../services/auth/authService";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { resetToken } = useParams();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [navigate, user])

    const [formData, setFormData] = useState({
        password: "",
        passwordConfirm: "",
    })

    const {
        password,
        passwordConfirm
    } = formData;

    const {
        mutate,
    } = useMutation((password) => authService.resetPassword(resetToken, password));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
            mutate({ password }, {
                onSuccess: () => {
                    toast.success("Password has been changed succesfully", { theme: "dark" })
                    navigate("/");
                },
                onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
            })
        }
    }

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                            <form
                                style={{ width: '23rem' }}
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <h3
                                    className="fw-normal mb-3 pb-3"
                                    style={{ letterSpacing: '1px' }}
                                >
                                    Reset password
                                </h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control form-control-lg"
                                        placeholder="New password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="passwordConfirm"
                                        name="passwordConfirm"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm new password"
                                        value={passwordConfirm}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <SideImage />
                </div>
            </div>
        </section>
    )
}

export default ResetPassword
