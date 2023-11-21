import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import regsterimg from "../../assets/others/loginimg11.png";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  const { googleSignin,createUser,updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
reset,
    formState: { errors },
  } = useForm();
const navigate =useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name,data.PhotoURL)
      .then(()=>{
console.log('user profile info is updated')
reset();
Swal.fire({
  position:"top-start",
  icon:'success',
  title:'register successful',
  timer: 2000
})
navigate('/');
      })
      .catch(error=>console.log(error))
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
      navigate(location?.state ? location.state : "/");

    });
};





  //   console.log(watch('jsdkjdgk'))

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div className="hero imgofbg min-h-screen ">
        <div className="hero-content shadow-2xl flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={regsterimg} className="py-6">
              
            </img>
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
              <h1 className="text-4xl text-center font-bold">Register</h1>

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URl"
                  {...register("PhotoURL", { required: true })}
                  name="PhotoURL"
                  className="input input-bordered"
                />
                {errors.PhotoURL && (
                  <span className="text-red-600">PhotoURL is required</span>
                )}
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]/
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 "> password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 ">
                    {" "}
                    password must be 6 is charthers
                  </p>
                )}
                {/* {errors.password?.type === "pattern" && (
        <p className="text-red-600 "> password must be one uppercase one lower case   is charthers</p>
      )} */}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 ">
                    {" "}
                    password must be less then 20 is charthers
                  </p>
                )}

              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-[#D1a054B3]"
                  type="submit"
                  value="Register Now"
                />
              </div>
              <Link to="/login">
                {" "}
                <p className="text-center text-[#D1a054]">
                Already registered? Go to login</p>
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

export default Register;
