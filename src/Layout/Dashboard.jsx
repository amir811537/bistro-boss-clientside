import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCarts();
  // todo :
  const [isAdmin] = useAdmin();
  console.log('admin',isAdmin)

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
            
            <li>
   
    <NavLink to="/dashboard/AdminHome">
    <FaHome></FaHome> Admin Home 
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/additems">
    <FaUtensils></FaUtensils>Add item
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/manageitems">
    <FaList></FaList>Manage items
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/bookings">
    <FaBook/>Manage Bookings
    </NavLink>
</li>
<li>
   
    <NavLink to="/dashboard/users">
    <FaUsers/>All User
    </NavLink>
</li>
            
            
            </>
          ) : (
            <>
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
                  <MdOutlineReviews />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shaare navlink  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaList />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contacts
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
