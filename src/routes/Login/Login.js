import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";
import SideImage from "../../components/SideImage/SideImage";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate("/");
                toast.success("Welcome back", { theme: "dark" })
            },
            onError: (error) => {
                toast.error(error.response.data.message, { theme: "dark" })
            }
        })

    }

    const navigate = useNavigate();

    const user = localStorage.getItem("authToken");

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [navigate, user])

    const {
        mutate,
    } = useMutation((userData) => authService.login(userData));

    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                            <form
                                style={{ width: '23rem' }}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        {...register("email")}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        {...register("password")}
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
