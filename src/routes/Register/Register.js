import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import loginImg from "../../assets/login.jpg";
import authService from "../../services/auth/authService";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordRepeat: ""
    })

    const {
        username,
        email,
        password,
        passwordRepeat
    } = formData;

    const {
        mutate,
    } = useMutation((newUser) => authService.register(newUser), {
        onSuccess: () => {
            navigate("/");
            toast.success("You have successfully registered", { theme: "dark" })
        },
        onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
             mutate({
                 username,
                 email,
                 password
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
                                        required
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
                                        required
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="repeatpassword"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm password"
                                        required
                                        value={passwordRepeat}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="button"
                                    >
                                        Register
                                    </button>
                                </div>
                                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                <p>Already have an account? <Link to="/login" className="link-info">Log In</Link></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img
                            src={loginImg}
                            alt="Login"
                            className="w-100 vh-100"
                            style={{ objectFit: 'cover', objectPosition: 'left' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
