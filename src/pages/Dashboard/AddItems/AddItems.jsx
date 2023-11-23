import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const image_hostion_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api=`https://api.imgbb.com/1/upload?key=${image_hostion_key};`
const AddItems = () => {

const axiosPublic=useAxiosPublic()

  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    const imageFile ={image:data.image[0]}
    const res=await axiosPublic.post(image_hostion_api,imageFile,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    console.log(res.data)
    
    console.log(data)

};
//   image upload to imagebb and then get an url


  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text"> Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder=" Recipe Name"
              className="input input-bordered w-full  "
            />
          </div>

          <div className="lg:flex gap-6">
            {/* category */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select defaultValue='default'
                {...register("category",  {required:true})}
                className="select select-bordered w-full "
              >
                <option value='default' disabled selected>
                  select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>

            {/* price */}

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price",  { required: true })}
                type="number"
                placeholder="price"
                className="input input-bordered w-full  "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Recipe Details</span>
            </label>
            <textarea
              {...register("recipe",  { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder=" Type your Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image",  { required: true })}
              type="file"
              className="file-input w-full "
            />
          </div>

          <button className="btn">
            {" "}
            <FaUtensils></FaUtensils>Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
