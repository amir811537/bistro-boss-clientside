/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import { data } from "autoprefixer";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";

const FoodCards = ({ item }) => {
  const { name, recipe, image, price, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const[,refetch] =useCarts()

  const handelAddToCart = () => {
    // console.log(food,user?.email)
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res, data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 3000,
          });
           //   refetch cart to update the cart items count
       refetch();
        }
      });
      
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
   
    }
  };

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">
        ${price}
      </p>
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
        <p className="text-sm md:text-base">{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={handelAddToCart}
            className="btn border-orange-400 text-orange-400 bg-[#E8E8E8] uppercase border-0 border-b-4  mt-4 hover:bg-[#1F2937]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
