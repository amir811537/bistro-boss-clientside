import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  // console.log(location);
  const noHeadrFooter = location.pathname.includes("login") ||location.pathname.includes("register");

  return (
    <div>
      {noHeadrFooter || <Navbar></Navbar>}
      
      <Outlet></Outlet>
      {noHeadrFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
