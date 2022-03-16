import { Link } from "react-router-dom";
import loginImg from "../../assets/login.jpg";

const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="pt-1 mb-4 w-100">
                                    <button
                                        className="btn btn-info btn-lg btn-block w-100 text-light"
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </div>
                                <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                                <p>Don't have an account? <Link to="/register" className="link-info">Register here</Link></p>
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

export default Login
