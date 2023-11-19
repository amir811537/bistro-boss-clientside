import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
const {createUser}=useContext(AuthContext);



  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
      const loggedUser =result.user;
      console.log(loggedUser)
    })
  };

  //   console.log(watch('jsdkjdgk'))

  return (
  <>
  

  <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>


  <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
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
                {...register("password", 
                { required: true, 
                  minLength:6, 
                  maxLength: 20,
                // pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]/
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
                  {errors.password?.type === "required" && (
        <p className="text-red-600 "> password  is required</p>
      )}
                  {errors.password?.type === "minLength" && (
        <p className="text-red-600 "> password must be 6  is charthers</p>
      )}
                  {/* {errors.password?.type === "pattern" && (
        <p className="text-red-600 "> password must be one uppercase one lower case   is charthers</p>
      )} */}
                  {errors.password?.type === "maxLength" && (
        <p className="text-red-600 "> password must be less then 20  is charthers</p>
      )}


              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register Now"
              />
            </div>
<Link to='/login'><p>alreay have an account ! please <span className="text-xl"> Login</span></p></Link>

          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Register;
