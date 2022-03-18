import loginImg from "../../assets/login.jpg";

const SideImage = () => {
    return (
        <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
                src={loginImg}
                alt="Login"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
        </div>
    )
}

export default SideImage
