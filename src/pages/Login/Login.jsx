import { useContext, useEffect, useState } from "react";
import "./login.css";

import { FcGoogle } from "react-icons/fc";
import loginimg from "../../assets/others/loginimg11.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { singnIn,googleSignin } = useContext(AuthContext);

  const [disable, setDisable] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log('state of the location login page ',location.state)

  const handelCaptcha = (e) => {
    const user_capCha_value = e.target.value;
    // console.log(user_capCha_value)
    if (validateCaptcha(user_capCha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    singnIn(email, password).then((result) => {
      const user = result.user;
      console.log("=====>login user", user);

      Swal.fire({
        title: "User Login Succcessful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handelGoogle = () => {
    googleSignin().then((result) => {
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "Login success",
        showConfirmButton: false,
        timer: 3000,
      });
      navigate(from, { replace: true });

    });
};


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="imgofbg hero min-h-screen">
        <div className="hero-content shadow-2xl flex-col lg:flex-row-reverse">
          <div className="hidden lg:block w-1/2">
            <img src={loginimg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="card  md:w-1/2 max-w-sm  ">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-4xl text-center font-bold">Login </h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handelCaptcha}
                  type="text"
                  placeholder="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn text-white bg-[#D1a054B3]"
                  type="submit"
                  value="Login"
                ></input>
              </div>
              <Link to="/register">
                {" "}
                <p className="text-center text-[#D1a054]">
                  New here? Create a New Account!
                </p>
              </Link>
              <p className="text-center text-[#444]"> Or sign in with </p>

              <button onClick={handelGoogle} className="felx items-center justify-center text-center text-5xl mx-auto">
                {" "}
                <FcGoogle />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
