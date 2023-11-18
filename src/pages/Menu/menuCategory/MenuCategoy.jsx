/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategoy = ({items,title,img}) => {
  console.log(title)
    return (
 <div className="pt-8">
    { title && <Cover img={img} title={title}></Cover>}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-16">
          {items ? (
            items.map((item) => <MenuItem item={item} key={item._id}></MenuItem>)
          ) : (
            <p>
              <span className="loading loading-infinity loading-lg"></span>
            </p>
          )}
        </div>
  <Link to={`/order/${title}`}>
  <button className="btn flex items-center mx-auto border-orange-400 text-orange-400
         bg-[#E8E8E8] uppercase border-0 border-b-4  mt-4 hover:bg-[#1F2937]">Order now</button>
  </Link>

 </div>
    );
};

export default MenuCategoy;