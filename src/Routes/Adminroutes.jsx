import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const Adminroutes = (children) => {
const [isAdmin,isAdminLoading]=useAdmin();
const [user,loading]=useAuth();
const location =useLocation();


 
if(loading || isAdminLoading){
    return <span className="loading loading-spinner text-error"></span>
}
if(user && isAdmin){
    return children;
}
return <Navigate state={{from: location}} replace to='/login'></Navigate>

};

export default Adminroutes;