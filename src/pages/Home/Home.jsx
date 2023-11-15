import Callus from "../Callus/Callus";
import Recommends from "../Recommeds/Recommends";
import BistroBoss from "../bistroboss/BistroBoss";
import Testtimonial from "../testtimonial/Testtimonial";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import Category from "./category/Category";
import PopularMenu from "./popularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <BistroBoss></BistroBoss>
          <PopularMenu></PopularMenu>
          <Callus></Callus>
          <Recommends></Recommends>
          <Feature></Feature>
          <Testtimonial></Testtimonial>
        </div>
    );
};

export default Home;