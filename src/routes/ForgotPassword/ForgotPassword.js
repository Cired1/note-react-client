import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";
import useRedirect from "../../hooks/useRedirect";
import { SideImage } from "../../components";

const ForgotPassword = () => {
    const { register, handleSubmit, reset } = useForm();

    useRedirect();

    const {
        mutate,
    } = useMutation((email) => authService.forgotPassword(email));

    const onSubmit = (data) => {
        const { email } = data;
        mutate({ email }, {
            onSuccess: (res) => {
                toast.success(res.message, { theme: "dark" });
                reset({ email: "" });
            },
            onError: (error) => toast.error(error.response.data.message, { theme: "dark" })
        })
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
                                    Recover password
                                </h3>
                                <p className="pb-3">
                                    Please enter the email with which you registered your account. We will send you a link to change your password.
                                </p>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        {...register("email")}
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
