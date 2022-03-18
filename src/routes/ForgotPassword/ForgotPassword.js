import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideImage from "../../components/SideImage/SideImage";
import authService from "../../services/auth/authService";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [navigate, user])

    const [email, setEmail] = useState("")

    const {
        mutate,
    } = useMutation((email) => authService.forgotPassword(email));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            toast.error("Please enter your email", { theme: "dark" });
        } else {
            mutate({ email }, {
                onSuccess: () => {
                    setEmail("");
                    toast.success("We have send a link to reset your password to your email", { theme: "dark" })
                },
                onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
            })
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
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
                                    Recover password
                                </h3>
                                <p className="pb-3">
                                    Please enter the email with which you registered your account. We will send you a link to change your password.
                                </p>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="submit"
                                    >
                                        Send Email
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

export default ForgotPassword
