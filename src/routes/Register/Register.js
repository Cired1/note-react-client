import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import authService from "../../services/auth/authService";
import SideImage from "../../components/SideImage/SideImage";

const Register = () => {
    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [navigate, user])

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordRepeat: "",
    })

    const {
        username,
        email,
        password,
        passwordRepeat
    } = formData;

    const {
        mutate,
    } = useMutation((newUser) => authService.register(newUser));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
            mutate({
                username,
                email,
                password
            }, {
                onSuccess: () => {
                    navigate("/");
                    toast.success("You have successfully registered", { theme: "dark" })
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
                                    Register
                                </h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        value={username}
                                        onChange={handleChange}
                                    />
                                </div>
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
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="passwordRepeat"
                                        name="passwordRepeat"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm password"
                                        value={passwordRepeat}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                                <p className="small mb-4 pb-lg-2"><Link to="/forgotpassword" className="text-muted">Forgot password?</Link></p>
                                <p>Already have an account? <Link to="/login" className="link-info">Log In</Link></p>
                            </form>
                        </div>
                    </div>
                    <SideImage />
                </div>
            </div>
        </section>
    )
}

export default Register
