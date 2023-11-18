/* eslint-disable react/prop-types */
import FoodCards from "../../../Components/FoodsCards/FoodCards";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({items}) => {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

    return (
        <div>
          


<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
{items.map((item) => (
              <FoodCards key={item._id} item={item}></FoodCards>
            ))}

</div>


        </SwiperSlide>
      
      </Swiper>


          </div>
    );
};

export default OrderTab;