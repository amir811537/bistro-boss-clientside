import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
const image_hostion_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api=`https://api.imgbb.com/1/upload?key=${image_hostion_key};`
const AddItems = () => {



  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              {...register("name", { require: true })}
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
                {...register("category", { require: true })}
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
                {...register("price", { require: true })}
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
              {...register("recipe", { require: true })}
              className="textarea textarea-bordered h-24"
              placeholder=" Type your Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { require: true })}
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
