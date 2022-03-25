import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";
import useRedirect from "../../hooks/useRedirect";
import { SideImage } from "../../components";

const ResetPassword = () => {
    const { resetToken } = useParams();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    useRedirect();

    const {
        mutate,
    } = useMutation((password) => authService.resetPassword(resetToken, password));

    const onSubmit = (data) => {
        const { password, passwordConfirm } = data;
        if (password !== passwordConfirm) {
            toast.error("Passwords do not match", { theme: "dark" });
        } else {
            mutate({ password }, {
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
                                    Reset password
                                </h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="New password"
                                        {...register("password")}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm new password"
                                        {...register("passwordConfirm")}
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
