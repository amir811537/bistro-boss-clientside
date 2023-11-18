import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/menu-background.jpeg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategoy from "./menuCategory/MenuCategoy";
const Menu = () => {

    const [menu]=useMenu();
    const desserts =menu.filter(item=>item.category==="dessert");
    const pizza =menu.filter(item=>item.category==="pizza");
    const salad =menu.filter(item=>item.category==="salad");
    const soup =menu.filter(item=>item.category==="soup");
    const offereds =menu.filter(item=>item.category==="offered");



  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuimg} title="our menu"></Cover>
      {/* main cover */}
   <SectionTitle subHeading="Dont miss " heading="Today's offers"></SectionTitle>
   {/* offered menu items */}
   <MenuCategoy items={offereds}></MenuCategoy>

   {/* desserts */}
   <MenuCategoy 
   title="dessert"
   img={dessertimg}
   items={desserts}></MenuCategoy>


{/* pizza  */}
   <MenuCategoy 
   title="pizza"
   img={pizzaimg}
   items={pizza}></MenuCategoy>
{/* salad  */}
   <MenuCategoy 
   title="salad"
   img={saladimg}
   items={salad}></MenuCategoy>
{/* pizza  */}
   <MenuCategoy 
   title="soup"
   img={soupimg}
   items={soup}></MenuCategoy>
    </div>
  );
};

export default Menu;
