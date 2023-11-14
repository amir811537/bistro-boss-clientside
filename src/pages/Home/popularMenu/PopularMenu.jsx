import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {menu ? (
            menu.map((item) => (
              <MenuItem item={item} key={item._id}></MenuItem>
            ))
          ) : (
            <p><span className="loading loading-infinity loading-lg"></span></p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
