import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
  
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
          path: "order/:caregory",
          element:<Order></Order>
        }
      ]
    },
  ]);
  export default router;
