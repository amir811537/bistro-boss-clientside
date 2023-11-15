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
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={fatureimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
