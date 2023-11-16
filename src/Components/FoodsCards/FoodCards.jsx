/* eslint-disable react/prop-types */

const FoodCards = ({item}) => {
    const{name,recipe,image,price}=item;

    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure>
            <img className="w-full h-48 object-cover" src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">${price}</p>
        <div className="card-body p-4">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>
            <p className="text-sm md:text-base">{recipe}</p>
            <div className="card-actions justify-center mt-4">
                <button className="btn border-orange-400 text-orange-400 bg-[#E8E8E8] uppercase border-0 border-b-4  mt-4 hover:bg-[#1F2937]">add to cart</button>

            </div>
        </div>
    </div>
    );
};

export default FoodCards;