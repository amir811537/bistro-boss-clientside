
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import fatureimg from "../../../assets/home/featured.jpg";
import './feature-item.css'

const Feature = () => {
  return (
    <div className="feature-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-20 pb-8 md:pb-20 pt-12 px-6 md:px-12 lg:px-24">
        <div className="mb-8 md:mb-0 md:mr-8">
          <img src={fatureimg} alt="" className="w-full h-auto" />
        </div>
        <div>
          <p className="text-sm md:text-base">March 20, 2023</p>
          <p className="text-lg md:text-xl font-bold">WHERE CAN I GET SOME?</p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white btn-outline border-0 border-b-4 mt-4 hover:text-gray-100">
      Read more
    </button>        </div>
      </div>
    </div>
  );
};

export default Feature;
