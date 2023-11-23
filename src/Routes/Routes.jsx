import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/cart/Cart";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import Adminroutes from "./Adminroutes";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[

        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element:<Menu></Menu>
        },
        {
          path: "order/:category",
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret> </PrivateRoute>

        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },




        // admin routes

{
  path:'additems',
  element:<Adminroutes><AddItems></AddItems></Adminroutes>
}
       , {
          path:'users',
          element:<Allusers></Allusers>
        }
      ]
    }
  ]);

  export default router;
