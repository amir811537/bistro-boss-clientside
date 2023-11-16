/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {

    const{name,recipe,image,price}=item;



    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3>{name}------------------</h3>
                <p>{recipe}</p>
                <p className="text-yellow-400" >${price}</p>

            </div>

            
        </div>
    );
};

export default MenuItem;