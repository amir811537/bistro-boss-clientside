import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem";


const PopularMenu = () => {
const [menu]=useMenu();
const popular =menu.filter(item=>item.categoy==="popular");


  // const [menu, setMenu] = useState();

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {popular ? (
            popular.map((item) => <MenuItem item={item} key={item._id}></MenuItem>)
          ) : (
            <p>
              <span className="loading loading-infinity loading-lg"></span>
            </p>
          )}
        </div>

        <button className="uppercase btn flex mx-auto border-orange-400 text-orange-400 bg-[#E8E8E8]  border-0 border-b-4  mt-4 hover:bg-[#1F2937]">
          View Full Menu
        </button>
      </section>
    </div>
  );
};

export default PopularMenu;
