import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



const Testtimonial = () => {

const [reviews,SetReviews]=useState([]);
useEffect(()=>{
fetch('reviews.json')
.then(res=>res.json())
.then(data=>SetReviews(data))



},[])



    return (
       <section className="my-20">

        <SectionTitle 
        heading={"Testimonials"}
        subHeading={"what our client say"}>

        </SectionTitle>


        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
      {
        reviews.map(review=> <SwiperSlide
        
        key={review._id}
        >
<div  className=" flex flex-col items-center my-16 mx-24 ">


<Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <FaQuoteLeft className="text-5xl" />



    <p className="py-8">{review.details}</p>
    <h3 className="text-2xl text-orange-400">{review.name}</h3>
</div>


        </SwiperSlide>)
      }
      </Swiper>
        
       </section>
    );
};

export default Testtimonial;