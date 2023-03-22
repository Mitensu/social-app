import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";

const AppNav = () => {

    return(
        <div className="AppNav"> 
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
            <Link to='signup'>Signup</Link>
            <Link to='/'>Loggout</Link>
        </div>
    )
}
export default AppNav;