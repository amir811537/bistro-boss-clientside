
const RecommendCard = ({single}) => {
    const{image,name,recipe}=single;
    return (
        <div className="relative flex max-w-[24rem] flex-col bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img
            src={image}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block  font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
       {name}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
           {recipe}
          </p>
        </div>
<div className="py-3 pb-4 ">
<button className="btn  text-[#BB8506] flex items-center justify-center mx-auto  bg-[#E8E8E8] w-1/2 hover:btn-neutral"> Add to cart</button>

    </div>       
      </div>
    );
};

export default RecommendCard;