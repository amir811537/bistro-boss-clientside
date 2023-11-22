import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {

const [cart]=useCarts();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400" >
<ul className="menu p-4">
<li>
   
    <NavLink to="/dashboard/userHome">
    <FaHome></FaHome> User Home 
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/reservation">
    <FaCalendar></FaCalendar>Reservation
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/cart">
    <FaShoppingCart></FaShoppingCart> My cart({cart.length})
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/review">
    <MdOutlineReviews />Add Review
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/bookings">
    <FaList />My Bookings
    </NavLink>
</li>
<div className="divider"></div>
<li>
   
    <NavLink to="/">
    <FaHome></FaHome> Home 
    </NavLink>
</li>
<li>
   
    <NavLink to="/menu">
    <FaList />Menu
    </NavLink>
</li>
</ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;