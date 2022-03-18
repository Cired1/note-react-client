import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import authService from "../../services/auth/authService";
import loginImg from "../../assets/login.jpg";
import SideImage from "../../components/SideImage/SideImage";

const Login = () => {

    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [navigate, user])

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {
        email,
        password,
    } = formData;

    const {
        mutate,
    } = useMutation((userData) => authService.login(userData));

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        mutate(userData, {
            onSuccess: () => {
                navigate("/");
                toast.success("Welcome back", { theme: "dark" })
            },
            onError: (error) => {
                toast.error(error.response.data.message, { theme: "dark" })
            }
        })

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
                                onSubmit={handleSubmit}
                            >
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
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
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <p className="small mb-4 pb-lg-2"><Link to="/forgotpassword" className="text-muted">Forgot password?</Link></p>
                                <p>Don't have an account? <Link to="/register" className="link-info">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                    <SideImage />
                </div>
            </div>
        </section>
    )
}

export default Login
