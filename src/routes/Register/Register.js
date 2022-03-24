import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";
import useRedirect from "../../hooks/useRedirect";
import { SideImage } from "../../components";

const Register = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    useRedirect();

    const {
        mutate,
    } = useMutation((newUser) => authService.register(newUser));

    const onSubmit = (data) => {
        const { username, email, password, passwordRepeat } = data;

        if (password !== passwordRepeat) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
            mutate({
                username,
                email,
                password
            }, {
                onSuccess: (res) => {
                    toast.success(res.message, { theme: "dark" });
                    navigate("/");
                },
                onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
            })
        }
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
                                onSubmit={handleSubmit(onSubmit)}
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
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        {...register("username")}
                                    />
                                </div>
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
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm password"
                                        {...register("passwordRepeat")}
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
