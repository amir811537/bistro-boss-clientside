import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import RecommendCard from "./RecommendCard";

const Recommends = () => {
    const [recommendation, setRecommendation] = useState();

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const chefRecommends = data.filter(
                    (item) => item.category === "popular"
                ).slice(0, 3)
                setRecommendation(chefRecommends);
                
            });
    }, []);

    return (
        <div>
            <section className="">
                <SectionTitle
                    heading={"CHEF RECOMMENDS"}
                    subHeading={"---Should Try---"}
                ></SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    {recommendation ? (
                        recommendation.map((single) => (
                            <RecommendCard
                                single={single}
                                key={single._id}
                            ></RecommendCard>
                        ))
                    ) : (
                        <p>
                            <span className="loading loading-infinity loading-lg"></span>
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Recommends;
