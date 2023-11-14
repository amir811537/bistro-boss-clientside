import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import side1 from "../../../assets/home/slide1.jpg";
import side2 from "../../../assets/home/slide2.jpg";
import side3 from "../../../assets/home/slide3.jpg";
import side4 from "../../../assets/home/slide4.jpg";
import side5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <section>
      <SectionTitle
        heading="Order Online"
        subHeading="---From 11:00am to 10:00pm---"
      />
      
    </section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={side1} alt="" />

          <h3 className="text-4xl uppercase  text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={side2} alt="" />

          <h3 className="text-4xl uppercase  text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={side3} alt="" />
          <h3 className="text-4xl uppercase  text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={side4} alt="" />

          <h3 className="text-4xl uppercase  text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={side5} alt="" />
          <h3 className="text-4xl uppercase  text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
